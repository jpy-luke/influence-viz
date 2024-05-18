import * as sdk from '@influenceth/sdk'

type RawProduct = typeof sdk.Product.TYPES[0]
type RawProcess = typeof sdk.Process.TYPES[0]
type RawBuilding = typeof sdk.Building.TYPES[0]

const preferredSources = new Map([
  ['Deionized Water', 'Water Vacuum-evaporation Desalination'],
  ['Calcium', 'Calcium Chloride Molten Salt Electrolysis'],
  ['Calcium Chloride', 'Salt Selective Crystallization'],
  ['Sodium Chloride', 'Salt Selective Crystallization'],
  ['Chlorine', 'Sodium Chloralkali Process'],
  ['Hydrochloric Acid', 'Hydrochloric Redox'],
  ['Hydrofluoric Acid', 'Apatite Acid Extraction'],
  ['Oxygen', 'Water Electrolysis']
])

class Product implements NodeLike {
  i: number
  category: string
  classification: string
  name: string
  visited: boolean
  outs: Array<EdgeLike>
  ins: Array<EdgeLike>

  constructor(rawProduct: RawProduct) {
    this.i = rawProduct.i
    this.name = rawProduct.name
    this.visited = false
    this.classification = rawProduct.classification
    this.category = rawProduct.category
    this.outs = []
    this.ins = []
  }

  bestSource(): Process | null {
    if (this.ins.length === 0) {
      return null
    }
    return this.ins.reduce((best, current) => {
      return current.weight / (current.from as Process).recipeTime >
      best.weight / (best.from as Process).recipeTime ? current : best
    }).from as Process
  }

  findSourceNames(): Set<string> {
    let retval: Set<string> = new Set()
    if (this.visited) {
      return retval
    }
    if (this.classification === 'Raw Material') {
      return new Set([this.name])
    }
    this.visited = true
    if (this.ins.length === 0) {
      retval = new Set([this.name])
    } else if (this.ins.length === 1) {
      retval = new Set([...this.ins[0].from.findSourceNames(), this.name])
    } else {
      const bestSource = preferredSources.has(this.name)
        ? this.ins.find(
          (edge) => edge.from.name == preferredSources.get(this.name)
        ).from as Process
        : this.bestSource()
      retval = new Set([...bestSource.findSourceNames(), this.name])
    }
    this.visited = false
    return retval
  }
}

class Process implements NodeLike {
  i: number
  name: string
  visited: boolean
  setupTime: number
  recipeTime: number
  ins: Array<EdgeLike>
  outs: Array<EdgeLike>

  constructor(rawProcess: RawProcess, products: Array<Product>) {
    this.i = rawProcess.i
    this.name = rawProcess.name
    this.visited = false
    this.setupTime = rawProcess.setupTime
    this.recipeTime = rawProcess.recipeTime
    this.ins = []
    this.outs = []

    for (const [productId, quantity] of Object.entries(rawProcess.inputs || {})) {
      const product = products.find((product) => product.i === parseInt(productId))
      if (product) {
        const edge = { from: product, to: this, weight: quantity }
        this.ins.push(edge)
        product.outs.push(edge)
      }
    }

    for (const [productId, quantity] of Object.entries(rawProcess.outputs || {})) {
      const product = products.find((product) => product.i === parseInt(productId))
      if (product) {
        const edge = { from: this, to: product, weight: quantity }
        this.outs.push(edge)
        product.ins.push(edge)
      }
    }

    if (rawProcess.processorType == sdk.Processor.IDS.CONSTRUCTION) {
      const buildingName = rawProcess.name.replace(' Construction', '')
      const building = products.find((product) => product.name === buildingName)
      if (building) {
        const edge = { from: this, to: building, weight: 1 }
        this.outs.push(edge)
        building.ins.push(edge)
      }
    }
  }

  findSourceNames(): Set<string> {
    let retval: Set<string> = new Set()
    if (this.visited) {
      return retval
    }
    this.visited = true
    for (const edge of this.ins) {
      retval = new Set([...retval, ...edge.from.findSourceNames()])
    }
    retval = new Set([...retval, this.name])
    this.visited = false
    return retval
  }
}

interface NodeLike {
  ins: Array<EdgeLike>
  outs: Array<EdgeLike>
  name: string
  visited: boolean

  findSourceNames(): Set<string>
}

interface EdgeLike {
  from: NodeLike
  to: NodeLike
  weight: number
}

function createProducts(): Map<string, Product> {
  const retval = new Map()
  Object.values(sdk.Product.TYPES)
    .map((product) => new Product(product))
    .forEach((product) => retval.set(product.name, product))
  const maxProductIndex = Math.max(...Array.from(retval.values()).map((product) => product.i))
  Object.values(sdk.Building.TYPES)
    .filter((building) => building.i !== 0)
    .map((building) => {
      return new Product({
        i: maxProductIndex + building.i,
        name: building.name,
        classification: 'Building',
        category: 'Building',
        massPerUnit: 0,
        volumePerUnit: 0,
        isAtomic: true
      })
    })
    .forEach((product) => retval.set(product.name, product))

  return retval
}

function createProcesses(productMap: Map<string, Product>): Map<string, Process> {
  const products = Array.from(productMap.values())
  const retval = new Map()
  Object.values(sdk.Process.TYPES)
    .map((process) => new Process(process, products))
    .forEach((process) => retval.set(process.name, process))
  return retval
}

export { Product, Process, createProducts, createProcesses }

import * as sdk from '@influenceth/sdk'

interface RawProduct {
  i: number;
  name: string;
  classification: string;
  category: string;
  massPerUnit: number;
  volumePerUnit: number;
  isAtomic: boolean;
}

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


interface RawProcess {
  i: number;
  name: string;
  processorType: number;
  setupTime: number;
  recipeTime: number;
  batched: boolean;
  inputs: { [key: number]: number };
  outputs: { [key: number]: number }
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
  Object.values(sdk.Product.TYPES as { number: RawProduct })
    .map((product) => new Product(product))
    .forEach((product) => retval.set(product.name, product))
  return retval
}

function createProcesses(productMap: Map<string, Product>): Map<string, Process> {
  const products = Array.from(productMap.values())
  const retval = new Map()
  Object.values(sdk.Process.TYPES as { number: RawProcess })
    .map((process) => new Process(process, products))
    .forEach((process) => retval.set(process.name, process))
  return retval
}

export { Product, Process, createProducts, createProcesses }

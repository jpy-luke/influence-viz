import processSource from './process'
import productSource from './product'
import buildingSource from './building'

interface RawProduct {
  i: number;
  name: string;
  classification: string;
  category: string;
  massPerUnit: number;
  volumePerUnit: number;
  isAtomic: boolean;
}

class Product {
  i: number
  category: string
  classification: string
  name: string
  inputFor: Array<Process>
  outputFrom: Array<Process>

  constructor(rawProduct: RawProduct) {
    this.i = rawProduct.i
    this.name = rawProduct.name
    this.classification = rawProduct.classification
    this.category = rawProduct.category
    this.inputFor = []
    this.outputFrom = []
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

class Process {
  i: number
  name: string
  setupTime: number
  recipeTime: number
  inputs: Map<Product, number>
  outputs: Map<Product, number>

  constructor(rawProcess: RawProcess, products: Array<Product>) {
    this.i = rawProcess.i
    this.name = rawProcess.name
    this.setupTime = rawProcess.setupTime
    this.recipeTime = rawProcess.recipeTime
    this.inputs = new Map()
    this.outputs = new Map()

    for (const [productId, quantity] of Object.entries(rawProcess.inputs)) {
      const product = products.find((product) => product.i === parseInt(productId))
      if (product) {
        this.inputs.set(product, quantity)
        product.inputFor.push(this)
      }
    }

    for (const [productId, quantity] of Object.entries(rawProcess.outputs)) {
      const product = products.find((product) => product.i === parseInt(productId))
      if (product) {
        this.outputs.set(product, quantity)
        product.outputFrom.push(this)
      }
    }
  }
}

interface RawBuildingProcess {
  constructionTime: number;
  requirements: Map<number, number>;
}

interface RawBuildingProduct {
  i: number;
  name: string;
  description: string;
}

function createProducts(): Map<string, Product> {
  const retval = new Map()
  Object.values(productSource.TYPES as { number: RawProduct })
    .map((product) => new Product(product))
    .forEach((product) => retval.set(product.name, product))
  const maxProductIndex = Math.max(...Array.from(retval.values()).map((product) => product.i))
  Object.values(buildingSource.TYPES as { number: RawBuildingProduct })
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
  Object.values(processSource.TYPES as { number: RawProcess })
    .map((process) => new Process(process, products))
    .forEach((process) => retval.set(process.name, process))
  const maxProcessIndex = Math.max(...Array.from(retval.values()).map((process) => process.i))
  Object.entries(buildingSource.CONSTRUCTION_TYPES as { number: RawBuildingProcess })
    .map((building, i) => {
      const outputProduct = buildingSource.TYPES[parseInt(building[0])]
      const proto = {
        i:  maxProcessIndex + i + 1,
        name: `${outputProduct.name} Construction`,
        setupTime: 0,
        processorType: 6,
        recipeTime: building[1].constructionTime,
        inputs: {},
        outputs: {},
        batched: false
      }
      for (const [productId, quantity] of Object.entries(building[1].requirements)) {
        proto.inputs = {...proto.inputs, [productId]: quantity}
      }
      const targetProduct = productMap.get(outputProduct.name)
      proto.outputs = {[targetProduct.i]: 1}
      return new Process(proto, products)
    })
  .forEach((process) => retval.set(process.name, process))
  return retval
}

const productMap = createProducts()
const processMap = createProcesses(productMap)

export { Product, Process, productMap, processMap }

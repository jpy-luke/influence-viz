import processSource from './process'
import productSource from './product'

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
  inputs: Map<number, number>;
  outputs: Map<number, number>;
}

class Process {
  i: number
  name: string
  inputs: Map<Product, number>
  outputs: Map<Product, number>

  constructor(rawProcess: RawProcess, products: Array<Product>) {
    this.i = rawProcess.i
    this.name = rawProcess.name
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

function createProducts(): Map<string, Product> {
  const retval = new Map()
  Object.values(productSource.TYPES as { number: RawProduct })
    .map((product) => new Product(product))
    .forEach((product) => retval.set(product.name, product))
  return retval
}

function createProcesses(productMap: Map<string, Product>): Map<string, Process> {
  const products = Array.from(productMap.values())
  const retval = new Map()
  Object.values(processSource.TYPES as { number: RawProcess })
    .map((process) => new Process(process, products))
    .forEach((process) => retval.set(process.name, process))
  return retval
}

const productMap = createProducts()
const processMap = createProcesses(productMap)

export { Product, Process, productMap, processMap }

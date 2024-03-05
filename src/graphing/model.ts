import processes from './process';
import products from './product';

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
  i: number;
  category: string
  classification: string
  name: string
  inputFor: Array<Process>;
  outputFrom: Array<Process>;

  constructor(rawProduct: RawProduct) {
    this.i = rawProduct.i;
    this.name = rawProduct.name;
    this.classification = rawProduct.classification;
    this.category = rawProduct.category;
    this.inputFor = [];
    this.outputFrom = [];
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
  i: number;
  name: string;
  inputs: Map<Product, number>;
  outputs: Map<Product, number>;

  constructor(rawProcess: RawProcess, products: Array<Product>) {
    this.i = rawProcess.i;
    this.name = rawProcess.name;
    this.inputs = new Map();
    this.outputs = new Map();

    for(const [productId, quantity] of Object.entries(rawProcess.inputs)) {
      const product = products.find((product) => product.i === parseInt(productId));
      if (product) {
        this.inputs.set(product, quantity);
        product.inputFor.push(this);
      }
    }

    for(const [productId, quantity] of Object.entries(rawProcess.outputs)) {
      const product = products.find((product) => product.i === parseInt(productId));
      if (product) {
        this.outputs.set(product, quantity);
        product.outputFrom.push(this);
      }
    }
  }
}

function createProducts() : Array<Product> {
  const a = products.TYPES;
  return Object.values(products.TYPES as {number:RawProduct})
    .map((product) => new Product(product));
}

function createProcesses(products: Array<Product>) : Array<Process> {
  return Object.values(processes.TYPES as {number:RawProcess})
    .map((process) => new Process(process, products));
}

export { Product, Process, createProducts, createProcesses }

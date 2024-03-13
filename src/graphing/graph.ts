import MultiDirectedGraph from 'graphology'
import { Process, Product } from '@/graphing/model'
import noverlap from 'graphology-layout-noverlap'

export class ProductionGraph {
  productMap: Map<string, Product> = new Map()
  processMap: Map<string, Process> = new Map()
  public graph: MultiDirectedGraph = new MultiDirectedGraph({ multi: true })

  constructor(products: Product[], processes: Process[]) {
    products.forEach((product) => {
      this.productMap.set(product.name, product)
    })
    processes.forEach((process) => {
      this.processMap.set(process.name, process)
    })
  }

  public resetGraph() {
    this.graph = new MultiDirectedGraph({ multi: true })
  }

  public addProduct(product: string, x = 0, y = 0) {
    const newProduct = this.productMap.get(product)
    if (newProduct) {
      if (!this.graph.hasNode(newProduct.name)) {
        this.graph.addNode(newProduct.name, { x: x, y: y, size: 4, label: newProduct.name, color: '#20ee20' })

        for (const process of newProduct.outputFrom) {
          if (this.graph.hasNode(process.name)) {
            this.graph.addDirectedEdge(process.name, newProduct.name, { label: process.name, color: '#24a4cc' })
          }
        }
        for (const process of newProduct.inputFor) {
          if (this.graph.hasNode(process.name)) {
            this.graph.addDirectedEdge(newProduct.name, process.name, { label: process.name, color: '#107030' })
          }
        }
      }
    }
  }

  public addProcess(process: string, x = 0, y = 0) {
    const newProcess = this.processMap.get(process)
    if (newProcess) {
      if (!this.graph.hasNode(newProcess.name)) {
        this.graph.addNode(newProcess.name, { x: x, y: y, size: 2, label: newProcess.name, color: '#2020dd' })

        for(const product of newProcess.inputs.keys()) {
          if(this.graph.hasNode(product.name)) {
            this.graph.addDirectedEdge(product.name, newProcess.name, { label: newProcess.name, color: '#107030' })
          }
        }

        for(const product of newProcess.outputs.keys()) {
          if(this.graph.hasNode(product.name)) {
            this.graph.addDirectedEdge(newProcess.name, product.name, { label: newProcess.name, color: '#24a4cc' })
          }
        }
      }
    }
  }

  public addConsumersForProduct(product: string) {
    const targetProduct = this.productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.inputFor.length
      const yStart = y - (100 * numProcesses) / 2
      targetProduct.inputFor.forEach((process, index) => {
        if(!this.graph.hasNode(process.name)) {
          this.addProcess(process.name, x + 100, yStart + 100 * index)
        }
        this.graph.addDirectedEdge(targetProduct.name, process.name, { label: process.name, color: '#107030' })
      })
    }
  }

  public addSourcesForProduct(product: string) {
    const targetProduct = this.productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.outputFrom.length
      const yStart = y - (100 * numProcesses) / 2
      targetProduct.outputFrom.forEach((process, index) => {
        if(!this.graph.hasNode(process.name)) {
          this.addProcess(process.name, x - 100, yStart + 100 * index)
        }
        this.graph.addDirectedEdge(process.name, targetProduct.name, { label: process.name, color: '#24a4cc' })
      })
    }
  }

  public addOutputsForProcess(process: string) {
    const targetProcess = this.processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.outputs.size
      const yStart = y - (100 * numProducts) / 2
      Array.from(targetProcess.outputs.keys()).forEach((product, index) => {
        if(!this.graph.hasNode(product.name)) {
          this.addProduct(product.name, x + 100, yStart + 100 * index)
        }
        this.graph.addDirectedEdge(targetProcess.name, product.name, { label: targetProcess.name, color: '#24a4cc' })
      })
    }
  }

  public addInputsForProcess(process: string) {
    const targetProcess = this.processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.inputs.size
      const yStart = y - (100 * numProducts) / 2
      Array.from(targetProcess.inputs.keys()).forEach((product, index) => {
        if(!this.graph.hasNode(product.name)) {
          this.addProduct(product.name, x - 100, yStart + 100 * index)
        }
        this.graph.addDirectedEdge(product.name, targetProcess.name, { label: targetProcess.name, color: '#107030' })
      })
    }
  }

  public removeProduct(product: string) {
    const targetProduct = this.productMap.get(product)
    if (targetProduct && this.graph.hasNode(product)) {
      this.graph.dropNode(targetProduct.name)
    }
  }

  public removeProcess(process: string) {
    const targetProcess = this.processMap.get(process)
    if (targetProcess && this.graph.hasNode(process)) {
      this.graph.dropNode(targetProcess.name)
    }
  }

  public initializeTotalGraph() {
    const renderHints: Map<string, { x: number, y: number, color: string }> = new Map()
    renderHints.set('Raw Material', { x: -600, y: 0, color: '#20ee20' })
    renderHints.set('Refined Material', { x: -400, y: 0, color: '#29a795' })
    renderHints.set('Manufactured Good', { x: 200, y: 0, color: '#846c1f' })
    renderHints.set('Crop', { x: 500, y: -300, color: '#ca5706' })
    renderHints.set('Assembly', { x: 600, y: 0, color: '#8f24d7' })

    this.graph = new MultiDirectedGraph({ multi: true })

    const products: Product[] = Array.from(this.productMap.values())
    const processes: Process[] = Array.from(this.processMap.values())

    products.forEach((product, index) => {
      this.graph.addNode(product.name, {
        x: renderHints.get(product.classification).x + 200 * Math.floor(renderHints.get(product.classification).y / 740),
        y: renderHints.get(product.classification).y % 740,
        size: 4,
        label: product.name,
        color: renderHints.get(product.classification).color
      })
      this.productMap.set(product.name, product)
      renderHints.get(product.classification).y += 20
    })
    processes.forEach((process, index) => {
      this.graph.addNode(process.name, { x: 100, y: index * 10, size: 2, label: process.name, color: '#2020dd' })
    })
    processes.forEach((process) => {
      const posx = []
      const posy = []
      for (const input of process.inputs.keys()) {
        this.graph.addEdge(input.name, process.name, { label: process.name, color: '#107030' })
      }

      for (const output of process.outputs.keys()) {
        posx.push(this.graph.getNodeAttribute(output.name, 'x'))
        posy.push(this.graph.getNodeAttribute(output.name, 'y'))
        this.graph.addEdge(process.name, output.name, { label: process.name, color: '#24a4cc' })
      }
      this.graph.setNodeAttribute(process.name, 'x', posx.reduce((a, b) => a + b, 0) / posx.length - 10)
      this.graph.setNodeAttribute(process.name, 'y', posy.reduce((a, b) => a + b, 0) / posy.length)
      this.processMap.set(process.name, process)
    })
    noverlap.assign(this.graph)
  }
}

export default { ProductionGraph }

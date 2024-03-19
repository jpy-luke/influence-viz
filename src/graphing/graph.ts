import DirectedGraph from 'graphology'
import { Process, Product, productMap, processMap } from '@/graphing/model'
import NoverlapLayout from 'graphology-layout-noverlap/worker'

const renderHints: Map<string, { x: number, y: number, color: string }> = new Map()
renderHints.set('Raw Material', { x: -600, y: 0, color: '#20ee20' })
renderHints.set('Refined Material', { x: -400, y: 0, color: '#29a795' })
renderHints.set('Manufactured Good', { x: 200, y: 0, color: '#846c1f' })
renderHints.set('Crop', { x: 500, y: -300, color: '#ca5706' })
renderHints.set('Assembly', { x: 600, y: 0, color: '#8f24d7' })
const ySpacing = 50

export class ProductionGraph {
  public graph: DirectedGraph = new DirectedGraph({ multi: true })
  public layout = new NoverlapLayout(this.graph)

  constructor() {}
  public resetGraph() {
    this.graph.clear()
  }

  public toggleLayout() {
    if (!this.layout.isRunning()) {
      this.layout.start()
    }
  }

  public addProduct(product: string, x = 0, y = 0, triggerLayout = false) {
    const newProduct = productMap.get(product)
    if (newProduct) {
      if (!this.graph.hasNode(newProduct.name)) {
        this.graph.addNode(newProduct.name, {
          x: x,
          y: y,
          size: 4,
          label: newProduct.name,
          color: renderHints.get(newProduct.classification).color
        })

        for (const process of newProduct.outputFrom) {
          if (this.graph.hasNode(process.name)) {
            this.graph.addEdge(process.name, newProduct.name, { label: process.name, color: '#24a4cc' })
          }
        }
        for (const process of newProduct.inputFor) {
          if (this.graph.hasNode(process.name)) {
            this.graph.addEdge(newProduct.name, process.name, { label: process.name, color: '#107030' })
          }
        }
      }
      if (triggerLayout) {
        this.layout.start()
      }
    }
  }

  public addProcess(process: string, x = 0, y = 0, triggerLayout = false) {
    const newProcess = processMap.get(process)
    if (newProcess) {
      if (!this.graph.hasNode(newProcess.name)) {
        this.graph.addNode(newProcess.name, { x: x, y: y, size: 2, label: newProcess.name, color: '#2020dd' })

        for (const product of newProcess.inputs.keys()) {
          if (this.graph.hasNode(product.name)) {
            this.graph.addEdge(product.name, newProcess.name, { label: newProcess.name, color: '#107030' })
          }
        }

        for (const product of newProcess.outputs.keys()) {
          if (this.graph.hasNode(product.name)) {
            this.graph.addEdge(newProcess.name, product.name, { label: newProcess.name, color: '#24a4cc' })
          }
        }
      }
      if (triggerLayout) {
        this.layout.start()
      }
    }
  }

  public addConsumersForProduct(product: string) {
    const targetProduct = productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.inputFor.length
      let yStart = y - (ySpacing * numProcesses) / 2
      targetProduct.inputFor.forEach((process) => {
        if (!this.graph.hasNode(process.name)) {
          this.addProcess(process.name, x + 100, yStart)
          yStart += ySpacing
        }
        this.graph.addEdge(targetProduct.name, process.name, { label: process.name, color: '#107030' })
      })
      this.toggleLayout()
    }
  }

  public addSourcesForProduct(product: string) {
    const targetProduct = productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.outputFrom.length
      let yStart = y - (ySpacing * numProcesses) / 2
      targetProduct.outputFrom.forEach((process) => {
        if (!this.graph.hasNode(process.name)) {
          this.addProcess(process.name, x - 100, yStart)
          yStart += ySpacing
        }
        this.graph.addEdge(process.name, targetProduct.name, { label: process.name, color: '#24a4cc' })
      })
      this.toggleLayout()
    }
  }

  public addOutputsForProcess(process: string) {
    const targetProcess = processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.outputs.size
      const yStart = y - (100 * numProducts) / 2
      Array.from(targetProcess.outputs.keys()).forEach((product, index) => {
        if (!this.graph.hasNode(product.name)) {
          this.addProduct(product.name, x + 100, yStart + 100 * index)
        }
        this.graph.addEdge(targetProcess.name, product.name, { label: targetProcess.name, color: '#24a4cc' })
      })
      this.toggleLayout()
    }
  }

  public addInputsForProcess(process: string) {
    const targetProcess = processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.inputs.size
      const yStart = y - (ySpacing * numProducts) / 2
      let ycounter = yStart
      Array.from(targetProcess.inputs.keys()).forEach((product, index) => {
        if (!this.graph.hasNode(product.name)) {
          this.addProduct(product.name, x - 100, ycounter)
          ycounter += ySpacing
        }
        this.graph.addEdge(product.name, targetProcess.name, { label: targetProcess.name, color: '#107030' })
      })
      this.toggleLayout()
    }
  }

  public removeProduct(product: string) {
    const targetProduct = productMap.get(product)
    if (targetProduct && this.graph.hasNode(product)) {
      this.graph.dropNode(targetProduct.name)
    }
  }

  public removeProcess(process: string) {
    const targetProcess = processMap.get(process)
    if (targetProcess && this.graph.hasNode(process)) {
      this.graph.dropNode(targetProcess.name)
    }
  }

  public populateFromProduct(product: string, x = 0, y = 0) {
    if (!this.graph.hasNode(product)) {
      this.addProduct(product, x, y)
      this.addConsumersForProduct(product)
      for (const consumerProcess of productMap.get(product).inputFor) {
        const { x, y } = this.graph.getNodeAttributes(consumerProcess.name)
        for (const outputProduct of consumerProcess.outputs.keys()) {
          this.populateFromProduct(outputProduct.name, x + 100, y)
        }
      }
      this.addSourcesForProduct(product)
      for (const sourceProcess of productMap.get(product).outputFrom) {
        const { x, y } = this.graph.getNodeAttributes(sourceProcess.name)
        for (const inputProduct of sourceProcess.inputs.keys()) {
          this.populateFromProduct(inputProduct.name, x - 100, y)
        }
      }
    }
  }

  public initializeTotalGraph() {
    this.resetGraph()

    const products: string[] = Array.from(productMap.values()).map((product) => product.name)
    let ycounter = 0
    products.forEach((product) => {
      if (!this.graph.hasNode(product)) {
        this.populateFromProduct(product, 0, ycounter)
        ycounter += ySpacing
      }
    })
  }
}

export default { ProductionGraph }

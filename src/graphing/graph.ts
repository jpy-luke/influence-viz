import DirectedGraph from 'graphology'
import { Process, Product, productMap, processMap } from '@/graphing/model'
import ForceSupervisor from 'graphology-layout-force/worker'
import nooverlap from 'graphology-layout-noverlap'

const renderHints: Map<string, { x: number, y: number, color: string }> = new Map()
renderHints.set('Raw Material', { x: -600, y: 0, color: '#20ee20' })
renderHints.set('Refined Material', { x: -400, y: 0, color: '#29a795' })
renderHints.set('Manufactured Good', { x: 200, y: 0, color: '#846c1f' })
renderHints.set('Crop', { x: 500, y: -300, color: '#ca5706' })
renderHints.set('Assembly', { x: 600, y: 0, color: '#8f24d7' })
renderHints.set('Building', { x: 600, y: 0, color: '#dcd0e5' })
const ySpacing = 50
const xSpacing = 20

export class ProductionGraph {
  public graph: DirectedGraph = new DirectedGraph({ multi: true })
  public layout = new ForceSupervisor(this.graph, { settings: {} })

  constructor() {
  }

  public resetGraph() {
    this.graph.clear()
  }

  public toggleForceLayout() {
    if (!this.layout.isRunning()) {
      this.layout.start()
    } else {
      this.layout.stop()
    }
  }

  public resolveOverlap() {
    if (!this.layout.isRunning()) {
      nooverlap.assign(this.graph)
    }
  }

  public createEdgeLabel(amount: number, time: number) {
    const rate = 24 * (amount / time) * 3600 / 1000
    let result = ''
    if (rate >= 100) {
      result = Math.round(rate).toString()
    } else if (rate / Math.floor(rate) > 1) {
      result = rate.toFixed(2)
    } else if (rate < 1) {
      result = rate.toPrecision(3)
    } else {
      result = rate.toString()
    }

    return `${amount} kg (${result} t/h)`
  }

  public addProduct(product: string, x = 0, y = 0, triggerLayout = false) {
    const newProduct = productMap.get(product)
    if (newProduct) {
      if (!this.graph.hasNode(newProduct.name)) {
        this.graph.addNode(newProduct.name, {
          x: x,
          y: y,
          size: 6,
          label: newProduct.name,
          color: renderHints.get(newProduct.classification).color
        })

        for (const edge of newProduct.ins) {
          if (this.graph.hasNode(edge.from.name)) {
            const process = edge.from as Process
            const label = this.createEdgeLabel(edge.weight, process.recipeTime)
            this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#24a4cc' })
          }
        }
        for (const edge of newProduct.outs) {
          if (this.graph.hasNode(edge.to.name)) {
            const process = edge.to as Process
            const label = this.createEdgeLabel(edge.weight, process.recipeTime)
            this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#107030' })
          }
        }
      }
      if (triggerLayout) {
        this.resolveOverlap()
      }
    }
  }

  public addProcess(process: string, x = 0, y = 0, triggerLayout = false) {
    const newProcess = processMap.get(process)
    if (newProcess) {
      if (!this.graph.hasNode(newProcess.name)) {
        this.graph.addNode(newProcess.name, { x: x, y: y, size: 6, label: newProcess.name, color: '#2020dd' })

        for (const edge of newProcess.ins) {
          if (this.graph.hasNode(edge.from.name)) {
            const label = this.createEdgeLabel(edge.weight, newProcess.recipeTime)
            this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#107030' })
          }
        }

        for (const edge of newProcess.outs) {
          if (this.graph.hasNode(edge.to.name)) {
            const label = this.createEdgeLabel(edge.weight, newProcess.recipeTime)
            this.graph.addEdge(edge.from.name, edge.to.name, { label: label, color: '#24a4cc' })
          }
        }
      }
      if (triggerLayout) {
        this.resolveOverlap()
      }
    }
  }

  public addConsumersForProduct(product: string) {
    const targetProduct = productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.outs.length
      let yStart = y - (ySpacing * (numProcesses - 1)) / 2
      Array.from(targetProduct.outs).forEach((edge) => {
        if (!this.graph.hasNode(edge.to.name)) {
          this.addProcess(edge.to.name, x + xSpacing, yStart)
          yStart += ySpacing
          const label = this.createEdgeLabel(edge.weight, processMap.get(edge.to.name).recipeTime)
          this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#107030' })
        }
      })
    }
  }

  public addSourcesForProduct(product: string) {
    const targetProduct = productMap.get(product)
    if (targetProduct) {
      const { x, y } = this.graph.getNodeAttributes(targetProduct.name)
      const numProcesses = targetProduct.ins.length
      let yStart = y - (ySpacing * (numProcesses - 1)) / 2
      Array.from(targetProduct.ins).forEach((edge) => {
        if (!this.graph.hasNode(edge.from.name)) {
          this.addProcess(edge.from.name, x - xSpacing, yStart)
          yStart += ySpacing
          const label = this.createEdgeLabel(edge.weight, processMap.get(edge.from.name).recipeTime)
          this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#24a4cc' })
        }
      })
    }
  }

  public addOutputsForProcess(process: string) {
    const targetProcess = processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.outs.length
      let yStart = y - (100 * numProducts) / 2
      Array.from(targetProcess.outs).forEach((edge, index) => {
        if (!this.graph.hasNode(edge.to.name)) {
          this.addProduct(edge.to.name, x + 100, yStart + 100 * index)
          yStart += ySpacing
          const label = this.createEdgeLabel(edge.weight, targetProcess.recipeTime)
          this.graph.addEdge(edge.from.name, edge.to.name, { label, color: '#24a4cc' })
        }
      })
    }
  }

  public addInputsForProcess(process: string) {
    const targetProcess = processMap.get(process)
    if (targetProcess) {
      const { x, y } = this.graph.getNodeAttributes(targetProcess.name)
      const numProducts = targetProcess.ins.length
      let yStart = y - (100 * numProducts) / 2
      Array.from(targetProcess.ins).forEach((edge, index) => {
        if (!this.graph.hasNode(edge.from.name)) {
          this.addProduct(edge.from.name, x - 100, yStart + 100 * index)
          yStart += ySpacing
          const label = this.createEdgeLabel(edge.weight, targetProcess.recipeTime)
          this.graph.addEdge(edge.from.name, edge.to.name, { label: label, color: '#107030' })
        }
      })
    }
  }

  public removeNode(name: string) {
    if (this.graph.hasNode(name)) {
      this.graph.dropNode(name)
    }
  }
}

export default { ProductionGraph }

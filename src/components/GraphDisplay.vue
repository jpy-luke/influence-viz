<template>
  <div id="sigma-container"></div>
</template>
<script lang="ts">
import MultiDirectedGraph from 'graphology'
import Sigma from 'sigma'
import * as model from '../graphing/model'
import noverlap from 'graphology-layout-noverlap'

export default {
  data() {
    const renderHints: Map<string, {x: number, y: number, color: string}> = new Map();
    renderHints.set('Raw Material', { x: -600, y: 0, color: '#20ee20' });
    renderHints.set('Refined Material', { x: -400, y: 0, color: '#29a795' });
    renderHints.set('Manufactured Good', { x: 200, y: 0, color: '#846c1f' });
    renderHints.set('Crop', { x: 500, y: -300, color: '#ca5706' });
    renderHints.set('Assembly', { x: 600, y: 0, color: '#8f24d7' });

    const graph = new MultiDirectedGraph({ multi: true })
    const products: model.Product[] = model.createProducts()
    const processes: model.Process[] = model.createProcesses(products)

    products.forEach((product, index) => {
      graph.addNode(product.name, {
        x: renderHints.get(product.classification).x + 200 * Math.floor(renderHints.get(product.classification).y / 740),
        y: renderHints.get(product.classification).y % 740,
        size: 4,
        label: product.name,
        color: renderHints.get(product.classification).color
      })
      renderHints.get(product.classification).y += 20
    })
    processes.forEach((process, index) => {
      graph.addNode(process.name, { x: 100, y: index * 10, size: 2, label: process.name, color: '#2020dd' })
    })
    processes.forEach((process) => {
      const posx = []
      const posy = []
      for (const input of process.inputs.keys()) {
        graph.addEdge(input.name, process.name, { label: process.name, color: '#107030' })
      }

      for (const output of process.outputs.keys()) {
        posx.push(graph.getNodeAttribute(output.name, 'x'))
        posy.push(graph.getNodeAttribute(output.name, 'y'))
        graph.addEdge(process.name, output.name, { label: process.name, color: '#24a4cc' })
      }
      graph.setNodeAttribute(process.name, 'x', posx.reduce((a, b) => a + b, 0) / posx.length - 10)
      graph.setNodeAttribute(process.name, 'y', posy.reduce((a, b) => a + b, 0) / posy.length)

    })
    noverlap.assign(graph)


    return {
      graph: graph
    }
  },
  setup() {
  },
  mounted() {
    const container = document.getElementById('sigma-container') as HTMLElement
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const renderer = new Sigma(
      this.graph,
      container,
      { renderEdgeLabels: true, labelColor: { color: 'gray' }}
    )
  }
}

</script>

<style scoped>
#sigma-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

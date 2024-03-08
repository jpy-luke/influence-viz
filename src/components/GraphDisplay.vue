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
    const positions: Map<string, {x: number, y: number}> = new Map();
    positions.set('Raw Material', { x: -600, y: 0 });
    positions.set('Refined Material', { x: -400, y: 0 });
    positions.set('Manufactured Good', { x: 0, y: 0 });
    positions.set('Crop', { x: 0, y: -100 });
    positions.set('Assembly', { x: 400, y: 0 });

    const graph = new MultiDirectedGraph({ multi: true })
    const products: model.Product[] = model.createProducts()
    const processes: model.Process[] = model.createProcesses(products)

    products.forEach((product, index) => {
      graph.addNode(product.name, {
        x: positions.get(product.classification).x + 100 * Math.floor(positions.get(product.classification).y / 900),
        y: positions.get(product.classification).y % 900,
        size: 4,
        label: product.name,
        color: 'green'
      })
      positions.get(product.classification).y += 20
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

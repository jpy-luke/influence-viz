<template>
  <div id="sigma-container"></div>
</template>
<script lang="ts">
import Sigma from 'sigma'
import { createProducts, createProcesses } from '@/graphing/model'
import { ProductionGraph } from '@/graphing/graph'

export default {
  data() {
    const products = createProducts()
    const processes = createProcesses(products)
    const graphHandler = new ProductionGraph(products, processes)
    graphHandler.initializeTotalGraph()

    return {
      graph: graphHandler.graph
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
      { renderEdgeLabels: true, labelColor: { color: 'gray' } }
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

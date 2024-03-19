<template>
  <div id="sigma-container"></div>
</template>

<script setup lang="ts">
import Sigma from 'sigma'
import { ProductionGraph } from '@/graphing/graph'
import { onMounted } from 'vue'

const graphHandler = new ProductionGraph()
graphHandler.initializeTotalGraph()

onMounted(() => {
  const container = document.getElementById('sigma-container') as HTMLElement
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderer = new Sigma(
    graphHandler.graph,
    container,
    { renderEdgeLabels: true, labelColor: { color: 'gray' } }
  )
})
</script>

<style scoped>
#sigma-container {
  height: 90vh;
  width: 95%;
  position: absolute;
  background-color: #181818;
  flex-grow: 1;
  z-index: 1;
}
</style>

<script setup lang="ts">
import type { ProductionGraph } from '@/graphing/graph'

const props = defineProps<{ graphHandler: ProductionGraph }>()

const resetGraph = () => {
  props.graphHandler.resetGraph()
}

const totalGraph = () => {
  props.graphHandler.resetGraph()
  props.graphHandler.initializeTotalGraph()
}

const autoLayout = () => {
  props.graphHandler.toggleForceLayout()
}
</script>

<template>
  <div class="graph-controls">
    <button @click="resetGraph">Reset</button>
    <button @click="totalGraph">Total</button>
    <button @click="autoLayout">Auto layout</button>
  </div>
</template>

<style scoped>
.graph-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
}
</style>

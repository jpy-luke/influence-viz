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
  <h4>Graph controls</h4>
  <div class="graph-controls">
    <div class="selectable" @click="resetGraph">Reset</div>
    <div class="selectable" @click="totalGraph">Total</div>
    <div class="selectable" @click="autoLayout">Auto layout</div>
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

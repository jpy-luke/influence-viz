<script setup lang="ts">
import type { ProductionGraph } from '@/graphing/graph'

const props = defineProps<{ graphHandler: ProductionGraph, onReset: (arg0: Event) => void }>()

const autoLayout = () => {
  props.graphHandler.toggleForceLayout()
}
</script>

<template>
  <h4>Graph controls</h4>
  <div class="graph-controls">
    <div class="selectable" @click="onReset">Reset</div>
    <div class="selectable" @click="autoLayout">Toggle auto layout</div>
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

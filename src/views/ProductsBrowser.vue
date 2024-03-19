<script setup lang="ts">
import GraphDisplay from '../components/GraphDisplay.vue'
import NodeSelector from '@/components/NodeSelector.vue'
import GraphControls from '@/components/GraphControls.vue'
import { ProductionGraph } from '@/graphing/graph'

const graphHandler = new ProductionGraph()
</script>

<template>
  <div class="browser-controls">
    <GraphControls :graph-handler="graphHandler" />
    <NodeSelector />
  </div>
  <GraphDisplay :graph="graphHandler.graph" />
</template>

<style scoped>
.browser-controls {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10vh;
  left: 1rem;
  width: 300px;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
}
</style>

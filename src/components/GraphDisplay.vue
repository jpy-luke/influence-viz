<template>
  <div id="sigma-container"></div>
</template>

<script setup lang="ts">
import Sigma from 'sigma'
import { onMounted } from 'vue'
import type Graph from 'graphology'

const props = defineProps<{graph: Graph}>()
let draggedNode: string | null = null;
let isDragging = false;

onMounted(() => {
  const container = document.getElementById('sigma-container') as HTMLElement
  const renderer = new Sigma(
    props.graph,
    container,
    { renderEdgeLabels: true, labelColor: { color: 'gray' } }
  )

  renderer.on("downNode", (e) => {
    isDragging = true;
    draggedNode = e.node;
    props.graph.setNodeAttribute(draggedNode, "highlighted", true);
  });

  renderer.getMouseCaptor().on("mousemovebody", (e) => {
    if (!isDragging || !draggedNode) return;
    const pos = renderer.viewportToGraph(e);
    props.graph.setNodeAttribute(draggedNode, "x", pos.x);
    props.graph.setNodeAttribute(draggedNode, "y", pos.y);
    e.preventSigmaDefault();
    e.original.preventDefault();
    e.original.stopPropagation();
  });

  renderer.getMouseCaptor().on("mouseup", () => {
    if (draggedNode) {
      props.graph.removeNodeAttribute(draggedNode, "highlighted");
    }
    isDragging = false;
    draggedNode = null;
  });
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

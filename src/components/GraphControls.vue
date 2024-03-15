<script setup lang="ts">
const resetGraph = () => {
  console.log('resetting graph')
}

const layoutGraph = () => {
  console.log('layout graph')
}

const totalGraph = () => {
  console.log('total graph')
}
</script>

<template>
  <div class="graph-controls">
    <button @click="resetGraph">Reset</button>
    <button @click="layoutGraph">Layout</button>
    <button @click="totalGraph">Total</button>
  </div>
</template>

<style scoped>
.graph-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0,0,0,0.2);
  z-index: 2;
}
</style>

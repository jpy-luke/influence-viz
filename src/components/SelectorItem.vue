<script setup lang="ts">
defineProps<{
  label: string;
  type: string;
}>();

</script>

<template>
  <div class="selector-item">
    <button class="growable selector">{{ label }}</button>
    <button class="selector">{{ type === "product" ? "S" : "I" }}</button>
    <button class="selector">{{ type === "product" ? "C" : "O" }}</button>
  </div>
</template>

<style>
.selector-item {
  display: flex;
}
.growable {
  flex-grow: 1;
}
.selector {
  border: 1px solid white;
  margin: 1px;
  border-color: #2c3e50;
  background: rgba(0,0,0,0.2);
  color: #24a4cc;
  font-size: 0.7rem;
}
</style>

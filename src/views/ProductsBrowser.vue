<script setup lang="ts">
import GraphDisplay from '../components/GraphDisplay.vue'
import NodeSelector from '@/components/NodeSelector.vue'
import GraphControls from '@/components/GraphControls.vue'
import { ProductionGraph } from '@/graphing/graph'
import { ref } from 'vue'
import { processMap, productMap } from '@/graphing/model'
import SelectedNodeControls from '@/components/SelectedNodeControls.vue'

const graphHandler = new ProductionGraph()
let selectedItem = ref(null)
let selectableInputs = ref([])
let selectableOutputs = ref([])
let selectedIsProduct = true

const itemSelected = (label: string) => {
  selectedItem.value = label
  selectedIsProduct = productMap.has(label)
  if (selectedIsProduct) {
    graphHandler.addProduct(label, 0, 0, true)
    selectableInputs.value = Array.from(productMap.get(label).outputFrom).map((p) => p.name)
    selectableOutputs.value = Array.from(productMap.get(label).inputFor).map((p) => p.name)
  } else {
    graphHandler.addProcess(label, 0, 0, true)
    selectableInputs.value = Array.from(processMap.get(label).inputs.keys()).map((p) => p.name)
    selectableOutputs.value = Array.from(processMap.get(label).outputs.keys()).map((p) => p.name)
  }
}

const clearSelection = () => {
  graphHandler.removeNode(selectedItem.value)
  selectedItem.value = null
  selectableInputs.value = []
  selectableOutputs.value = []
}

const expandSelection = (label: string) => {
  if (label === 'ALL_INPUTS') {
    if (selectedIsProduct) {
      graphHandler.addSourcesForProduct(selectedItem.value)
    } else {
      graphHandler.addInputsForProcess(selectedItem.value)
    }
  } else if (label === 'ALL_OUTPUTS') {
    if (selectedIsProduct) {
      graphHandler.addConsumersForProduct(selectedItem.value)
    } else {
      graphHandler.addOutputsForProcess(selectedItem.value)
    }
  } else {
    itemSelected(label)
  }
}

</script>

<template>
  <div class="browser-controls">
    <GraphControls :graph-handler="graphHandler" />
    <SelectedNodeControls :selectable-inputs="selectableInputs" :selectable-outputs="selectableOutputs"
                          @expansionSelected="expandSelection" :selected-item="selectedItem"
                          @clearSelection="clearSelection"
    />
    <NodeSelector @productSelected="itemSelected" />
  </div>
  <GraphDisplay :graph="graphHandler.graph" :on-selected="itemSelected"/>
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
  overflow: scroll;
}
</style>

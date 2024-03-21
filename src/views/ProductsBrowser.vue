<script setup lang="ts">
import GraphDisplay from '../components/GraphDisplay.vue'
import NodeSelector from '@/components/NodeSelector.vue'
import GraphControls from '@/components/GraphControls.vue'
import { ProductionGraph } from '@/graphing/graph'
import { ref } from 'vue'
import { processMap, productMap } from '@/graphing/model'
import SelectedNodeControls from '@/components/SelectedNodeControls.vue'

const graphHandler = new ProductionGraph()
graphHandler.toggleForceLayout()
let selectedItem = ref(null)
let selectableInputs = ref([])
let selectableOutputs = ref([])
let selectedIsProduct = true

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const itemSelected = (label: string) => {
  selectedItem.value = label
  selectedIsProduct = productMap.has(label)
  if (selectedIsProduct) {
    graphHandler.addProduct(label, randomInt(-10, 10), randomInt(-10, 10), true)
    selectableInputs.value = Array.from(productMap.get(label).outputFrom).map((p) => p.name)
    selectableOutputs.value = Array.from(productMap.get(label).inputFor).map((p) => p.name)
  } else {
    graphHandler.addProcess(label, randomInt(-10, 10), randomInt(-10, 10), true)
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

const onReset = () => {
  graphHandler.resetGraph()
  selectedItem.value = null
}

</script>

<template>
  <div class="browser-controls">
    <GraphControls :graph-handler="graphHandler" :on-reset="onReset" />

    <NodeSelector @productSelected="itemSelected" />
  </div>
  <GraphDisplay :graph="graphHandler.graph" :on-selected="itemSelected" />
  <div class="browser-controls-right">
    <SelectedNodeControls :selectable-inputs="selectableInputs" :selectable-outputs="selectableOutputs"
                          @expansionSelected="expandSelection" :selected-item="selectedItem"
                          @clearSelection="clearSelection"
    />
  </div>
</template>

<style scoped>
.browser-controls {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10vh;
  left: 1rem;
  width: 300px;
  height: 80%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
  overflow: scroll;
}

.browser-controls-right {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10vh;
  right: 1rem;
  width: 300px;
  height: 80%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
  overflow: scroll;
}
</style>

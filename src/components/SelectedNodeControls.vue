<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

const props = defineProps<{ selectableInputs: string[], selectableOutputs: string[], selectedItem: string }>()
</script>

<template>
  <div :hidden="props.selectedItem == null">
    <h4>{{ selectedItem }} <span @click="$emit('clearSelection')">X</span></h4>
    <Accordion :active-index="0">
      <AccordionTab header="Inputs">
        <div class="selectable" v-for="input in props.selectableInputs" :key="input"
             @click="$emit('expansionSelected', input)">
          {{ input }}
        </div>
      </AccordionTab>
      <AccordionTab header="Outputs">
        <div class="selectable" v-for="output in props.selectableOutputs" :key="output"
             @click="$emit('expansionSelected', output)">
          {{ output }}
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

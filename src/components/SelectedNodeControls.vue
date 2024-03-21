<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

const props = defineProps<{ selectableInputs: string[], selectableOutputs: string[], selectedItem: string }>()
</script>

<template>
  <div :hidden="props.selectedItem == null">
    <h4 :hidden="props.selectedItem == null">Selected item controls</h4>
    <div>{{ selectedItem }} </div>
    <div class="selectable" @click="$emit('clearSelection')">Remove</div>
    <Accordion :active-index="0">
      <AccordionTab v-if="props.selectableInputs.length > 0" header="Sources / Inputs">
        <div class="selectable" v-for="input in props.selectableInputs" :key="input"
             @click="$emit('expansionSelected', input)">
          {{ input }}
        </div>
        <div class="selectable" @click="$emit('expansionSelected', 'ALL_INPUTS')">ALL</div>
      </AccordionTab>
      <AccordionTab v-if="props.selectableOutputs.length >0" header="Consumers / Outputs">
        <div class="selectable" v-for="output in props.selectableOutputs" :key="output"
             @click="$emit('expansionSelected', output)">
          {{ output }}
        </div>
        <div class="selectable" @click="$emit('expansionSelected', 'ALL_OUTPUTS')">ALL</div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

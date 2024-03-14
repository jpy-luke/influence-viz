<script setup lang="ts">
import SelectorItem from '@/components/SelectorItem.vue'

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

import { productMap, processMap, Product } from '@/graphing/model'

const productsByClassification = Array.from(productMap.values()).reduce(
  (acc, product) => {
    if (!acc[product.classification]) {
      acc[product.classification] = []
    }
    acc[product.classification].push(product)
    return acc
  },
  {} as Record<string, Product[]>
)

</script>

<template>
  <div class="node-selector">
    <Accordion :active-index="0">
      <AccordionTab v-for="classification in Object.keys(productsByClassification)" :key="classification" :header="classification">
        <div v-for="product in productsByClassification[classification]" :key="product.name">
          <SelectorItem :label="product.name" type="product" />
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style>
.node-selector {
  overflow: scroll;
  height: 90vh;
  width: 20vw;
  position: absolute;
  background: rgba(0,0,0,0.2);
  z-index: 2;
}
</style>

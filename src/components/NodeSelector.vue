<script setup lang="ts">

import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

import { createProducts, Product } from '@/graphing/model'

const productsByClassification = Array.from(createProducts().values()).reduce(
  (acc, product) => {
    if (!acc[product.classification]) {
      acc[product.classification] = []
    }
    acc[product.classification].push(product)
    return acc
  },
  {} as Record<string, Product[]>
)

for (const classification in productsByClassification) {
  productsByClassification[classification].sort((a, b) => a.name.localeCompare(b.name))
}

</script>

<template>
  <div class="node-selector">
    <h4>Product selection</h4>
    <Accordion :active-index="0">
      <AccordionTab v-for="classification in Object.keys(productsByClassification)" :key="classification"
                    :header="classification">
        <div class="product-box">
          <div @click="$emit('productSelected', product.name)"
               class="selectable"
               v-for="product in productsByClassification[classification]"
               :key="product.name">
            {{ product.name }}
          </div>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style scoped>
.node-selector {
  background: rgba(0, 0, 0, 0.2);
  flex: 1;
}

.product-box {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}
</style>

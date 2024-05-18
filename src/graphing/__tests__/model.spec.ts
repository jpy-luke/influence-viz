import { describe, it, expect } from 'vitest'
import { createProducts, createProcesses } from '../model'
import * as sdk from '@influenceth/sdk'

describe('model management', () => {
  it('converts products', () => {
    const products = Array.from(createProducts().values())
    expect(products.length).toBe(
      Object.keys(sdk.Product.TYPES).length +
      Object.keys(sdk.Building.CONSTRUCTION_TYPES).length +
      Object.keys(sdk.Ship.TYPES).length - 1
    )
  })

  it('converts processes', () => {
    const processes = Array.from(createProcesses(createProducts()).values())
    expect(processes.length).toBe(Object.keys(sdk.Process.TYPES).length)
  })

  it(('converts process inputs and outputs'), () => {
    const processes = Array.from(createProcesses(createProducts()).values())
    for (const process of processes.filter((process) => process.i < 243)) {
      expect(process.ins.length).toBe(Object.keys(sdk.Process.TYPES[process.i].inputs).length)
      expect(process.outs.length).toBe(Object.keys(sdk.Process.TYPES[process.i].outputs).length)
    }
  })

  it('finds sources for cement', () => {
    const products = createProducts()
    const processes = createProcesses(products)
    const cement = products.get('Cement')
    if (cement) {
      const sources = cement.findSourceNames()
      const expectedSources = [
        'Cement',
        'Quicklime',
        'Water',
        'Calcite',
        'Calcite Calcination',
        'Salty Cement Mixing']

      for (const source of expectedSources) {
        expect(sources.has(source)).toBe(true)
      }
    }
  })
})

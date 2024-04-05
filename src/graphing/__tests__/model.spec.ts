import { describe, it, expect } from 'vitest'
import { productMap, processMap } from '../model'
import * as sdk from '@influenceth/sdk'

describe('model management', () => {
  it('converts products', () => {
    const products = Array.from(productMap.values())
    expect(products.length).toBe(Object.keys(sdk.Product.TYPES).length + Object.keys(sdk.Building.CONSTRUCTION_TYPES).length)
  })

  it('converts processes', () => {
    const processes = Array.from(processMap.values())
    expect(processes.length).toBe(Object.keys(sdk.Process.TYPES).length + Object.keys(sdk.Building.CONSTRUCTION_TYPES).length)
  })

  it(('converts process inputs and outputs'), () => {
    const processes = Array.from(processMap.values())
    for (const process of processes.filter((process) => process.i < 243)) {
      expect(process.ins.length).toBe(Object.keys(sdk.Process.TYPES[process.i].inputs).length)
      expect(process.outs.length).toBe(Object.keys(sdk.Process.TYPES[process.i].outputs).length)
    }
  })
})

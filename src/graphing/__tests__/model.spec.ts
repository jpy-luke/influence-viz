import { describe, it, expect } from 'vitest';
import { createProducts, createProcesses } from '../model';
import rawProcesses from '../process';
import rawProducts from '../product';

describe('model management', () => {
  it('converts products', () => {
    const products = createProducts();
    expect(products.length).toBe(Object.keys(rawProducts.TYPES).length);
  });

  it('converts processes', () => {
    const products = createProducts();
    const processes = createProcesses(products);
    expect(processes.length).toBe(Object.keys(rawProcesses.TYPES).length);
  });

  it(('converts process inputs and outputs'), () => {
    const products = createProducts();
    const processes = createProcesses(products);
    for(const process of processes) {
      expect(process.inputs.size).toBe(Object.keys(rawProcesses.TYPES[process.i].inputs).length);
      expect(process.outputs.size).toBe(Object.keys(rawProcesses.TYPES[process.i].outputs).length);
    }
  })
})

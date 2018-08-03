const assert = require('chai').assert;
global.window = global;
require('../src/js/calculate');

describe('calcular tarifa', () => {
  describe('calculate', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof calculate, 'function');
    });
    it('debiera devolver "40" para saldo inicial "800", con tarifa "alta"', () => {
      assert.equal(calculate(800, 760), 40);
    });
  });
});
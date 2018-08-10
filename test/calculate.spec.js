const assert = require('chai').assert;
global.window = global;
require('../public/src/js/validate');

describe('calcular tarifa', () => {
  describe('calculate', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof calculate, 'function');
    });
    it('debiera devolver "40" para saldo inicial "800", con tarifa "alta"', () => {
      assert.equal(calculate(800 - 760 === 40), true);
    });
  });
});

describe('validar input tarjeta bip', () => {
  describe('deberia verificar caracteres del input', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof validateCard, 'function');
    });
    it('deberia el input ser maximo 8 caraceteres', () => {
      assert.equal(validateCard(12345678), true);
      assert.equal(validateCard(123456), true);
    });
    it('debiera el input ser solo números', () => {
      assert.equal(validateCard('1a2d3c4d'), false);
      assert.equal(validateCard('abcdefgh'), false);
      assert.equal(validateCard('ABCDEFGH'), false);
      assert.equal(validateCard('$%& .-+1s'), false); 
    });
  });
});



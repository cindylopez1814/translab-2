const assert = require('chai').assert;
global.window = global;
require('../src/js/profile');

describe('validar input tarjeta bip', () => {
  describe('deberia verificar caracteres del input', () => {
    it('deberia el input ser maximo 8 caraceteres', () => {
      assert.equal(validateCard(12345678), true);
      assert.equal(validateCard(123456), false);
      assert.equal(validateCard('abcdef'), false);
      assert.equal(validateCard(123456789), false);
    });
    it('debiera el input ser solo números', () => {
      assert.equal(validateCard(88888888), true);
      assert.equal(validateCard('1a2d3c4d'), false);
      assert.equal(validateCard('abcdefgh'), false);
      assert.equal(validateCard('ABCDEFGH'), false);
      assert.equal(validateCard('$%& .-+1s'), false); 
    });
  });
});

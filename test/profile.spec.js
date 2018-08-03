const assert = require('chai').assert;
global.window = global;
require('../src/js/profile');

describe('validar input tarjeta bip', () => {
  describe('deberia verificar caracteres del input', () => {
    it('deberia el input ser maximo 8 caraceteres', () => {
      assert.equal(validateTarjet(12345678), true);
      assert.equal(validateTarjet(123456), false);
      assert.equal(validateTarjet('abcdef'), false);
      assert.equal(validatePass(123456789), false);
    });
    it('debiera el input ser solo números', () => {
      assert.equal(validateTarjet(88888888), true);
      assert.equal(validateTarjet('1a2d3c4d'), false);
      assert.equal(validateTarjet('abcdefgh'), false);
      assert.equal(validateTarjet('ABCDEFGH'), false);
      assert.equal(validateTarjet('$%& .-+1s'), false); 
    });
  });
});

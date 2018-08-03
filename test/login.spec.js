const assert = require('chai').assert;
global.window = global;
require('../src/js/login');

describe('validar password', () => {
  describe('Deberia verificar caracteres de password', () => {
    it('deberia el password ser maximo 8 caraceteres', () => {
      assert.equal(validatePass('12345678'), true);
      assert.equal(validatePass('432156'), true);
      assert.equal(validatePass('123456789'), false);
    });
    it('debiera el password ser solo números', () => {
      assert.equal(validatePass('12121212'), true);
      assert.equal(validatePass('1234asdf'), false);
      assert.equal(validatePass('abcdefgh'), false);
      assert.equal(validatePass('ABCDEFGH'), false);
      assert.equal(validatePass('$%& .-+1s'), false); 
    });
  });
});


function register() {
  const emailValue = loginUser.value;
  const passwordValue = loginPass.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(function() {
      loginUser.value = '';
      loginPass.value = '';
    })
    .catch((error) => {
      console.log('Error de firebase > ' + error.code);
      console.log('Error de firebase, mensaje > ' + error.message);
      alert('email invalido o contraseña invalida');
    });
}

btnLogin.addEventListener('click', () => {
  register();
});
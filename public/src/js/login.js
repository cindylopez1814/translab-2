window.onload = () => {
  inicialize();
};

btnLogin.addEventListener('click', () => {
  login();
});

registerNow.addEventListener('click', () => {
  register();
});

logOut.addEventListener('click', () => {
  logout();
});

function inicialize() {  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Si estamos logueados esconder "registro"
      firstScreen.style.display = 'none';
      menu.classList.remove('d-none');
      secondScreen.classList.remove('d-none');
    } else {
    // No estamos logueados esconder 'Cerrar Sesión'
      menu.classList.add('d-none');
      containerProfile.classList.add('d-none');
      firstScreen.style.display = 'block';
    }
  });
}

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

function login() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      console.log('Usuario con login exitoso');
    })
    .catch((error) => {
      console.log('Error de firebase > ' + error.code);
      console.log('Error de firebase, mensaje > ' + error.message);
      alert('Email o contraseña incorrecta');
    });
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
    })
    .catch();
};
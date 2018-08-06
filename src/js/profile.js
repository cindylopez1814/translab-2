function showEmail() {
  const currentUser = firebase.auth().currentUser;
  const newEmailKey = firebase.database().ref().child('users').push().key;
  firebase.database().ref(`users/${newEmailKey}`).set({
    uid: currentUser.uid,
    email: currentUser.email
  });
}; 

firebase.database().ref('users')
  .limitToLast(1)
  .on('child_added', (newUser) => {
    emailUser.innerHTML = `<p>${newUser.val().email}</p>`;
  });
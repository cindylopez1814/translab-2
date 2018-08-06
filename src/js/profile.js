function showEmail() {
  const currentUser = firebase.auth().currentUser;
  const newEmailKey = firebase.database().ref().child('users').push().key;
  firebase.database().ref(`users/${newEmailKey}`).set({
    uid: currentUser.uid,
    email: currentUser.email
  });
  emailUser.innerHTML = `<p>${newEmailKey.email}</p>`;
  console.log(newEmailKey.uid)
}; 
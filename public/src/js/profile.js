function showInfoUser() {
  const currentUser = firebase.auth().currentUser;

  const newEmailKey = firebase.database().ref().child('users').push().key;
  firebase.database().ref(`users/${newEmailKey}`).update({
    uid: currentUser.uid,
    email: currentUser.email,
  });
  addCard.addEventListener('click', () => {
    firebase.database().ref(`users/${newEmailKey}/cards`).push({
      cardUser: cardNumber.value
    }); 
    // newCard.innerHTML += `<p>${}</p>`
  });
  firebase.database().ref(`users/${newEmailKey}/cards`)
    .limitToLast(8)
    .on('child_added', (codeCard) => {
      newCard.innerHTML += `
        <p>${codeCard.val().cardUser}</p>
      `;
      selectCard.innerHTML += `
      <option id="${codeCard.val().cardUser}">${codeCard.val().cardUser}</option>
      `;
    }); 
};

firebase.database().ref('users')
  .limitToLast(1)
  .on('child_added', (newUser) => {
    emailUser.innerHTML = `<p>${newUser.val().email}</p>`;
  });



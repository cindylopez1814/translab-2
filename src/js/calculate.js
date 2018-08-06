btnBalance.addEventListener('click', () => {
  const inputTarjeta = newCardNumber.value;
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${inputTarjeta}`)
    .then(response => response.json()
    ).then(data => {
      newCardNumber.value = '';
      console.log(JSON.stringify(data));
      showBalance.innerHTML = `
        <p>Saldo Total</p>
        <p>${data['Saldo  tarjeta']}</p>
        <p>N°${data['N&ordm; tarjeta bip! ']}</p>
      `;
    });
});
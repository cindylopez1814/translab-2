btnBalance.addEventListener('click', () => {
  const inputTarjeta = newCardNumber.value;
  const selectTarjeta = selectCard.value;
  fetch(`https://www.psep.cl/api/Bip.php?&numberBip=${inputTarjeta}`)
    .then(response => response.json()
    ).then(data => {
      newCardNumber.value = '';
      console.log(JSON.stringify(data));
      showBalance.innerHTML = `
        <p class="title">Saldo Total</p>
        <p class="saldoFinal">${data['Saldo  tarjeta']}</p>
        <p class="idCard">N°${data['N&ordm; tarjeta bip! ']}</p>
      `;
    });
});


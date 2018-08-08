btnBalance.addEventListener('click', () => {
  const inputTarjeta = newCardNumber.value;
  const selectTarjeta = selectCard.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${inputTarjeta}`)
    .then(response => response.json()
    ).then(data => {
      newCardNumber.value = '';
      console.log(JSON.stringify(data));
      showBalance.innerHTML = `
        <p class="title">Saldo Total</p>
        <p class="saldoFinal">${data['saldoTarjeta']}</p>
        <p class="idCard">N°${data['id']}</p>
      `;
    });
});


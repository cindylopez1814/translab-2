window.calculate = (result) => {
  const balance = 800;
  const price = 760;
  if (balance - price === 40) {
    return true;
  } else {
    return false;
  }
};

window.validateCard = (addCard) => {
  if (addCard.toString().length <= 8) {
    if (isNaN(addCard) === false) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
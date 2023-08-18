const removeCommasFromNumber = (numberWithComma1, numberWithComma2, numberWithComma3) => {
  let number1 = parseInt(numberWithComma1.replace(/,/g, ''));
  let number2 = parseInt(numberWithComma2.replace(/,/g, ''));
  let number3 = parseInt(numberWithComma2.replace(/,/g, ''));

  let sum = number1 + number2 + number3;

  return sum.toLocaleString(undefined, {maximumFractionDigits: 2});
};

export {removeCommasFromNumber};

const stringToNumber = (value) => {
  let number = parseInt(parseFloat(value)).toLocaleString(undefined, {maximumFractionDigits: 2});
  return number;
};

export {stringToNumber};

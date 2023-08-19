const sumOfArray = (arrayOfObjects, field) => {
  const totalValue = arrayOfObjects.reduce((total, item) => {
    if (Array.isArray(item[field])) {
      const itemTotal = item[field].reduce((sum, fieldValue) => sum + parseFloat(fieldValue), 0);
      return total + itemTotal;
    } else if (typeof item[field] === 'string') {
      return total + parseFloat(item[field]);
    } else {
      return total + item[field];
    }
  }, 0);

  return totalValue;
};

export {sumOfArray};

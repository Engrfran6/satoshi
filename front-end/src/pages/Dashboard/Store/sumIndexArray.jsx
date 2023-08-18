import {stringToNumber} from './convertStringToNumber';

export const sumArray = (arrayOfData, index) => {
  let sumOfArrayOfAmount = 0; // the sum is initialed to 0
  for (let i = 0; i < arrayOfData.length; i += 1) {
    sumOfArrayOfAmount += stringToNumber(arrayOfData[i][index]);
  }
  return sumOfArrayOfAmount.toLocaleString(undefined, {maximumFractionDigits: 2});
};

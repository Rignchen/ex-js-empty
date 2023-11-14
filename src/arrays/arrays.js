/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(' ');
  }
  array = array.flat();
  for (let i = 0; i < array.length; i++) {
    if (array[i].trim() === '') {
      array.splice(i, 1);
      i --;
    }
  }
  return array;
}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  return array1.concat(array2);
}

/**
 * @param {array} array an array of arbitrary elements
 * @param {number} index where you need to replace the element in the array
 * @param {...*} newElements
 * @return {array<*>} A new array, sorted, **the original array should not be modified**
 */
export function replaceElementsInArrayAtAGivenPlace(
  array,
  index,
  ...newElements
) {
  let newArray = [...array].splice(0,index);
  let newArray2 = [...array].splice(index + newElements.length);
  newArray.push(newElements);
  newArray.push(newArray2);
  newArray = newArray.flat();
  return newArray;
}

console.log(replaceElementsInArrayAtAGivenPlace([1, 2, 3, 4, 5], 2, 10, 22));
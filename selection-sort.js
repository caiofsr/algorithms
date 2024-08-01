/**
 * Finds the index of the lowest value in an array.
 *
 * @param {Array} array - The input array to search.
 * @returns {number} The index of the lowest value in the array.
 * @time O(n) - where n is the length of the input array
 */
function searchLow(array) {
  let low = array[0];
  let lowIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < low) {
      low = array[i];
      lowIndex = i;
    }
  }

  return lowIndex;
}

/**
 * Performs selection sort on an input array.
 *
 * @param {Array} array - The input array to be sorted.
 * @returns {Array} A new sorted array.
 * @time O(n^2) - where n is the length of the input array
 */
function selectionSort(array) {
  let newArray = [];

  while (array.length > 0) {
    let low = searchLow(array);
    newArray.push(array.splice(low, 1)[0]);
  }

  return newArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));

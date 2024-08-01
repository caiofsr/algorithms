/**
 * Calculates the sum of all elements in an array using recursion.
 *
 * @param {Array<number>} array - The input array of numbers to sum.
 * @returns {number} The sum of all elements in the array.
 * @time O(n^2) - where n is the length of the input array, due to the slice operation in each recursive call.
 */
function sum(array) {
  if(array.length === 0) {
    return 0
  }

  return array[0] + sum(array.slice(1))
}

console.log(sum([2, 4, 6]))

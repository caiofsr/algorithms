/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * Time complexity: O(log n)
 *
 * @param {Array} arr - The sorted array to search in.
 * @param {*} target - The value to search for.
 * @return {number|undefined} The index of the target value in the array, or undefined if not found.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    let guess = arr[mid]

    if(guess === target) {
      return mid
    } else if(guess > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
}

const arr = [1, 3, 5, 7, 9]
console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, -1))

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

function selectionSort(array) {
  let newArray = [];

  while (array.length > 0) {
    let low = searchLow(array);
    newArray.push(array.splice(low, 1)[0]);
  }

  return newArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));

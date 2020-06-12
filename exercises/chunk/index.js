// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }
  return newArr;
}
chunk([1, 2, 3], 1);
module.exports = chunk;

// function chunk(array, size) {
//   let newArr = [];
//   let length = 0;
//   if (array.length % size === 0) {
//     length = array.length / size - 1;
//   } else {
//     length = array.length / size;
//   }
//   for (let i = 0; i <= length; i++) {
//     newArr.push(array.splice(0, size));
//   }
//   console.log(newArr);
//   return newArr;
// }

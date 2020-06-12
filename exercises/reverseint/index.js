// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverse = n.toString().split("").reverse().join("");
  return parseInt(reverse) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   let num = n.toString().split("");
//   if (num[0] === "-") {
//     num = parseInt("-" + num.reverse().join(""));
//   } else {
//     num = parseInt(num.reverse().join(""));
//   }

//   return num;
// }

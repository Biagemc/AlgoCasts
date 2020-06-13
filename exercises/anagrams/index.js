// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charsA = {};
  let charsB = {};
  let newA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let newB = stringB.replace(/[^\w]/g, "").toLowerCase();

  for (let char of newA) {
    charsA[char] = charsA[char] + 1 || 1;
  }
  for (let char of newB) {
    charsB[char] = charsB[char] + 1 || 1;
  }
  console.log(charsA);
  console.log(charsB);
  if (Object.keys(charsA).length !== Object.keys(charsB).length) {
    return false;
  }
  for (let char in charsA) {
    if (charsA[char] !== charsB[char]) {
      return false;
    }
  }
  return true;
}
anagrams("hello", "llohe");
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let newA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort();

//   let newB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort();

//   if (newA.join("") === newB.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splittedStr = str.split(" ");
  const newStr = [];

  for (let word of splittedStr) {
    let capitalizeChar = word[0].toUpperCase();
    let lowerChars = word.slice(1);
    newStr.push(capitalizeChar + lowerChars);
  }
  return newStr.join(" ");
}
console.log(capitalize("look, it is working!"));
module.exports = capitalize;

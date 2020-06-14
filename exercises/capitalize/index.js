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

  for (let i = 0; i < splittedStr.length; i++) {
    let capitalizeChar = splittedStr[i][0].toUpperCase();
    let lowerChars = splittedStr[i].slice(1);
    splittedStr[i] = capitalizeChar + lowerChars;
  }
  return splittedStr.join(" ");
}
console.log(capitalize("look, it is working!"));
module.exports = capitalize;

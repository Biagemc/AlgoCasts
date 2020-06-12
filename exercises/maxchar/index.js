// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = "";
  const chars = {};
  let max = 0;

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  // const character = str.split("").reduce((char, qty) => {
  //   if (!char[qty]) {
  //     char[qty] = 0;
  //   }
  //   char[qty]++;
  //   return char;
  // }, {});

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}
console.log(maxChar("abcccccccd"));

module.exports = maxChar;

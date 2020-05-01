function StringCompression(string) {
  let compressedString = "";
  let compressedCount = 0;

  for (let i = 0; i < string.length; i++) {
    // Increment the count
    compressedCount++;

    // If compressed length ever gets greater
    // than string length just return the string
    if (compressedString.length > string.length) {
      return string;
    }

    // make sure we're not using an index outside the array
    // then see what the next character is
    if (i + 1 >= string.length || string[i] !== string[i + 1]) {
      // Add the current character with the compressed count
      compressedString += string[i] + compressedCount;
      // Setup the cycle for the next new character
      compressedCount = 0;
    }
  }
  return compressedString;
}

console.log(StringCompression("aaabbbbcde"));
console.log(StringCompression("aaaaaaaaaaabbbbcccccaaaddezzz"));
console.log(StringCompression("abcde"));

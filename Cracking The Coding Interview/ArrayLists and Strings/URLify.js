function SimpleURLify(string, length) {
  return string.slice(0, length).replace(/ /g, "%20");
}

console.log(SimpleURLify("Mr John Smith   ", 13));

function URLify(string, length) {
  const chars = string.slice(0, length).split("");
  return chars.map((c) => (c == " " ? "%20" : c)).join("");
}

console.log(URLify("Mr John Smith   ", 13));

function BookURLify1(string, trueLength) {
  let spaceCount = 0,
    index,
    i = 0;

  for (i = 0; i < trueLength; i++) {
    if (string[i] == "") {
      spaceCount++;
    }
  }
  index = trueLength + spaceCount * 2;
  if (trueLength < string.length) string[trueLength] = "\0";
  for (i = trueLength - 1; i >= 0; i--) {
    if (string[i] == "") {
      string[index - 1] = "0";
      string[index - 2] = "2";
      string[index - 3] = "%";
      index = index - 3;
    } else {
      string[index - 1] = string[i];
      index--;
    }
  }
  return string;
}

console.log(BookURLify1("Mr John Smith   ", 13));

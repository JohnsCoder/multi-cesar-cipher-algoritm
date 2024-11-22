const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function cipherCesarAlgorithm(text, code, vetor) {
  const cipher = [];
  const splitedText = removeAccents(text).replaceAll(" ", "").split("");
  let codeIndex = 0;

  let generalIdx = 0;

  for (let letter of splitedText) {
    let alphabetIndex = alphabet.indexOf(letter);

    let cipherIndex;
    let finalCipherIndex;
    if (vetor === "encrypt") {
      cipherIndex = alphabetIndex + code[codeIndex];
    }
    if (vetor === "decrypt") {
      cipherIndex = alphabetIndex - code[codeIndex];
    }
    finalCipherIndex = cipherIndex;
    if (cipherIndex > 25) {
      finalCipherIndex = cipherIndex % 26;
    }
    if (cipherIndex < 0) {
      finalCipherIndex = cipherIndex % 26 ? cipherIndex % 26 + 26 : 0;
    }

    cipher.push(alphabetIndex !== -1 ? alphabet[finalCipherIndex] : "-");
    generalIdx++;
    codeIndex++;
    if (codeIndex > code.length - 1) {
      codeIndex = 0;
    }
  }

  console.log(cipher.join(""));
}

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

cipherCesarAlgorithm(
  "<text>",
  "<numberlist>",
  "encrypt"
);
cipherCesarAlgorithm(
  "<cipher>",
  "<numberlist>",
  "decrypt"
);

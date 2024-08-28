const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  // write your solution here
  let result = "";
  for(let i = 0; i < expr.length; i += 10) {
    const str = expr.substring(i, i + 10);
    if(str === "**********") result += " ";
    else {
      let j = 0;
      while(str.charAt(j) === "0") j++;
      let tmp = "";
      while(j < str.length - 1) {
        if(str.charAt(j + 1) === "0") tmp += ".";
        else tmp += "-";
        j += 2;
      }
      for(const prop in MORSE_TABLE) {
        if(prop === tmp) {
          result += MORSE_TABLE[prop];
          break;
        }
      }
    }
  }
  return result;
}

module.exports = {
    decode
}
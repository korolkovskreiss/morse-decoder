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
     let result = '';
    for(let i = 0; i < expr.length; i += 10 ){
        let binMorze = expr.slice(i, i + 10)
      let morze = ''
          for(let j = 0; j < 10; j += 2){
            if (binMorze[j] + binMorze[j+1] === '10'){
              morze += '.'
              }
          else if (binMorze[j] + binMorze[j+1] === '11'){
              morze += '-'
              }
          else if( binMorze[j] === "*") {
              morze = ' '
              }
            }
            if (morze !== ' ') {
                for (let key in MORSE_TABLE) {
                    if ( key === morze) {
                    result += MORSE_TABLE[key]
                    }
                }
            }
            else {
                result += ' '
            }
        }
        return result;
}

module.exports = {
    decode
}

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
    ' ': ' ',
};

function decode(expr) {
    let startPoint = 0;
    let decodeWord = '';
    let codeSymbols = [];
    for(let i = 0; i < expr.length/10; i++){
        codeSymbols.push(expr.slice(startPoint, startPoint+10));
        startPoint += 10;
    }

    for(let i = 0; i < codeSymbols.length ; i++){
        let codeWord = [];
        if (codeSymbols[i] == '**********') {
            codeSymbols[i] = ' ';
        }else{
        for(let j = codeSymbols[i].length; j > 0; j -= 2){
            switch(codeSymbols[i].slice(j-2, j)){
                case '10' : codeWord.push('.'); break;
                case '11' : codeWord.push('-'); break;
                case '00' : codeWord.push(''); break;
                default: break;
            }
        }
        codeSymbols[i] = codeWord.reverse().join('');
    }
    decodeWord += MORSE_TABLE[codeSymbols[i]];
    }
    return decodeWord;
}

module.exports = {
    decode
}
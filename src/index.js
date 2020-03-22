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
    var space = '';
    var dotDash = '';
     for (var encodedLetter of expr.match(/.{1,10}/g)){

        if (encodedLetter == '**********'){
            space += ' '
            continue
        }
        for(var letter of encodedLetter.match(/.{1,2}/g)){
            if(letter == '10')
                dotDash += ".";
            else if(letter == '11')
                dotDash += '-';
            else 
                continue;
        }
        space += MORSE_TABLE[dotDash];
        dotDash = '';
    }
    return space;
}

module.exports = {
    decode
}

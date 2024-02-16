
// // STANDARD FOR LOOP METHOD:
// function reverseString (string) {
//     let reversed = '';

//     for (let i = string.length - 1; i >= 0; i--) {
//         reversed += string[i];
//     }

//     return reversed;
// };


// // STRING.SPLIT() METHOD THE STRING INTO AN ARRAY WITH EACH LETTER AS AN INDIVIDUAL ELEMENT ['H', 'i'] --> ARRAY.REVERSE() METHOD TO REVERSE THE ARRAY  ['i', 'H'] --> ARRAY.JOIN() METHOD TO CONVERT THE ARRAY BACK INTO A STRING USING NO SEPERATOR (NO COMMAS OR ANYTHING)  ('iH')
const reverseString = function(string) {
    const str = string.split('').reverse().join('');
    return str;
}

// Do not edit below this line
module.exports = reverseString;

function checkPunctuation (char) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    return punctuation.includes(char);
}

function palindromes (string) {
    string = string.toLowerCase();
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        if (!checkPunctuation(string[i])) {
            newString += string[i];
        }
    }

    newString = newString.replaceAll(' ','');

    return newString === newString.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;

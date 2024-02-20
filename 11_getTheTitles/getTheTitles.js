// // for of loop:
// const getTheTitles = function(arr) {
//     const titleArr = [];

//     for (const obj of arr) {
//         titleArr.push(obj.title);
//     }

//     return titleArr;
// };


// or

// map() method:
function getTheTitles (arr) {
    return arr.map(book => book.title);
}

// Do not edit below this line
module.exports = getTheTitles;


// To goal of this exercise is to return an array of ONLY the 'titles' property values.

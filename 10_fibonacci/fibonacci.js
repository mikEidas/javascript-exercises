
// // My first attempt at this problem. The code does provide the correct Fibonacci numbers, but I will attempt to redo to make the function more concise.

// const fibonacci = function(number) {

//     if (number < 0) return 'OOPS';
//     else if (number === 0 || number === '0') return 0;

//     const arr = [];

//     for (let i = 0; i <= number; i++) {

//         const previousIndex = i - 1;

//         if (i === 0) {
//             arr.push(i + 1, i + 1);
//         } else {
//             arr.push(arr[previousIndex] + arr[i]);
//         }
//     }

//     return arr[parseInt(number) - 1];
// };



// // Second attempt:
function fibonacci (number) {
    let num;

    if (typeof number !== 'number') num = parseInt(number);
    else num = number;

    if (num < 0) return 'OOPS';
    if (num == 0) return 0;

    const arr = [1, 1]; // 2, 3, 5, ...

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[num - 1];
}

console.log(fibonacci(4))


// Do not edit below this line
module.exports = fibonacci;


// Fibonacci sequence is a series of numbers that each number is the sum of the preceding two numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 1 + 1 = 2 + 3 = 5 + 8 = 13 = 21 + 34 = 55 

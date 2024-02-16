

// // This is genius. This function accepts 2 parameters: array and ...multipleValues (spread operator that can hold multiple values). Within the function body, I initialized the variable 'newArr' with the value of the parameter 'array' attaching the filter() method. Inside the filter method, I initialize 'number' as the element to be used in the callback function. The callback function now states: multipleValues (multipleValues for example can hold: 1, 2, 3) includes 'number'. We wrap this whole callback function with a ! NOT operator to negate it. Now the filter method will iterate through and check each number in the array. If multipleValues includes the current number in the array.. because of the ! NOT operator, it will NOT be filtered to the newArr. To simplify, the code reads like this: array.filter(number => number !== multipleValues).. essentially saying, filter only the values that ARE NOT in 'multipleValues':

function removeFromArray (array, ...multipleValues) {
    const newArr = array.filter(element => !(multipleValues.includes(element)));
    return newArr;
}


// console.log(removeFromArray([1,2,3,4], 3, 4)) ===> Returns [1, 2]

// Do not edit below this line
module.exports = removeFromArray;

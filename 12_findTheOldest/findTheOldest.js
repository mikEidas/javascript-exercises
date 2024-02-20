
// The goal of this exercise is to return the oldest person in the people's array

// Initialize 'age' with an empty array
// Initialize 'index' with a value of 0

// For of loop to iterate through each object of the inputted array
// Inside the loop body, I'll first check if obj.yearOfDeath is undefined (Carly's)
// If so, I'll push the age into the 'age' array by subtracting current date - yearOfBirth
// All else (objects that include both yearOfDeath and yearOfBirth) will push their ages by yearOfDeath - yearOfBirth

// Still working in the loop body, I will add the age property with their respective age into object in the array.
// First iteration: Carly's age is calculated/pushed to the 'age' array (currently only [958]). obj.age = age[index] = age[0], which would be age: 958.
// Second iteration: Ray's age is calculated/pushed to the 'age' array (currently [ 958, 49 ]). obj.age = age[index] = age[1], which would be age: 49.
// Last iteration: Jane's age is calculated/pushed to the 'age' array (currently [ 958, 49, 29 ]). obj.age = age[index] = age[2], which would add property/value of age: 29 to Jane's object.

// Initialize the variable 'oldestAge' by sorting the 'age' array in ascending order (lowest to highest) and chaining the slice method to only return the last indexed age. Make sure to wrap this all in a parseInt or Number since it originally returns an array like [958]. 

// Lastly I'll initialize a variable 'oldestPerson' with the value of array.find(). Inside the find method, I'll strictly check all the ages and see which one strictly equals the value of oldestAge (958). Return oldestPerson (in this example: Carly)


const findTheOldest = function(array) {
    const age = [];  // [ 958, 49, 29 ]
    let index = 0;

    for (const obj of array) {
        if (obj.yearOfDeath === undefined) {
            age.push(new Date().getFullYear() - obj.yearOfBirth);
        } else {
            age.push(obj.yearOfDeath - obj.yearOfBirth);
        }

        obj.age = age[index];
        index++
    }

    const oldestAge = parseInt(age.sort((a,b) => a - b).slice(-1));  // 958
    const oldestPerson = array.find(person => person.age === oldestAge);
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;

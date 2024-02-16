const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...nums) {
  if (Array.isArray(nums[0])) {
    nums = nums[0];
  }

  const summation = nums.reduce((acc,curr) => acc + curr, 0);
  return summation;
};

const multiply = function(...nums) {
  nums = nums[0];
  const product = nums.reduce((acc,curr) => acc * curr);
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;

  if (num < 0) {
      return `Factorials are not possible with negative numbers`;
  } else if (num === 0) {
      return 1;
  } else {
      for (let i = 1; i <= num; i++) {
          result *= i;
      }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

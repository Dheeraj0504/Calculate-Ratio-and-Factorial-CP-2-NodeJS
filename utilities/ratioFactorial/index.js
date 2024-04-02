const ratioOfTwoNumbers = require('../ratio/index');
const factorialOfNumber = require('../factorial/index');

function ratioAndFactorial(num1, num2, num3) {
  const resultRatio = ratioOfTwoNumbers(num1, num2);
  const resultFactorial = factorialOfNumber(num3);

  return {
    ratio: resultRatio,
    factorial: resultFactorial,
  };
};

module.exports = ratioAndFactorial;
// console.log(ratioAndFactorial(4, 2, 6));

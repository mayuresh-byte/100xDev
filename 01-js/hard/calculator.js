/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  add (num1) {
    this.result += num1;
    return this;
  }

  subtract (num1) {
    this.result -= num1;
    return this.result;
  }

  multiply (num1) {
    this.result *= num1;
    return this.result;
  }

  divide (num1) {
    if(num1 != 0) {
      this.result /= num1;
    } else {
      throw new Error("Required");
    }
    
    return this.result;
  }

  clear () {
    this.result = 0;
    return this.result;
  }

  getResult () {
    return this.result;
  }

  calculate (expression) {
    const cleanedExpression = expression.replace(/\s+/g, '').trim();
    try {
      const result = eval(cleanedExpression);
      if (Number.isFinite(result)) {
        this.result = result;
        return this;
      } else {
        throw new Error("Error: Invalid expression or result is not a finite number.");
      }
    } catch (error) {
      // Handle any errors that may occur during evaluation
      throw new Error("Error evaluating expression: " + error.message);
    }
  }

  constructor (parameters) {
    this.result = 0;
  }

}

module.exports = Calculator;

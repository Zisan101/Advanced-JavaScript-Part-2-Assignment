// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.

const Calculator = {
    value: 0,
  
    add: function (num) {
      this.value += num;
      return this; // Return 'this' to enable chaining
    },
  
    subtract: function (num) {
      this.value -= num;
      return this;
    },
  
    multiply: function (num) {
      this.value *= num;
      return this;
    },
  
    divide: function (num) {
      if (num !== 0) {
        this.value /= num;
      } else {
        console.log("Cannot divide by zero");
      }
      return this;
    },
  
    // Method to get the result
    result: function () {
      return this.value;
    }
  };
  
  // Example of method chaining:
  const result = Calculator.add(10).subtract(2).multiply(3).divide(2).result();
  console.log(result); // Output: 12
  
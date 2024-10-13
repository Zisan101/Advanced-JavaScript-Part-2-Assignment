// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
// property designation and a method getDetails to display the employee details.

// Person constructor from problem 1
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
  }
  
  // Employee constructor that inherits from Person
  function Employee(name, age, designation) {
    Person.call(this, name, age); // Inherit properties from Person
    this.designation = designation; // New property for Employee
    
    this.getDetails = function() {
      console.log("Name: " + this.name + ", Age: " + this.age + ", Designation: " + this.designation);
    };
  }
  
  // Example usage
  const employee1 = new Employee("Jane", 30, "Software Engineer");
  employee1.sayHello(); // Output: Hello, my name is Jane and I am 30 years old.
  employee1.getDetails(); // Output: Name: Jane, Age: 30, Designation: Software Engineer
  
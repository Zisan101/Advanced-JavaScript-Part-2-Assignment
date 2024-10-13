// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.

// Base class Shape
class Shape {
    draw() {
      console.log("Drawing a shape");
    }
  }
  
  // Subclass Circle that overrides draw method
  class Circle extends Shape {
    draw() {
      console.log("Drawing a Circle");
    }
  }
  
  // Subclass Rectangle that overrides draw method
  class Rectangle extends Shape {
    draw() {
      console.log("Drawing a Rectangle");
    }
  }
  
  // Demonstrating polymorphism
  const shapes = [new Circle(), new Rectangle()];
  
  shapes.forEach(shape => {
    shape.draw(); // Output will depend on the actual object type (Circle or Rectangle)
  });
  
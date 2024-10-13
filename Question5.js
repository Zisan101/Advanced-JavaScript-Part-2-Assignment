// Create a simple polyfill for the Array.includes method by the name of customIncludes.
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {
      // Handle negative fromIndex
      if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
      }
  
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === element) {
          return true;
        }
      }
  
      return false;
    };
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.customIncludes(3));  // Output: true
  console.log(arr.customIncludes(6));  // Output: false
  







function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");
  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */



 console.log(num); // Throws ReferenceError exception 
 num = 6; // Initialization




// Example 1 
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
// This prints value of y as undefined as JavaScript only hoists declarations
var y = 2; // Declare and Initialize y




a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'


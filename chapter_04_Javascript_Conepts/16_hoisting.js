// JS Engine
// LINE BY LINE interpretation and JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Actual process:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);
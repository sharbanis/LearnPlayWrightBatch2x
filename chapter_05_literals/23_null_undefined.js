// null vs undefined in JavaScript

// UNDEFINED
// undefined is the DEFAULT value when:
// 1. A variable is declared but not initialized
// 2. A function does not return a value
// 3. A function parameter is not provided
// 4. An object property does not exist

console.log("===== UNDEFINED =====");

// 1. Variable declared but not assigned
let x;
console.log(x); // undefined

// 2. Function with no return statement
function noReturn() {
    let a = 10;
    // no return
}
console.log(noReturn()); // undefined

// 3. Missing function parameter
function greet(name) {
    console.log(name); // undefined if name is not provided
}
greet(); // logs: undefined

// 4. Non-existent object property
const person = { name: "Alice" };
console.log(person.age); // undefined

// ============================================

// NULL
// null is an INTENTIONAL assignment representing "no value"
// It must be explicitly assigned
// null means "the value is nothing"

console.log("===== NULL =====");

// Explicitly set to null
let y = null;
console.log(y); // null

let user = null; // Intentionally no user
console.log(user); // null

const empty = null;
console.log(empty); // null

// ============================================

console.log("===== COMPARISON =====");

// Difference in type
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk in JavaScript)

// Loose equality (==) treats them as equal
console.log(undefined == null); // true

// Strict equality (===) treats them as different
console.log(undefined === null); // false

// ============================================

console.log("===== SIMPLE SUMMARY =====");

/*
undefined = "nothing was assigned (automatic)"
null = "nothing was assigned (intentional)"

undefined happens automatically
null is set on purpose

Both mean "no value" but:
- undefined = not assigned yet
- null = explicitly assigned as empty
*/

// Real-world example
let userName; // undefined (forgot to assign)
let userRole = null; // null (intentionally set as no role)

console.log(userName); // undefined
console.log(userRole); // null

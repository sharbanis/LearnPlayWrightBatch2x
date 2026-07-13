// let is Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5; -> if we redeclared we will get the below syntax error

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

//IMP - SyntaxError - redeclaration not allowed

let testing = "pending";

if (testing === "pending") {
    let testingTime = 1500;
    console.log("Inside block:", testingTime);   // 1500 will be the output
}

console.log(testingTime); // ReferenceError: testingTime is not defined as it is outside block

/* examples of blocks
 {} - Block 
 if(){} - Block 
 funcion name(){} - Block 
 */


// let = loyal
// var = keeps changingr


let name = "pending";
name = "done";
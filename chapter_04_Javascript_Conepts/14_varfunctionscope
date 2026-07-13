var a = 10; // This is now Global Scope
console.log(a);

// Defining a function
function printHello() {
    console.log("Hello World!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();
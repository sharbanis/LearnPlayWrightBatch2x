// All Number Types in JavaScript

console.log("===== DECIMAL NUMBERS (Base 10) =====");
let decimal1 = 42;
let decimal2 = 3.14;
let decimal3 = -100;
console.log(decimal1); // 42
console.log(decimal2); // 3.14
console.log(decimal3); // -100

// =========================================

console.log("\n===== INTEGER NUMBERS =====");
let integer1 = 10;
let integer2 = 0;
let integer3 = -50;
console.log(integer1); // 10
console.log(integer2); // 0
console.log(integer3); // -50

// =========================================

console.log("\n===== FLOATING POINT NUMBERS =====");
let float1 = 3.14;
let float2 = 2.5;
let float3 = 0.1 + 0.2; // floating point precision issue
console.log(float1); // 3.14
console.log(float2); // 2.5
console.log(float3); // 0.30000000000000004 (precision issue)

// =========================================

console.log("\n===== SCIENTIFIC NOTATION =====");
let scientific1 = 1e2; // 1 * 10^2 = 100
let scientific2 = 2e-3; // 2 * 10^-3 = 0.002
let scientific3 = 5.5e1; // 55
console.log(scientific1); // 100
console.log(scientific2); // 0.002
console.log(scientific3); // 55

// =========================================

console.log("\n===== HEXADECIMAL (Base 16) - 0x prefix =====");
let hex1 = 0xFF; // 255
let hex2 = 0x10; // 16
let hex3 = 0xAB; // 171
console.log(hex1); // 255
console.log(hex2); // 16
console.log(hex3); // 171

// =========================================

console.log("\n===== OCTAL (Base 8) - 0o prefix =====");
let octal1 = 0o10; // 8
let octal2 = 0o77; // 63
let octal3 = 0o100; // 64
console.log(octal1); // 8
console.log(octal2); // 63
console.log(octal3); // 64

// =========================================

console.log("\n===== BINARY (Base 2) - 0b prefix =====");
let binary1 = 0b1010; // 10
let binary2 = 0b1111; // 15
let binary3 = 0b11001; // 25
console.log(binary1); // 10
console.log(binary2); // 15
console.log(binary3); // 25

// =========================================

console.log("\n===== SPECIAL NUMBER VALUES =====");

// Infinity
let infinity = Infinity;
let negativeInfinity = -Infinity;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

// NaN (Not a Number)
let nan1 = NaN;
let nan2 = 0 / 0;
let nan3 = parseInt("hello");
console.log(nan1); // NaN
console.log(nan2); // NaN
console.log(nan3); // NaN

// Check for NaN
console.log(isNaN(nan1)); // true
console.log(Number.isNaN(nan2)); // true

// =========================================

console.log("\n===== BIGINT (Arbitrary Precision) =====");
// For very large numbers beyond Number.MAX_SAFE_INTEGER
let bigint1 = 123456789012345678901234567890n;
let bigint2 = BigInt("123456789012345678901234567890");
let bigint3 = 9007199254740991n; // Beyond MAX_SAFE_INTEGER
console.log(bigint1); // 123456789012345678901234567890n
console.log(bigint2); // 123456789012345678901234567890n
console.log(bigint3); // 9007199254740991n

// Note: Cannot mix BigInt with regular numbers in operations
// bigint1 + 1; // TypeError
// Must use: bigint1 + 1n;

// =========================================

console.log("\n===== NUMBER CONSTANTS =====");
console.log(Number.MAX_VALUE); // Largest possible number
console.log(Number.MIN_VALUE); // Smallest possible number (near 0)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN

// =========================================

console.log("\n===== TYPE CHECKING NUMBERS =====");
let num = 42;
console.log(typeof num); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof NaN); // "number" (quirk: NaN is of type "number")
console.log(typeof 123n); // "bigint"

// =========================================

console.log("\n===== SUMMARY TABLE =====");
console.log(`
Type                Example         Output
----                -------         ------
Decimal             42              42
Float               3.14            3.14
Scientific          1e2             100
Hexadecimal         0xFF            255
Octal               0o10            8
Binary              0b1010          10
Infinity            1/0             Infinity
NaN                 0/0             NaN
BigInt              123n            123n
`);

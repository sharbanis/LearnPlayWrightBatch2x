// Leap Year Check

Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let y = 2024;

if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    console.log(y + " is a Leap Year");
} else {
    console.log(y + " is NOT a Leap Year");
}
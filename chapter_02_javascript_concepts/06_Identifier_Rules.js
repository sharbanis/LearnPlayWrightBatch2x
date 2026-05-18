// ***Rules of Identifiers***
// Must begin with a letter, underscore (_), or dollar sign ($)
// Can contain letters, digits, underscores, or dollar signs
// Cannot contain spaces or special characters like -, +, *, /
// Cannot be a reserved keyword (e.g. var, function, class, let, const)
// Are case-sensitive (myVar and myvar are different)

//===== VALID IDENTIFIERS =====
var name;
var _count;
var $price;
var user1;
var total_sum;
var firstName;
var data_2;
var isValid;
var maxValue;
var result$;
var _private;
var $jquery;
var myVar123;
var snake_case;
var camelCase;

//===== INVALID IDENTIFIERS (These will cause errors) =====
// var 1count;              // ERROR: starts with a digit
// var first-name;          // ERROR: contains hyphen
// var total sum;           // ERROR: contains space
// var var;                 // ERROR: reserved keyword
// var class;               // ERROR: reserved keyword
// var let;                 // ERROR: reserved keyword
// var const;               // ERROR: reserved keyword
// var function;            // ERROR: reserved keyword
// var @email;              // ERROR: contains @
// var user*;               // ERROR: contains *
// var total+sum;           // ERROR: contains +
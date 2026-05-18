//===== NAMING CONVENTIONS / CASES =====

//1. camelCase (most common in JavaScript)
var firstName;
var lastName;
var userEmail;
var phoneNumber;
var isActive;
var calculateTotal;

//2. snake_case (often used in constants, Python style)
var first_name;
var last_name;
var user_email;
var phone_number;
var is_active;
var calculate_total;

//3. PascalCase (used for classes and constructors)
var FirstName;
var LastName;
var UserEmail;
var PhoneNumber;
var IsActive;
var CalculateTotal;

//4. UPPER_CASE (used for constants)
var FIRST_NAME = "John";
var LAST_NAME = "Doe";
var USER_EMAIL = "john@example.com";
var PHONE_NUMBER = "123-456-7890";
var IS_ACTIVE = true;
var MAX_USERS = 100;
var API_URL = "https://api.example.com";

//5. kebab-case (NOT valid in JavaScript - would need quotes)
// var first-name;  // ERROR: Cannot use hyphens directly
var obj = {
  "first-name": "John",  // Valid as object property in quotes
  "last-name": "Doe"
};

//6. dot_case (rarely used in JavaScript)
var user_profile_data;
var system_configuration_settings;
var database_connection_pool;

//7. Mixed with underscores and numbers (valid but not recommended)
var _privateVariable;     // Convention: leading underscore for "private"
var $jquery;              // Convention: $ prefix for jQuery
var temp1, temp2, temp3;
var user_1, user_2;

//8. ALL_CAPS_SNAKE_CASE (for constants)
var MAX_RETRIES = 5;
var DEFAULT_TIMEOUT = 3000;
var SERVER_PORT = 8080;
var DATABASE_URL = "mongodb://localhost";

//===== BEST PRACTICES =====
// - Use camelCase for variables and functions
// - Use PascalCase for classes and constructors
// - Use UPPER_CASE for constants
// - Use meaningful names that describe the purpose
// - Avoid single letter variables (except for loops: i, j, k)
// - Avoid cryptic abbreviations

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31; // We can change let variables
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// console.log("=== MARH OPERATORS ===");

// const now = 2037;

// const ageJonas = now - 1991;

// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5); // 15
// console.log("Subtraction:", 20 - 8); // 12
// console.log("Multiplication:", 4 * 7); // 28
// console.log("Division:", 15 / 3); // 5
// console.log("Exponentiation:", 2 ** 3); // 8

// const firstName = "Jonas";
// const lastName = "Baluyut";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!"); 
// console.log("I am " + 25 + " years old"); 

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10; // Same as: x = x + 10 = 25
// console.log("After x += 10:", x);

// x *= 4; // Same as: x = x * 4 = 100
// console.log("After x *= 4:", x);

// x /= 2; // Same as: x = x / 2 = 50
// console.log("After x /= 2:", x);

// x++; // Same as: x = x + 1
// console.log("After x++:", x); // 51

// x--; // Same as: x = x - 1
// x--; // Again: x = x - 1
// console.log("After x-- twice:", x); // 49

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); 

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); 

// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; 
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log("Mark's BMI:", bmiMark);
// console.log("John's BMI:", bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Is Mark's BMI hiigher than John's?", markHigherBMI);

// //Test Data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark2 = massMark2 / heightMark2 ** 2;
// const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// console.log("Mark's BMI:", bmiMark2);
// console.log("John's BMI:", bmiJohn2);
// console.log("Is Mark's BMI higher than John's?", bmiMark2 > bmiJohn2);

//Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// const JonasNew = `I'm  Jonas, a ${year - birthYear} year old ${job}!`;
// console.log(JonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); 

// console.log(`Just a regular string...`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }


////////////////////////////////////
// Truthy and Falsy Values

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("")); // false (empty string)

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0; 
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }


// if (height !== undefined) {
//   console.log("Height is defined");
// }




// Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
// 

////////////////////////////////////
// Type Conversion and Coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); 
// console.log(Number(inputYear) + 18); 

// console.log(Number("Jonas"));
// console.log(typeof NaN); 

// console.log(String(23), 23); 
// console.log(typeof String(23)); 

// // type coercion (automatic)
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); 

// console.log("23" / "2"); 
// console.log("23" * "2");

// let n = "1" + 1; 

// n = n - 1; 
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5"); 

// // Equality - Strict

// const ageStr = "18";
// if (ageStr === 18) console.log("You just became an adult :D (strict)");
// if (ageStr == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18); 
// console.log(18 === 18); 

// // Why == can be dangerous
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("   " == 0);

// // best practice 
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// // Logical Operators

// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log( `AND OPERATOR: $(hasDriversLicense && hasGoodVision)`);
// console.log(`OR OPERATOR: $(hasDriversLicense || hasGoodVision)`); 
// console.log(`NOT OPERATOR: $(!hasDriversLicense)`);

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// // More complex scenarios
// const userAge = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((userAge >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // // Create a club entry system with these rules:
// // // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// // const age = 19; 
// // const hasID = true; 
// // const isVIP = false; 

// // // Your logic here:
// // // if (...) {
// // //   console.log('Welcome to the club!');
// // // } else {
// // //   console.log('Sorry, you cannot enter');
// // // }

// const clubAge = 34;
// const hasID = true;
// const isVIP = false;
// if ((clubAge >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// }
// else {
//   console.log('Sorry, you cannot enter');

// }

// // The Conditional (Ternary) Operator
// const age = 23;

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// ### The Challenge

// **Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.**

// **Your Tasks:**

// 1. **Calculate the tip** depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. **Print a string to the console** containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// **TEST DATA:** Test for bill values 275, 40 and 430

// **HINT:** To calculate 20% of a value, simply multiply it by 20/100 = 0.2  
// **HINT:** Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Coding Challenge #4

// const bill = 275; // Test with 275, 40, and 430

// // Step 1: Create the tip calculation using ternary operator
// // Rule: 15% if between 50-300, otherwise 20%
// // Hint: bill >= 50 && bill <= 300

// const tip = // Your ternary operator here

// // Step 2: Create beautiful output with template literal
// console.log(// Your template literal here);

// // Expected outputs:
// // Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// // Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// // Bill 430: "The bill was 430, the tip was 86, and the total value 516"

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total values ${bill + tip}`)
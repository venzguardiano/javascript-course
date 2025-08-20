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
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

const JonasNew = `I'm  Jonas, a ${year - birthYear} year old ${job}!`;
console.log(JonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); 

console.log(`Just a regular string...`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


////////////////////////////////////
// Truthy and Falsy Values

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0; 
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}


if (height !== undefined) {
  console.log("Height is defined");
}




// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
if (BMIMark > BMIJohn) {
    const message = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
    console.log(message);
} else {
    const message = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
    console.log(message);
}





// console.log('Fundamentals Part 2');

// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1A = fruitProcessor(5, 0);
// const juice2B = fruitProcessor(2, 4);
// const juice3C = fruitProcessor(3, 2);

// //Function Expressions
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calcAge(2005);
// console.log(age1);

// function calcAge2(birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const myAge = calcAge2(2005, 2025);
// const someoneAge = calcAge2(2003, 2025);

// console.log(`I am ${myAge} years old`);
// console.log(`Someone is ${someoneAge} years old`);

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah"));


// // Return Values and Scope
// function calcAge3(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear); 
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2005, "Pogi"));
// console.log(yearsUntilRetirement(1948, "Roan"));


// const globalVar = "I am global";

// function testScope() {
  
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(globalVar);

// const userName = "Jonas"; 

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`; 
//   const timestamp = new Date().toLocaleTimeString(); 

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// ////////////////////////////////////
// // Coding Challenge #1

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //   // Your code here
// // }

// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   // Your code here
// //   // Remember: team needs DOUBLE the score to win
// //   // Use template literals for nice output
// // }

// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // function calcAverage(score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3;
// // }

// //  function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //     } else {
// //         return `No team wins...`;
// //     }
// //  }

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// Arrays
const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

const grades = [85, 92, 78, 96, 88];
console.log(grades);

//Arrays - Creation and Access
console.log("=== ARRAYS ===");

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ["Jonas", 27, true, friends];
console.log(mixed);

const yearsArr = new Array(1991, 1984, 2008, 2020);
console.log(yearsArr);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]); 

console.log(friends.length); 

console.log(friends[friends.length - 1]);

friends[1] = "Jay";
console.log(friends); 

const calcAge = function (birthYear) {
  return 2025 - birthYear;
}

const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
console.log(ages);

ages[1] = calcAge(2012);
console.log(ages);

// Array Methods

const newLength = friends.push("Jay");
console.log(friends); 
console.log(newLength); 

friends.unshift("John");
console.log(friends); 

const popped = friends.pop();
console.log(popped);
console.log(friends); 


const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));  

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));


friends.forEach(function (friend, index) {
  console.log(`${index}: ${friend}`);
});

friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});

const grades1= [85, 92, 78, 96, 88, 74];
let total = 0;

for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
const average = total / grades.length;
console.log(`Average grade: ${average}`);


let passedCount = 0;
grades.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades.length} students passed`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   // Your code here
//   // Hint: Sum all grades, divide by length
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   // Your code here
//   // Hint: Start with first grade, compare with each subsequent grade
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);



function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

const reportGrades = [78, 85, 92, 67, 88, 95, 73, 82];

const average1 = calculateAverage(reportGrades);
const highest = findHighestGrade(reportGrades);
const lowest = findLowestGrade(reportGrades);
const passing = countPassing(reportGrades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average1.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${reportGrades.length}`);

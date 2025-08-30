// // console.log('Fundamentals Part 2');

// // // Functions - Declarations and Expressions
// // console.log("=== FUNCTIONS ===");

// // function logger() {
// //     console.log("This function is working");
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // const juice1A = fruitProcessor(5, 0);
// // const juice2B = fruitProcessor(2, 4);
// // const juice3C = fruitProcessor(3, 2);

// // //Function Expressions
// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // };

// // const age1 = calcAge(2005);
// // console.log(age1);

// // function calcAge2(birthYear, currentYear) {
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2(2005, 2025);
// // const someoneAge = calcAge2(2003, 2025);

// // console.log(`I am ${myAge} years old`);
// // console.log(`Someone is ${someoneAge} years old`);

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46));
// // console.log(introduce("Sarah"));


// // // Return Values and Scope
// // function calcAge3(birthYear) {
// //   return 2037 - birthYear;
// // }

// // function yearsUntilRetirement(birthYear, firstName) {
// //   const age = calcAge(birthYear); 
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     return `${firstName} retires in ${retirement} years`;
// //   } else {
// //     return `${firstName} has already retired!`;
// //   }
// // }

// // console.log(yearsUntilRetirement(2005, "Pogi"));
// // console.log(yearsUntilRetirement(1948, "Roan"));


// // const globalVar = "I am global";

// // function testScope() {
  
// //   const localVar = "I am local";
// //   console.log(globalVar);
// //   console.log(localVar);
// // }

// // testScope();
// // console.log(globalVar);

// // const userName = "Jonas"; 

// // function createWelcomeMessage(user) {
// //   const message = `Welcome back, ${user}!`; 
// //   const timestamp = new Date().toLocaleTimeString(); 

// //   return `${message} Current time: ${timestamp}`;
// // }

// // console.log(createWelcomeMessage(userName));

// // ////////////////////////////////////
// // // Coding Challenge #1

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   // Your code here
// // // }

// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   // Your code here
// // //   // Remember: team needs DOUBLE the score to win
// // //   // Use template literals for nice output
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // function calcAverage(score1, score2, score3) {
// // //     return (score1 + score2 + score3) / 3;
// // // }

// // //  function checkWinner(avgDolphins, avgKoalas) {
// // //     if (avgDolphins >= 2 * avgKoalas) {
// // //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //     } else {
// // //         return `No team wins...`;
// // //     }
// // //  }

// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Arrays
// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // //Arrays - Creation and Access
// // console.log("=== ARRAYS ===");

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // const yearsArr = new Array(1991, 1984, 2008, 2020);
// // console.log(yearsArr);

// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]); 

// // console.log(friends.length); 

// // console.log(friends[friends.length - 1]);

// // friends[1] = "Jay";
// // console.log(friends); 

// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // }

// // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // console.log(ages);

// // ages[1] = calcAge(2012);
// // console.log(ages);

// // // Array Methods

// // const newLength = friends.push("Jay");
// // console.log(friends); 
// // console.log(newLength); 

// // friends.unshift("John");
// // console.log(friends); 

// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends); 


// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // console.log(friends.indexOf("Steven"));
// // console.log(friends.indexOf("Bob"));  

// // console.log(friends.includes("Steven"));
// // console.log(friends.includes("Bob"));


// // friends.forEach(function (friend, index) {
// //   console.log(`${index}: ${friend}`);
// // });

// // friends.forEach((friend, index) => {
// //   console.log(`Friend ${index + 1}: ${friend}`);
// // });

// // const grades1= [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades.length; i++) {
// //   total += grades[i];
// // }
// // const average = total / grades.length;
// // console.log(`Average grade: ${average}`);


// // let passedCount = 0;
// // grades.forEach((grade) => {
// //   if (grade >= 70) passedCount++;
// // });
// // console.log(`${passedCount} out of ${grades.length} students passed`);

// // ////////////////////////////////////
// // // Coding Challenge #2 - Student Grade Manager

// // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // Function to calculate average
// // function calculateAverage(grades) {
// //   // Your code here
// //   // Hint: Sum all grades, divide by length
// // }

// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //   // Your code here
// //   // Hint: Start with first grade, compare with each subsequent grade
// // }

// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //   // Your code here
// //   // Hint: Similar to highest, but use < comparison
// // }

// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //   // Your code here
// //   // Hint: Counter pattern - increment when condition is met
// // }

// // // Generate complete report
// // const average = calculateAverage(grades);
// // const highest = findHighestGrade(grades);
// // const lowest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);



// // function calculateAverage(grades) {
// //   let sum = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     sum += grades[i];
// //   }
// //   return sum / grades.length;
// // }

// // function findHighestGrade(grades) {
// //   let highest = grades[0];
// //   for (let i = 1; i < grades.length; i++) {
// //     if (grades[i] > highest) {
// //       highest = grades[i];
// //     }
// //   }
// //   return highest;
// // }

// // function findLowestGrade(grades) {
// //   let lowest = grades[0];
// //   for (let i = 1; i < grades.length; i++) {
// //     if (grades[i] < lowest) {
// //       lowest = grades[i];
// //     }
// //   }
// //   return lowest;
// // }

// // function countPassing(grades, passingGrade) {
// //   let count = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] >= passingGrade) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }

// // const reportGrades = [78, 85, 92, 67, 88, 95, 73, 82];

// // const average1 = calculateAverage(reportGrades);
// // const highest = findHighestGrade(reportGrades);
// // const lowest = findLowestGrade(reportGrades);
// // const passing = countPassing(reportGrades, 70);

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${average1.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${reportGrades.length}`);

// // The Array Limitation Problem

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); 
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// // Basic Object Creation
// const jonas = {
//   firstName: "Jonas", 
//   lastName: "Schmedtmann", 
//   age: 2037 - 1991, 
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"], 
// };
// console.log(jonas);

// // The Same Data - Arrays vs Objects
// const jonasArray2 = [
//   "Jonas",
//   "Schmedtmann",
//   46,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // Dot Notation
// console.log(jonas.firstName); 
// console.log(jonas.lastName); 
// console.log(jonas.age); 
// console.log(jonas.job); 
// console.log(jonas.friends);

// // Bracket Notation
// console.log(jonas["firstName"]); 
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// // Bracket Notation's Superpower
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // Both notations work for modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// // Objects can grow - add properties after creation
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// // Create your own objects:
// // 1. Create a 'book' object with title, author, pages, and isRead properties
// // 2. Create a 'playlist' object with name, creator, songs array, and genre
// // 3. Access and log different properties using both dot and bracket notation
// // 4. Add a new property to each object
// // 5. Modify an existing property in each object

// // Your code here...

// // Example structure:
// // const book = {
// //   // Your properties here
// // };

// // const playlist = {
// //   // Your properties here
// // };

// // // Practice accessing properties
// // console.log(book.title);
// // console.log(playlist["creator"]);

// // // Add new properties

// // // Modify existing properties

// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   pages: 180,
//   isRead: false,
// };

// book.genre = "Classic";

// book.isRead = true;

// const playlist = {
//   name: "Chill Vibes",
//   creator: "Alice",
//   songs: ["Sunrise", "Dreamscape", "Night Drive"],
//   genre: "Lo-fi",
// };


// playlist.yearCreated = 2024;

// playlist.genre = "Chillhop";

// console.log(book.title);
// console.log(playlist["creator"]);


// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {

//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// // Object Methods

// const jonas1 = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas1.calcAge(1991)); 
// console.log(jonas1.calcAge(jonas1.birthYear)); 

// // "This"
// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); 
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge()); 

// // Advanced: Storing Calculated Values
// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear; 
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age); 
// console.log(jonasAdvanced.getSummary());

// // Create a 'calculator' object:
// // 1. Properties: num1, num2, operator
// // 2. Methods: add(), subtract(), multiply(), divide()
// // 3. Method: calculate() that uses the operator to perform the right operation
// // 4. Method: getResult() that returns a formatted string
// // 5. Use 'this' to access the object's own properties

// const calculator = {
//   num1: 75,
//   num2: 33,
//   operator: "-",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 - this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num2 !== 0 ? this.num1 / this.num2 : "Error: Division by zero";
//   },

//   calculate: function () {
//     switch (this.operator) {
//       case "+":
//         return this.add();
//       case "-":
//         return this.subtract();
//       case "*":
//         return this.multiply();
//       case "/":
//         return this.divide();
//       default:
//         return "Invalid operator";
//     }
//   },

//   getResult: function () {
//     const result = this.calculate();
//     return `Result of ${this.num1} ${this.operator} ${this.num2} = ${result}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//   },

//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active");
// //   },

// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} ${this.lastName} (${this.calcAge()} years old) from ${this.location}.\n` +
// //       `Interests: ${this.interests.join(", ")}\n` +
// //       `Active friends: ${this.getActiveFriends().map(f => f.name).join(", ") || "None"}\n` +
// //       `Status: ${this.isActive ? "Active" : "Inactive"}`;
// //   },
// // };


// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// // Selecting DOM Elements
// let button; // Declare in higher scope

// document.addEventListener("DOMContentLoaded", function () {
//   const message = document.querySelector(".message"); 
//   button = document.querySelector("#btn"); 
//   const heading = document.querySelector("h1"); 
//   const input = document.querySelector(".guess"); 

//   console.log(message);
//   console.log(button);
//   console.log(heading);
// });

// // Different selector types
// document.querySelector(".className"); 
// document.querySelector("#idName"); 
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]'); 
// document.querySelector("div p"); 

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); 

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); 
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length); 

// // Practice selecting elements:
// // 1. Select the element with class 'guess' and log it
// // 2. Select the element with ID 'btn' using both querySelector and getElementById
// // 3. Select all span elements and log the collection
// // 4. Select the first span element and log its textContent
// // 5. Experiment with different CSS selectors

// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// const buttonQuery = document.querySelector("#btn");

// console.log(buttonQuery === buttonById);

// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// const firstSpan = document.querySelector("span");
// if (firstSpan) {
//   console.log(firstSpan.textContent);
// } else {
//   console.log("No span element found.");
// }

// // Modifying Element Content
// const message = document.querySelector(".message");

// if (message) {
//   console.log(message.textContent);
//   message.textContent = "Hello from JavaScript!";

//   message.innerHTML = "<strong>Bold text from JS!</strong>";

//   console.log(message.innerText);
// } else {
//   console.log("No element with class 'message' found.");
// }

// // Input elements use .value property, not textContent
// const input = document.querySelector(".guess");

// if (input) {
//   console.log(input.value); 
//   input.value = "Default text"; 
//   input.placeholder = "Type here"; 
// } else {
//   console.log("No element with class 'guess' found.");
// }

// // Changing element styles with the style property
// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; 
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// // Practice content and style manipulation:
// // 1. Change the h1 text to your name
// // 2. Make the button's background color blue and text white
// // 3. Set a placeholder text in the input field
// // 4. Change the message text to include HTML bold formatting
// // 5. Make the score display larger and a different color

// const heading2 = document.querySelector("h1");
// const button2 = document.querySelector("#btn");
// const input2 = document.querySelector(".guess");
// const message2 = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");


// if (heading2) {
//   heading2.textContent = "Interactive Score Tracker";
// }

// if (button2) {
//   button2.style.backgroundColor = "blue";
//   button2.style.color = "white";
//   button2.style.padding = "10px 20px";
//   button2.style.border = "none";
//   button2.style.borderRadius = "5px";
// }

// if (input2) {
//   input2.placeholder = "Type something cool...";
// }

// if (message2) {
//   message2.innerHTML = "This is <strong>bold</strong> text from JavaScript!";
// }

// if (scoreValue) {
//   scoreValue.style.fontSize = "2rem";
//   scoreValue.style.color = "green";
//   scoreValue.style.fontWeight = "bold";
// }

// // Event Listeners - User Interaction

// const button3 = document.querySelector("#btn");
// const message3 = document.querySelector(".message");

// if (button3 && message3) {
//   button3.addEventListener("click", function () {
//     console.log("Button was clicked!");
//     message3.textContent = "You clicked the button!";
//     message3.style.color = "green";
//   });
// }


// const element = document.querySelector("#btn");
// if (element) {
//   element.addEventListener("eventType", function () {
//     console.log("Element was clicked!");
//   });
// } else {
//   console.log("Button with id 'btn' not found.");
// }


// let clickCount = 0;

// document.addEventListener("DOMContentLoaded", function () {
//   if (button) {
//     button.addEventListener("click", function () {
//       clickCount++;
//       button.textContent = `Clicked ${clickCount} times`;
//       button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
//     });
//   } else {
//     console.log("Button is not defined.");
//   }
// });


// const guessInputField = document.querySelector(".guess");

// if (guessInputField) {
//   guessInputField.addEventListener("input", function () {
//     const userText = guessInputField.value;
//     message.textContent = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.length + 10}px`;
//   });
// } else {
//   console.log("No element with class 'guess' found for input event.");
// }


// if (input) {
//   input.addEventListener("keydown", function (event) {
//     console.log(`Key pressed: ${event.key}`);

//     if (event.key === "Enter") {
//       message.textContent = `You pressed Enter! Text was: ${input.value}`;
//       input.value = ""; 
//     }
//   });
// } else {
//   console.log("No element with class 'guess' found for keydown event.");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
    
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// // Practice event listeners:
// // 1. Add a click event to the h1 that changes its color
// // 2. Create an input event that displays character count as user types
// // 3. Add a keydown event that responds to the spacebar
// // 4. Make the button change its text when hovered (mouseover event)
// // 5. Create a double-click event that does something special

// const heading1 = document.querySelector("h1");
// const input1 = document.querySelector(".guess");
// const button1 = document.querySelector("#btn");
// const message1 = document.querySelector(".message");


// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });


// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });


// document.addEventListener("keydown", function (event) {
  
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
  
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "2";
//     button.textContent = "Click Me!";
//     heading.textContent = "JavaScript DOM Manipulation";
//     heading.style.backgroundColor = "#000000";
//     heading.style.color = "#ffffff";
//   }
// });


// input.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });


// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });


// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });


// button.addEventListener("click", function () {
//   message.textContent = "Button clicked!";
//   message.style.color = "green";
// });


let scores = [0, 0];
let targetScore = 5;
let gameActive = true;

const scoreEls = [document.getElementById("score-1"), document.getElementById("score-2")];
const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.getElementById("btn-reset");
const winningInput = document.getElementById("winning-score");
const targetDisplay = document.querySelector(".target");
const winnerMsg = document.querySelector(".winner");
const winnerName = document.querySelector(".winner-name");
const players = [document.querySelector(".player-1"), document.querySelector(".player-2")];


function updateDisplay() {
  scoreEls[0].textContent = scores[0];
  scoreEls[1].textContent = scores[1];
}


function checkWinner() {
  if (scores[0] >= targetScore) {
    endGame(0, 1);
  } else if (scores[1] >= targetScore) {
    endGame(1, 0);
  }
}

function endGame(winnerIndex, loserIndex) {
  gameActive = false;
  players[winnerIndex].classList.add("winner");
  players[loserIndex].classList.add("loser");
  winnerMsg.classList.remove("hidden");
  winnerName.textContent = `Player ${winnerIndex + 1}`;
  document.body.style.backgroundColor = "#d4edda"; 
}


function addPoint(playerIndex) {
  if (!gameActive) return;
  scores[playerIndex]++;
  updateDisplay();
  checkWinner();
}

function resetGame() {
  scores = [0, 0];
  gameActive = true;
  updateDisplay();
  players.forEach(p => p.classList.remove("winner", "loser"));
  winnerMsg.classList.add("hidden");
  document.body.style.backgroundColor = ""; 
}

addButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const player = parseInt(btn.dataset.player) - 1;
    addPoint(player);
  });
});

resetBtn.addEventListener("click", resetGame);

winningInput.addEventListener("input", () => {
  targetScore = Number(winningInput.value);
  targetDisplay.textContent = targetScore;
  resetGame();
});

document.addEventListener("keydown", (e) => {
  if (!gameActive && e.key.toLowerCase() !== "r") return;

  if (e.key === "1") {
    addPoint(0);
  } else if (e.key === "2") {
    addPoint(1);
  } else if (e.key.toLowerCase() === "r") {
    resetGame();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  targetDisplay.textContent = targetScore;
  updateDisplay();
});
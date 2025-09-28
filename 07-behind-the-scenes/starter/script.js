// // 'use strict';

// // console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// // // Global Execution Context
// // console.log('Starting program');

// // function alpha() {
// //   console.log('alpha:start');
// //   beta();
// //   console.log('alpha:end');
// // }

// // function beta() {
// //   console.log('beta');
// // }

// // alpha();

// // function outerFunction() {
// //   console.log('Outer function start');
// //   innerFunction();
// //   console.log('Outer function end');
// // }

// // function innerFunction() {
// //   console.log('Inner function');
// //   console.trace();
// // }

// // outerFunction();

// // const globalVar = 'I am global';

// // function anyFunction() {
// //   console.log(globalVar);
// // }

// // function myFunction() {
// //   const functionVar = 'I am function-scoped';
// //   console.log(functionVar);
// // }

// // if (true) {
// //   let blockVar = 'I am block-scoped';
// //   const alsoBlockVar = 'Me too';
// //   var notBlockScoped = 'I leak out';
// // }

// // console.log(notBlockScoped);

// // const outer = 'global';

// // function demoScope() {
// //   const inner = 'function';
// //   if (true) {
// //     const blockConst = 'block';
// //     var functionVar = 'var-function-scoped';
// //     console.log(outer, inner, blockConst, functionVar);
// //   }
// //   console.log(outer, inner, functionVar);
// // }

// // demoScope();

// // const name = 'GlobalName';

// // function a() {
// //   const name = 'FunctionName';
// //   function b() {
// //     console.log(name);
// //   }
// //   b();
// // }

// // a();

// // console.log(varX);

// // var varX = 1;
// // let letX = 2;
// // const constX = 3;

// // console.log(varX); // 1
// // console.log(letX); // 2
// // console.log(constX); // 3

// // console.log(addDecl(2, 3));

// // function addDecl(a, b) {
// //   return a + b;
// // }
// // const addExpr = function (a, b) {
// //   return a + b;
// // };
// // const addArrow = (a, b) => a + b;

// // console.log(addDecl(2, 3)); // 5
// // console.log(addExpr(2, 3)); // 5
// // console.log(addArrow(2, 3)); // 5

// // const apiUrl = 'https://example.com';
// // console.log(apiUrl);

// // let title = 'Behind the Scenes';

// // function outer() {
// //   const label = 'outer';
// //   function inner() {
// //     console.log('scope:', label);
// //   }
// //   inner();
// // }
// // outer();

// // function one() {
// //   two();
// // }
// // function two() {
// //   console.log('stack: two');
// // }
// // one();

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

// const person1 = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// const greetFunction = person.greet;
// greetFunction();

// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', person.greet.bind(person));
//   button.addEventListener('click', () => person.greet());
//   button.addEventListener('click', person.greet.bind(person));
// }

// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   printHobbiesBad() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// user.printHobbiesBad();
// user.printHobbiesGood();

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// const userCard = {
//   name: 'Sarah',

//   setupEvents() {
//     console.log('Event setup for:', this.name);
//   },
// };

// userCard.setupEvents();

// const calculator = {
//   numbers: [1, 2, 3, 4, 5],
//   multiplier: 2,

//   processNumbers() {
//     return this.numbers.map(num => num * this.multiplier);
//   },
// };

// console.log('Processed numbers:', calculator.processNumbers());

// const myTimer = {
//   name: 'My Timer',

//   startCountdown() {
//     console.log(`${this.name} starting countdown...`);

//     let count = 5;
//     const intervalId = setInterval(() => {
//       if (count > 0) {
//         console.log(count);
//         count--;
//       } else {
//         console.log("Time's up!");
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   },
// };

// myTimer.startCountdown();

// PRIMITIVES IN STACK
let age = 30;
let oldAge = age;
age = 31;

console.log('age:', age);
console.log('oldAge:', oldAge);

// OBJECTS IN HEAP
const me = { name: 'Jonas', age: 30 };
const friend = me;

friend.age = 27;

console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

// Spread operator shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

// const problemObject = {
//   name: 'Test',
//   date: new Date(),
//   method: function () {
//     return 'hello';
//   },
//   undefinedValue: undefined,
// };

// const brokenCopy = JSON.parse(JSON.stringify(problemObject));
// console.log('Broken copy:', brokenCopy);

// const workingCopy = structuredClone(problemObject);
// console.log('Working copy:', workingCopy);

const userManager = {
  users: [],

  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return userCopy;
  },

  getUsers: function () {
    return this.users;
  },
};

const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);

('use strict');

function demonstrateThis() {
  console.log('this in strict mode:', this);
}
demonstrateThis();

const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed';
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}

const userManager2 = {
  users: [],

  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this;
  },

  getUsers: function () {
    return [...this.users];
  },
};

const originalUser2 = { name: 'John', preferences: { theme: 'dark' } };
userManager2.addUser(originalUser2);

originalUser2.name = 'Modified';
console.log('Original changed:', originalUser2);
console.log('Stored user:', userManager2.getUsers()[0]);

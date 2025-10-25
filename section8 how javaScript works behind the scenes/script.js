"use strict";

//video 91 : section intro
//video 92 : section Roadmap
//video 93 : An high level overview of JavaScript
//video 94 : JavaScript Engines Runtime Environment
//video 95 : Execution Context and Call Stack
//video 96 : Scoping and Scope Chain
//video 97 : Scoping  in Practice
//video 98 : Variable Environment: Hoisting AND TheTDZ
/* 
          WHAT IS HOISTING?
          Make some types of variables accessible/usable in the code 
          before the are actually declared "Variables lifted to the top of their scope"

          WHAT IS THE TEMPORAL DEAD ZONE (TDZ)?
          The TDZ is the time period from the start of a block until the variable is declared.
          During this time, the variable is in the "dead zone" and cannot be accessed.
          This helps prevent errors and makes the code more predictable.

          */
//video 99 : Hoisting and TDZ in Practice

// VARIABLES
// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'Shahid';
// let job = 'developer';
// const year = 1997;

// FUNCTIONS
// console.log(addDecl(2,3)); // 5
// // console.log(addExpr(5,3)); // ReferenceError before initialization
// console.log(addArrow(6,5)); // (Const) ReferenceError before initialization: (Var) undefined

// function addDecl(a,b){
//     return a+ b;
// }
// const addExpr = function(a, b){
//     return a+ b;
// }
// var addArrow = (a, b) => a + b;

// EXAMPLE
// console.log(numProducts); // (var) undefined and undefined means falsy value, (const) (let) ReferenceError before initialization

//  if(!numProducts) deleteShoppingCart(19); // false -- won't work

//  if(!numProducts){
//      console.log('first');
//     deleteShoppingCart(numProducts); // true
//  }
// //  var numProducts = 10;
//  const numProducts = 10;

// function deleteShoppingCart(number){
//     console.log('All products deleted!' + number);
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(window.x)
// console.log(y === window.y);
// console.log(window.y)
// console.log(z === window.z);
// console.log(window.z)

// Note : In Node.js, the global object is called global, not window.
// console.log(global.x === x); // false

//
//video 100 : The this Keyword
/* 
  this keyword/variable : special variable that is created for every execution context (every function).
  Takes the value of (points to) the "owner" of the function in which the this keyword is used.
  The this keyword is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.
  It is not assigned when the function is created, and it can be different each time the function is called.

  METHTOD: this = object that is calling the method.
  Simple Function call : this = undefined (in strict mode) , this = window (in non-strict mode)
  Arrow function : this = this of surrounding (parent) function (lexical this)
  Event Listener : this = DOM element that the handler is attached to.
  new,call,apply,bind : this = explicitly defined.
  
  */

//video 101 : The this Keyword in Practice
// console.log(this)

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1997);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1997);

// const shahid ={
//     year: 1997,
//     clcAge: function(){
//         console.log(this)
//         console.log( 2025 - this.year)
//     }
// }
// shahid.clcAge();

// const matilda ={
//     year: 2017,
// }

// matilda.clcAge = shahid.clcAge;
// matilda.clcAge();
// // console.log(matilda)

// const f = shahid.clcAge;
// f()

//video 102 : Regular Functions vs Arrow Functions

// const firstName = 'Matilda'; // global scope m firstName hai but const hai is liye global object m nhi jata.
// var firstName = 'Matilda'; // global scope m firstName hai but var hai is liye global object m jata hai.
// const shahid = {

//      firstName: 'shahid',
//      year: 1997,
//         clcAge: function(){
//             console.log(this)
//             console.log(2025 - this.year)
//         },

//         greetArrowFunc: () => {
//             console.log(`Hello, my name is ${this.firstName}`); // Arrow function depend on parent scope, this.firstName is undefined because arrow function does not have its own 'this', it uses 'this' from surrounding context, which is the global scope here.
//             // is k bahit koi scop nhi hai . ye templet literal k ander hai . or global scope m firstName nhi hai is liye undefined hai.
//         }

// }

// shahid.clcAge();
// shahid.greetArrowFunc();

// const shahidkhan = {
//   firstName: "shahid",
//   year: 1997,
//   calcAge: function () {
//     // console.log(this)
//     // console.log(2025 - this.year)

//     // const isMillenial = function()  {  // this is undefined because it is a regular function call.
//     //     console.log(this.year >= 1981 && this.year <= 1996);
//     // }
//     // isMillenial();

//     // Solution 1
//     const self = this;
//     const ismillenial = function () {
//       //
//       console.log(self.year >= 1981 && self.year <= 1997);
//       console.log(self);
//     };
//     ismillenial();

//     // Solution 2
//     const isMillenial = () => {
//       // this is shahidkhan because it is a arrow function and it uses 'this' from surrounding context, which is the calcAge function here.
//       console.log(this.year >= 1981 && this.year <= 1999);
//       console.log(this);
//     };
//     isMillenial();
//   },
// };

// shahidkhan.calcAge();


// const addExpr = function (a,b){
//     console.log(arguments)
//     return a + 6;
// }
// addExpr(2,5,8,12);

// const addArrow = (a,b) => {
//     console.log(arguments)
//     return a + b;
// }
// addArrow(2,5);

//video 103 : Memory Managment: Primitives vs Objects (Primitives vs Reference Types)
/* 
//============ Primitives ============
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt


Primitives are immutable (cannot be changed) and are stored in the stack.

========= Objects ==============
- Object literals
- Arrays
- Functions
- Dates
- Objects
many more...

Objects are mutable (can be changed) and are stored in the heap.
*/

//video 104 : OBJECT References In Practice (Shallow vs Deep Copy)

// const jessica11 ={
//   firstName :'jessica',
//   lastName: "williams",
//   age: 27,
// }

// const marriedJessica11 = jessica11;
// marriedJessica11.lastName = 'Davis';
// console.log('Before :', jessica11);
// console.log('After :', marriedJessica11);

//  jessica = {x : 1}; // Error: Assignment to constant variable.
//  console.log('Before :', jessica);
////////////////////////////
// const jessica ={
//   firstName :'jessica',
//   lastName: "williams",
//   age: 27,
// };

// function marryPerson(OriginalPerson, newLastName){
//   OriginalPerson.lastName = newLastName;
//   return OriginalPerson;
// }
// const marriedJessica = marryPerson(jessica, "Davis");
// console.log('Before :', jessica); 
// console.log('After :', marriedJessica);
/////////////////////////


const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
 const jessicaCopy = { ...jessica2 }; // shallow copy
 jessicaCopy.lastName = "Davis";
  jessicaCopy.family.push("Mary");
  jessicaCopy.family.push("John");
  console.log('Before :', jessica2); 
  console.log('After :', jessicaCopy);
  //////////////////////////

   const jessica3 = structuredClone(jessica2); // deep copy
  jessica3.lastName = "bobo";
   jessica3.family.push("yaya");
   jessica3.family.push("momo");
   console.log('Before deepclone :', jessica2);
   console.log('After deepclone :', jessica3);


//video 105 : Memory Management: Garbage Collection

/* 
Gargage Collection: (central memory management tool)
  Garbage collection is the process of automatically freeing up memory that is no longer being used by the program.
  JavaScript has a built-in garbage collector that runs in the background and periodically checks for objects that
   are no longer reachable from the root (global) object.
  When an object is no longer reachable, it is considered "garbage" and can be collected by the garbage collector.
  The garbage collector uses a technique called "mark-and-sweep" to identify and collect garbage objects.
  In the mark phase, the garbage collector starts from the root object and marks all reachable objects.
  In the sweep phase, the garbage collector goes through the heap and collects all unmarked objects, freeing up their memory.
 */
//video 106 : Section Conclusion






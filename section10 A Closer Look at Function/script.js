'use strict';

////////// video# 133: Section intro,
////////// video# 134: Section ,
////////// video# 135: Default Parameters ,

// const bookings = [];
// // const createBooking = (flightNum, numPassenger= 1, price= 199)=>{ // this is ES6 better way to take a default value
// // const createBooking = (flightNum, numPassenger= 1, price= 199 * 1.2)=>{ 
// const createBooking = (flightNum, numPassenger= 1, price= 199 * numPassenger)=>{ //  the numPassenger perameter declare first 
//     /// this is ES5 way default value 
//     // numPassenger= numPassenger || 1;
//     // price = price || 200;

//     const booking = {
//         flightNum,
//         numPassenger,
//         price,
//     }
//     console.log(booking)
//     bookings.push(booking)
// };
// // console.log(bookings)

// createBooking('LH123');
// createBooking('LQ820', 3, 499);
// createBooking('RT828', 5);
// createBooking('LQ820', 2);
// createBooking('LQ820', undefined, 1000);


////////// video# 136: HOW PASSING ARGUMENTS WORKS : VALUES VS REFERENCE,

// const flight = 'Lh234';
// const shahid = {
//     name: 'shahidullah khan',
//     passport: 32098407424,
// }

// const checkIn= function(flightNum, passenger){
// flightNum = 'UO123';
// passenger.name = `Mr ` + passenger.name;
// if(passenger.passport === 32098407424){
//     alert('Check In');
// }else{
//     alert('wrong Passport');
// }
// }
// // checkIn(flight, shahid);
// // console.log(flight);
// // console.log(shahid)

// const newPassport = function(person){
// person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(shahid);
// checkIn(flight, shahid);

////////// video# 137: FIRST CLASS FUNCTION VS HIGH ORDER FUNCTION:
 // what is first class function?. Answer: the first class function is the function that can be pass
 //  as a argument to another function.
//  what is high order function?. Answer: the high order function is the function that can be pass
//   as a argument to another function.

////////// video# 138: FUNCTION ACCEPTING CALLBACK FUNCTION:

// abstraction in javascript: absraction is the process of hiding the details of implementation 
// and showing only the essential features of the function.


// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const oneUpperWord = function(str){
//     const [first, ...other]= str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// }

// const transformer =(str, fun)=> {
//     console.log('original string:', str)
//     console.log('transformer String', fun(str))
//     console.log('Function name Property', fun.name)
// }
// transformer('javaScript is the best ', oneUpperWord)
// transformer('javaScript is the best ', oneWord);

// const high5 = function (){
//     console.log('👏')
// }

// document.body.addEventListener('click', high5);

// ['shahid', 'jonas', 'ikram'].forEach(high5);

// ////////// video# 139: FUNCTION RETURNING FUNCTION: 
// // this is closer 
//   const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
//   }
//   const innerFunctionName = greet('Hi');
//   innerFunctionName('shahid ullah');
//   innerFunctionName('hi Ghulam');
//   // Or
//   greet('hy')('Ahmadullah');

// ///----------------  IN ARROW FUNCTION => 
//     const greetAgain  = greeting => name =>  console.log(`${greeting} ${name}`);
// greetAgain('Asslamoalikom')('Afnan')

////////////////////........... video# 140: THE CALL AND APPLY METHOD  .....
// LEARN : HOW CAN SET THIS KEYWORD MAINAULY AND WHY WE WANT TO DO THAT. 

// const lufthansa = {
//     airline : 'lafthansa',
//     iataCode: 'LH',
//     booking: [],

//     // booking Function 
//     book(flightName, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightName}`)
//         this.booking.push({flight: `${this.iataCode}${flightName}`, name})
//     }
// }

// // lufthansa.book(239, 'Shahidullah');
// // lufthansa.book(222, 'Rauf')
// // console.log(lufthansa.booking)

// // after sometime lufthansa make a new airline 
// const F17 ={
//     airline: 'F17 THUNDER',
//     iataCode: 'FT',
//     booking: [],
//     // lufthansa se book function kr ky yaha py laga skty hai but it is a bad practice.
// };

// const book = lufthansa.book;
// // book(F17) // => ye book lufthansa.book ka copy hai ye function nhi hai. tu hum isy regular function ki tara call nhi krskty. 
// // book.call(333, 'Shahidullah')
// book.call(F17,677 ,'kareem')
// // console.log(F17.booking)
// console.log(F17);
// book.call(lufthansa, 889, 'Yaqoob');
// book.call(F17 ,968 ,'jamal')

// const swiss = {
//     airline : 'YAMAHA',
//     iataCode: 'YM',
//     booking: [],
// }
// // WHAT IS CALL METHOD? CALL METHOD IS USED TO SET THIS KEYWORD MANUALLY. MAINAULY MEANS K HUM KISI BHI OBJECT KO THIS KEYWORD KO SET KR SKTY HAI .
// // MANUALLY MEIN KISI BHI OBJECT KO THIS KEYWORD KO SET KR SKTY HAI.
// // 
// book.call(swiss, 322, 'Tahir'); // call method is used to set this keyword manually.
// book.apply(swiss, [322, 'Tahir']); // apply method is same as call method but it take argument as array.
// // or 
// const flightData = [322, 'Tahir'];
// book.apply(swiss, flightData); // apply method  me argunment ko array me pass krty hai.
// book.call(swiss, ...flightData); // call method me argunment ko spread operator se pass krty hai.
/// 

////////////////////........... video# 141: THE BIND METHOD  .....

// const lufthansa2 = {
//     airline : 'lafthansa',
//     iataCode: 'LH',
//     booking: [],

//     // booking Function 
//     book(flightName, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightName}`)
//         this.booking.push({flight: `${this.iataCode}${flightName}`, name})
//     }
// }

// const swiss2 = {
//     airline : 'PIA',
//     iataCode: 'ST',
//     booking: [],
// }

// const bookLH = lufthansa2.book;
// const bookYM = bookLH.bind(swiss2);
// bookYM(23, 'shahidullah');

// const bookAgain = lufthansa2.book;
// const BookPia = bookAgain.bind(swiss2);
// BookPia(11, 'Rahim');


// const flightData = [322, 'Tahir'];
// bookAgain.apply(swiss2, flightData); // apply method  me argunment ko array me pass krty hai.
// bookAgain.call(swiss2, ...flightData); // call method me argunment ko spread operator se pass krty hai.




// const AdilBus = {
//     car : 'ADIL_01',
//     carNo: 'ISL', 
//     bookings: [],
//     book(carNum, userName){
//         console.log(`${userName} you are booked ${this.car} bus ticket  your seat number ${this.carNo}- ${carNum}`);
//         this.bookings.push({Car :`${this.car}`,CARNumber: `${this.carNo}${carNum}`, booked: userName})
//     }
// } 
// //  AdilBus.book(222, 'Rahimullah')

// //  console.log(AdilBus)
//  const shaheen = {
//     car: 'SHAHEEN',
//     carNo: 'ST',
//     bookings: []
//  }

//  const newBus = AdilBus.book;
// //  newBus(222, 'Rahim')
//  newBus.call(shaheen, 2, 'Rahim');// call method
//  const newUser = [3, 'Irshad'];
//   newBus.apply(shaheen, newUser);
//   newBus.call(shaheen, ...newUser);
// const bindMethod = newBus.bind(shaheen);
// bindMethod(55,'Barkat')
// // OR
// const bookEW23 = newBus.bind(shaheen, 25);
// bookEW23('Ali');
//  console.log(shaheen);

//  ////----------WITH EVENT LISTENER-----------
//  AdilBus.bus= 300; // adil object k andar bu
// AdilBus.buyBus = function () {// adil object k andar buyBus function ko add kr diya. pir 
//     // eventListener me  this key word wahi element ko targit krta hai.
//     // jis se wo attach huta hai.. yani jis button se call huta hai.
// console.log(this);
// this.bus++;
// console.log(this.bus)
//  };
// //    const buyBus= AdilBus.buyBus;
// //  document.querySelector('.buy').addEventListener('click',  buyBus.bind(AdilBus));// explain this line word by word:
// // OR  
//  document.querySelector('.buy').addEventListener('click',  AdilBus.buyBus.bind(AdilBus));// explain this line word by word:
 //   in this line we are attaching the event listener to the button.
 //  and we are using the bind method to set the this keyword to the AdilBus object. and we are calling the buyBus function.
//  console.log(AdilBus);

 ////--------------PARTIAL APPLICATION : 
 // PARTIAL APPLICATION IS THE PROCESS OF CREATING A NEW FUNCTION FROM ANOTHER FUNCTION BY BINDING SOME OF THE ARGUMENTS. IN URDU WE CAN SAY K KISI FUNCTION KO KISI BHI OBJECT KO BIND KR K NAYA FUNCTION BANAYA JATA HAI.

// const addTax = (rate, value)=> value + value * rate;
// console.log(addTax(2, 10));

// // const addVAT = addTax.bind(null, 5);
// const addVAT = addTax.bind(null,5);
// // addVAT = value => value + value * 5;

// console.log(addVAT(3))
// console.log(addVAT(4))

// const addTaxRate = function (rate) {
//     return function(value){
//         return value + value * rate;
//     }
// }

// const callRate = addTaxRate(4);
// console.log(callRate(3))

////////////////////........... video# 142: CHALANGE# 1  .....
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
 Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    option : ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // this operators [0,0,0,0]. More in the next 
    answer: new Array(4).fill(0),

    registerNewAnswer(){
        console.log(this)
        console.log(this.option)
        const answer = Number(prompt(`${this.question}\n${this.option.join('\n')}\n
        (Write option number)`));
        console.log(answer)

        typeof answer === 'number' && answer < this.answer.length && this.answer[answer]++; // short circuting 
        typeof answer === 'number' && answer < this.answer.length ? console.log(this.option[answer]): console.log('choose correct number')
        // console.log(this.answer)
        this.displayResults();
        this.displayResults('string')
    },

    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answer);
        } else if(type === 'string'){
            console.log(`poll result are ${this.answer.join(',')}`);
        };
    }

}
// poll.registerNewAnswer()
// document.querySelector('.answer').addEventListener('click', poll.registerNewAnswer())
// document.querySelector('.answer').addEventListener('click', poll.registerNewAnswer) // this is target button element 
// OR 

document.querySelector('.answer').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answer: [5, 2, 3]})
// poll.displayResults.call({answer: [5, 2, 3]},'string')
// poll.displayResults.call({answer: [1, 5, 3, 9, 6, 1]})
// poll.displayResults.call({answer: [1, 5, 3, 9, 6, 1]},'string')
/// my practice-----------///
// // poll.displayResults.call('array')
// // poll.displayResults.call('string')
// // const newArr = {
// //      question: 'What is your favourite game?',
// //       option : ['0: cricket', '1: football', '2: waliball', '3: badminton'],
// //       answer: [5, 2, 3]
// // };
// // const addNewArray = poll.registerNewAnswer;
// // addNewArray.call(newArr)
////---------------=-


////////////////////........... video# 143: immediatly invoked Function Expresion (IIFE)  .....
// SOMETIME IN JS WE NEED A FUNCTIN THAT IS ONLY EXCUTE ONCE AND THEN NEVER AGAIN... 

// const runOnce = function(){
//     console.log('this will never run again');
// }
// runOnce();

// IIFE
// (function(){
//     console.log('this will never run again');
//     const isPrivate = 23;
// })();
// // Arrow
// (()=> console.log('this Arrow function will never run again'))();

// {
//     const isPrivate = 23;
//     var  notPrivate = 24;
// }
// // console.log(isPrivate)
// console.log(notPrivate)

////////////////////...........   video# 144: closures  .....


// const secureBooking = function(){
//     let passengerCount = 0;
//     return function (){
//         passengerCount++;
//         console.log(`${passengerCount} passenger.`)
//     }
// }
// const booker = secureBooking()
// booker();
// booker();
// booker();

// console.dir(booker)
// function createUser(name) {
//   return {
//     getName: () => name,
//     setName: (newName) => name = newName
//   };
// }

// const user = createUser("Fahad");
// console.log(user.getName()); // Fahad
// user.setName("Ali");
// console.log(user.getName()); // Ali

////////////////////...........   video# 145: MORE CLOSURES EXAMPLES   .....

// let f;
 
// let g = function (){
//    const  a = 23;

//    f = function (){
//     console.log(a * 2);
// }
// console.log('out f function ')
// }
// g();
// f();

// const h = function (){
//     const b = 777;
//     f = function (){
//         console.log(b * 2)
//     }
// }
// g();
// f();
// console.dir(f);

// // Re-assigning f function:
// h();
// f();
// console.dir(f);

// example 2
const boardPassengers = function (n , wait){
    const perGroup = n / 3;

    setTimeout(()=>{

        console.log(`'we are now boarding all ${n} passengers'`)
        console.log(`there are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000)

    console.log(`will start boarding in ${wait} second`)
}

boardPassengers(180, 5)

const age = calcage(1997);
let newAge = age;
console.log(newAge++)

function calcage(birth){
    const now = 2025 ;
    const x = now -birth;
    return x;

}

////////////////////...........   video# 146: CHALANGE  .....
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function(){
const heading = document.querySelector('.heading');
 heading.style.color = 'red';
 document.querySelector('body').addEventListener('click',function(){
    heading.style.color = 'yellow';
 });
})();

// const vlance = movement.reduce((acc, cure) => acc + cure, 0)
// console.log(vlance)

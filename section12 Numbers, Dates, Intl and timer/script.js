'use strict'
const account11 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account22 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts33 = [account11, account22];


/////////////////////////--- VIDEO # 179: Section Intro
/////////////////////////--- VIDEO # 180: Section Roadmap
/////////////////////////--- VIDEO # 181: Converting and checking Numbers
// numbers always store in binary format / 0, 1
// console.log(23 === 23.0) // true

// // Base 10 - 0  to 9  1/10 = 0.1    3/10 = 3.3333333
// // Base 2 - 0  1
// //--------NUMBER
// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 === 0.3)

// // convert to Number
// console.log(Number('20'))
// //OR
// console.log(+'20') // simple plus likny se string number me convert hojata hai. Coersion . 
// console.log(+'20px')  

// //--------PERSING
// // ------parseInt => pick a integer part
// console.log(Number.parseInt('30px'))// 30
// console.log(Number.parseInt('e30'))// NaN => not a number
// // parse take a 2nd argument his called redix
// console.log(Number.parseInt('30px', 10))// 30
// console.log(Number.parseInt('30px', 2))// Nan 
// console.log(Number.parseInt('e30', 10))// NaN => not a number

// // -----parseFloat => pick a decimal part
// console.log(Number.parseInt('2.5rem'))
// console.log(Number.parseFloat('5rem'))
// console.log(Number.parseFloat('2.5rem'))

// // check number is NaN or NaN
// console.log(Number.isNaN(40))
// console.log(Number.isNaN("40"))
// console.log(Number.isNaN(+"40px"))
// console.log(Number.isNaN(23 / 0 )) // this is infinity Not a NaN


// //// Checking if value in number
// //-----------Finite
// console.log(Number.isFinite(40))
// console.log(Number.isFinite("40"))
// console.log(Number.isFinite(+'40X'))
// console.log(Number.isFinite(23 / 0 )) 

// console.log(Number.isInteger(40))
// console.log(Number.isInteger(40.0))
// console.log(Number.isInteger("40"))
// console.log(Number.isInteger(+'40X'))
// console.log(Number.isInteger(23 / 0 )) 

/////////////////////////--- VIDEO # 182: Math and Rounding

///------------------Mathmetical Operation and Rounding Number
// Easy way to remember:
// round → nearest
// floor → down
// ceil → up


// | Math.round() | Rounds to nearest integer 
// | Math.round(4.6) | 5 | 
// | Math.round(4.3) | 4 |
Math.round(4.4); // → 4
Math.round(4.5); // → 5
Math.round(4.9); // → 5

// | Math.floor() | Always rounds down (toward smaller number) 
// | Math.floor(4.9) | 4 | 
// | Math.floor(-4.2) | -5 |
Math.floor(4.9);  // → 4
Math.floor(4.1);  // → 4
Math.floor(-4.1); // → -5 (⚠️ goes to smaller integer)

// | Math.ceil() | Always rounds up (toward larger number)
// | Math.ceil(4.1) | 5 | = | | Math.ceil(-4.8) | -4 |
Math.ceil(4.1);  // → 5
Math.ceil(4.9);  // → 5
Math.ceil(-4.9); // → -4 (⚠️ goes to higher integer)

// console.log(Math.sqrt(25))
// console.log(25 ** (1/2)) // sqrt
// console.log(25 ** (1/3)) //Cube

// console.log(Math.max(5, 10, 23, 11, 2))
// console.log(Math.max(5, 10, '23', 11, 2))
// console.log(Math.max(5, 10, '23px', 11, 2))

// console.log(Math.min(5, 10, 23, 11, 2))
 
// console.log(Math.PI * Number.parseFloat('10px') ** 2)

// console.log(Math.trunc(Math.random() * 6) + 1 );

// const randomInt = (min, max) => Math.floor(Math.random() * 2) ;

//_------------------------ Genenrate random Value 
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min  + 1)) ; // not start to 10 value 
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min  + 1)) + min ;


// // randomInt(10, 20); // in this  11 number : because start value and end value also include
// // randomInt(0, 3); // in this 4 number: : because start value and end value also include
 
// console.log(randomInt(10, 20))
// console.log(randomInt(0, 3))

// //-------------Rounding Integer
// console.log(Math.trunc(15.3)); // remove decimal Point: 
// | Math.round() | Rounds to nearest integer | Math.round(4.6) | 5 | = | Math.round(4.3) | 4 |
// console.log('Math.round', Math.round(15.3)); 
// console.log('Math.round', Math.round(15.5)); 
// console.log('Math.round', Math.round(15.9)); 
// console.log('Math.round minus', Math.round(-15.3)); 
// console.log('Math.round minus', Math.round(-15.9)); 

// console.log('-------------------'); 
//| Math.ceil() | Always rounds up (toward larger number) | Math.ceil(4.1) | 5 | = | | Math.ceil(-4.8) | -4 |
// console.log('Math.Ceil', Math.ceil(15.3));
// console.log('Math.Ceil', Math.ceil(15.9));
// console.log('Math.Ceil', Math.ceil(15.9));
// console.log('Math.Ceil minus', Math.ceil(-15.3));
// console.log('Math.Ceil minus', Math.ceil(-15.9));



// console.log('-------------------'); 
// | Math.floor() | Always rounds down (toward smaller number) | Math.floor(4.9) | 4 |  =  | | Math.floor(-4.2) | -5 |
// console.log('Math.floor', Math.floor(15.3));
// console.log('Math.floor', Math.floor(15.9));
// console.log('Math.floor minus', Math.floor(-15.3));
// console.log('Math.floor minus', Math.floor(-15.9));
// console.log('-------------------'); 

// console.log('Math.Ceil', Math.ceil(15.3));
// console.log('Math.round', Math.round(15.9));

// console.log('Math.trunc', Math.trunc(15.3));
// console.log('Math.trunc minus', Math.trunc(-15.3));
// console.log('Math.floor', Math.floor(-15.3));

//-------------Rounding decimals

// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.745).toFixed(3));
// console.log((2.745567).toFixed(3));
// // convert to number (simple write a plus)
// console.log(+(2.745567).toFixed(3));

/////////////////////////--- VIDEO # 183: The Reminder Operator

// console.log(5 % 2)
// console.log(5 / 2) // 5 = 2 * 2 + 1 the one is reminder

// console.log(8 % 3)
// console.log(8 / 3) // 8 = 2 * 3 + 2 the two is reminder

// console.log(6 % 2)
// console.log(6 / 2)

// console.log(7 % 2)
// console.log(7 / 2)

// const isEven = n => n % 2 === 0;
// console.log(isEven(5))
// console.log(isEven(12))
// console.log(isEven(17))
// console.log(isEven(9))



// document.querySelector('.balance__value').addEventListener('click', function(){
// [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//   if(i % 2 === 0) row.style.backgroundColor = 'red';
//   if(i % 3 === 0) row.style.backgroundColor = 'skyblue';
// })
// })

//////////////////////////////////////////////////--- VIDEO # 184: Numeric Separator

// // const diameter = 287460000000; defficult in read
// const diameter = 287_460_000_000; // easy to read // underscore not read the engin in number
// console.log(diameter)

// const price = 345_99; // 345.99
// console.log(price)

// const transferFee = 15_00; // 15.00
// console.log(transferFee)

// // const PI = 3._1415; // not work => because not start or end with underscore
// const PI = 3.14_15;
// console.log(PI)

// console.log(Number('230000'))
// console.log(Number('230_000')) // not work// not use in integer string
// console.log(parseInt('230_000')) // only 230 the integer part

///////////////////////////////////////////////////////--- VIDEO # 185: Work with BigInt


// console.log(2 ** 53 - 1) //=> 9007199254740991 this is max number in js// any number if greater than this number is not safe number
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 1) // => 9007199254740992 this is not safe number in js
// console.log(2 ** 53 + 2) // => 9007199254740992 this is not safe number in js
// console.log(2 ** 53 + 3) // => 9007199254740992 this is not safe number in js
// console.log(2 ** 53 + 4) // => 9007199254740992 this is not safe number in js

// //-----------------if want the number is greater than this (9007199254740991) number then use BigInt
// // console.log(234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890n)

// console.log(48384302483420433823409349839483204n) /// n for BigInt
// console.log(BigInt(48384302483420433823409349839483204)) //this output not exact same,  Bigint used for small number
// console.log(BigInt(483843024)) // like this

// console.log(10000n + 10000n)
// console.log(483843024834204338234093n + 10000n)
// // console.log(Math.sqrt(16n))// doesnot Work sqrt for regular integer

// const huge = 483843024834204338234093n;
// const num = 23;
// // console.log(huge * num) // not work => because one is bigint and another is number
// console.log(huge * BigInt(num)) // not work => because one is bigint and another is number

// console.log(20n > 15) // true
// console.log(typeof 20n)
// console.log(20n === 20) // false => because one is bigint and another is number
// console.log(20n == 20) //true:  lose equality 
// console.log(20n == '20') //true:  lose equality 
// console.log(huge + ' is REAly Big') //true:  lose equality 

// console.log(10n / 3n)
// console.log(10 / 3)



///////////////////////////////////////////////////////--- VIDEO # 186: Creating Dates


//------------------------ Four(4) ways to create a Date in javaScript

// 1: new Date()4
// const now = new Date()
// console.log(now)

// const dateString = new Date('Tue Nov 04 2025 17:01:14');
// console.log(dateString);

// // const dateString22 = new Date('Dec 04 2025');
// const dateString22 = new Date('December 04 2025');
// console.log(dateString22);

// console.log(new Date(account11.movementsDates[0]))

// console.log('new Date(year, month, day, hour, minut, second)')
// console.log(new Date(2037, 10, 23, 15, 23, 5)) // month 10 show november => because month start from 0 
// console.log(new Date(2037, 10, 33)) // javaScript is smart november is 30 days but here write 33 then javaScript automaticaly jumped to next month or year; Now here show "Dec 03 2037"

// console.log(new Date(0)) // zero miliSecond show the initial time (Thu Jan 01 1970 05:00:00 GMT+0500 (Pakistan Standard Time))
// console.log(new Date(3 * 24 * 60 * 60 * 1000)) // 3 days convert to mili second (Sun Jan 04 1970 05:00:00 GMT+0500 (Pakistan Standard Time))
// console.log("'new Date('dayNumber * hoursInday * hour * minut * milisecond')'")

//         working with dates

// const future = new Date(259200000)
// const future = new Date(2037, 10, 23, 15, 23, 5)
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getTime())

// console.log(new Date(2142584585000))
// console.log(Date.now());

// future.setFullYear(2040);
// future.setMonth(1);
// future.setDate(19);
// future.setHours(10);
// future.setMinutes(45);
// future.setSeconds(20);
// console.log(future)


///////////////////////////////////////////////////////--- VIDEO # 187: Adding Dates to Bankist App
///////////////////////////////////////////////////////--- VIDEO # 188: Fixing a Sorting Bug Bankist App
///////////////////////////////////////////////////////--- VIDEO # 189: Operations with Dates
// when time convert to number then it show the time stamp in  miliSecond. then this miliSecond convert to number then we can do operation and calculation

const future = new Date(2037, 10, 23, 15, 23, 5)
// console.log(+future);

// const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24); 
const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1)


///////////////////////////////////////////////////////--- VIDEO # 190: Internationalizing Dates (Intl) (API)
// javascript has built in internationalization API

// display number and currency in different format in different country________________________________________________________________

  // const now = new Date();
  // const options = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   second: 'numeric',
  //   day: 'numeric',
  //   year: 'numeric',//OR another Option of the year
  //   year: '2-digit',
  //   // month: 'numeric',// OR
  //   month: 'long', // OR
  //   // month: '2-digit', 
  //   weekday: 'long',
  //   // weekday: ''
  // }
  // const local = navigator.language; // browser Language 
  // // console.log(local)
  // const element= new Intl.DateTimeFormat(local, options).format(now); // month/day/year => US

  // search in google mdn Intl 
  // OR
  // labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now); // month/day/year => US
  // labelDate.textContent = new Intl.DateTimeFormat('en-UK', options).format(now);  // day/month/year  => UK
  // labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now);  // day/month/year  => Seriya 
  // labelDate.textContent = new Intl.DateTimeFormat('ur-PK').format(now);  // day/month/year  => pakistan 
  // iso language code table => search in google


///////////////////////////////////////////////////////--- VIDEO # 191: Internationalizing Numbers (Intl) (API)

const num = 3884764.23

const options = {
  // style: 'unit',
  // unit: 'mile-per-hour'
  //  style: 'percent',
  // unit: 'celsius'
  style: 'currency',
  // currency: 'EUR',
  // currency: 'PKR',
  currency: 'USD',
  // useGrouping: false
}

const internationlizationNumbr = new Intl.NumberFormat('en-US', options).format(num);
const internationlizationNumbr0 = new Intl.NumberFormat('en-UK', options).format(num);
const internationlizationNumbr1 = new Intl.NumberFormat('de-DE', options).format(num);
const internationlizationNumbr2 = new Intl.NumberFormat('ar-SY', options).format(num);
const internationlizationNumbr3 = new Intl.NumberFormat('ur-PK', options).format(num);
const browser = new Intl.NumberFormat(navigator.language, options).format(num);
console.log('US:  ' , internationlizationNumbr);
console.log('UK: ' , internationlizationNumbr0);
console.log('GERMANY: ' , internationlizationNumbr1);
console.log('SYRIA: ' , internationlizationNumbr2);
console.log('PAK: ' , internationlizationNumbr3);
console.log('Browser Chrome: ' , browser);


///////////////////////////////////////////////////////--- VIDEO # 192: TIMERS : SetTimeOut AND SetInterval
//// two Kinds of Timers
//// 1) SetTimeOut : Run's just one's after a define Time ;
//// 2) SetInterval : interval keeps running bassically forever and till we stop it.


const ingradients = ['olive', 'spinach'];
// const ingradients = ['olive', 'souse'];
const pizzaTimer = setTimeout((ing1, ing2) => {
  console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`);
// }, 3000, 'olive', 'spinach');
}, 3000, ...ingradients);

if(ingradients.includes('spinach')) clearTimeout(pizzaTimer)// agr spinach hai array me tu setTimeOut ko clear krta hai.

// setInterval(()=>{
//   const now = new Date();
//   console.log(now)
// }, 1000)

///////////////////////////////////////////////////////--- VIDEO # 193: Implementing a countdown timer (bankist App)




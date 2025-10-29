'strict mode';


// const person = {
//     name: 'shahid',
//     age: 22,
//     job: 'developer'
// }

// // const { name, age, job } = person;
// // console.log(name, age, job);

// const FastCopy = person;
// FastCopy.name = 'Rizwan';
// // console.log(person);
// // console.log(FastCopy);

// const  copyPerson = { ...person };
// copyPerson.name = 'ali';
// // console.log(person);
// // console.log(copyPerson);


// const Player = {
//     name: 'shahid',
//     age: 22,
//     job: 'developer',
//     address: {
//         city: 'karachi',
//         country: 'pakistan'
//     }
// }

// //// shallow clone---------------
// const copyPlayer1 = { ...Player };
// copyPlayer1.name = 'wahab';
// copyPlayer1.address.city = 'lahore';
// console.log("Player",Player);
// console.log("copyPlayer1", copyPlayer1);

// /// deep clone -----------------------
// const copyPlayer = structuredClone(Player);
// copyPlayer.name = 'waqas';
// copyPlayer.address.city = 'islamabad';
// // console.log("Player",Player);
// // console.log("copyPlayer",copyPlayer);

// const copyAgain = JSON.parse(JSON.stringify(Player));
// // const copyAgainJson = JSON.stringify(Player);
// // console.log(copyAgainJson)

// copyAgain.name = 'hamza';
// copyAgain.address.city = 'peshawar';
// copyAgain.address.country = 'afghanistan';
// copyAgain.address.house = 'house no 123';
// console.log("Player",Player);
// console.log("copyAgain",copyAgain);

// copyAgain.name = 'hamza';
// copyAgain.address.city = 'peshawar';
// copyAgain.address.country = 'afghanistan';
// copyAgain.address.house = 'house no 123';
// console.log("Player",Player);
// console.log("copyAgain",copyAgain);
//  const greet = function (){
//     console.log(`i am ${name}. `)
//  }
//  greet();

// console.log(`i am ${name}. `)

// var name = 'shahid';


///// Video 106 (Section Intro)
///// Video 107 (Section Roadmap)
///// Video 108 (Destructuring Arrays)
//  const arr = [ 1,2,3];
//  const a = arr[0];
//  const b = arr[1];
//  const c = arr[2];
// console.log(a, b ,c)
// const [x,y,z] = arr;
// console.log(x,y,z);
// const [i, ,k] = arr;   
// console.log(i,k);

// const restaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },
// };

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);   // italian vegetarian
///// Switching variable-------
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

//  [main, secondary] = [secondary, main] ;
// console.log(main, secondary)

// // console.log(restaurant.order(2, 0));
// const[stater, mainCourse]= restaurant.order(2, 0);
// console.log(stater, mainCourse);
// /////// NESTED ARRAY--------
// const nested = [1, 2, [3, 4]];
// const [i, ,j] = nested;
// console.log(i,j);
// const [k, ,[l, m]]= nested;
// console.log(k, l, m);
// //// DEFAULT VALUE
// const [ a, b, c, d] = [3,4,5,6];
// console.log(a,b,c,d)
// const [ p, q, r, s] = [8,4,3];// fourth kliye value nhi isliye undefined hai
// console.log(p,q,r,s);

// const [e, h=2, f=3, g=8]= [2,5]
// console.log(e ,h , f, g);

/// Video 109: Practice Assiments
// Assignments for The Complete JavaScript Course by Jonas Schmedtmann logo
// Assignments for The Complete JavaScript Course by Jonas Schmedtmann
 
// On this page
// Data Structures, Modern Operators and Strings
// Introduction
// Welcome to The Complete JavaScript Course assignments!
// JavaScript Fundamentals — Part 1
// JavaScript Fundamentals — Part 2
// Data Structures, Modern Operators and Strings
// Destructuring Arrays
// Destructuring Objects
// The Spread Operator
// Rest Pattern and Parameters
// Short Circuiting (&& and ||)
// The Nullish Coalescing Operator (??)
// Logical Assignments Operators
// Looping Arrays: The for-of Loop
// Enhanced Object Literals
// Optional Chaining (?.)
// Looping Objects: Object Keys, Values and Entries
// Sets
// Maps: Fundamentals
// Maps: Iteration
// Working with Strings - Part 1
// Working with Strings - Part 2
// Working with Strings - Part 3
// Data Structures, Modern Operators and Strings﻿
// Introduction﻿
// 👋 Hey! Did you like the assignments for the previous sections? We have some more for you; this time it's all about books 📕📗📘

// Below you can find data used in the assignments;

// It's an array of books related to computer science, math and business;

// Each book is represented by an object;

// Missing properties, different data types for same properties or duplicates are intentional;

// Copy this data to your code editor, and give yourself some time to familiarize with it before you start working on assignments.

// Make sure to comment out the code from previous assignments if you continue in the same file.

// Good luck and have fun!

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];
// The while Loop
// Destructuring Arrays
// JavaScript
// React
// HTML/CSS
// Node.js
// Advanced CSS/SASS
// WebDev crash course
// Copyright © Jonas Schmedtmann. All rights reserved

///// Video 110: Destructuring Objects

// const restaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     openingHours : {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     },
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

//     // orderDelivery: function ({starterIndex, mainIndex, time, address}){
//     orderDelivery: function ({starterIndex =1 , mainIndex =0, time = '09:00', address}){ // DEFAULT VALUE
//         console.log(`order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     },
// };

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'wazir abad Rawalpindi',
//     mainIndex: 2,
//     starterIndex:1,
// });

// restaurant.orderDelivery({
//     address: 'wazir abad Rawalpindi',
// });

// // const {name, openingHours, categories} = restaurant;
// // console.log(name, openingHours, categories);

// //// as name desakty hai , means k dosra name be deskty hai
// // const {
// //     name: restaurantName,
// //     openingHours: hours,
// //     categories : categ,
// // }= restaurant;
// // console.log(restaurantName, hours, categ);
//  //// DEFAULT VALUE: as a default value be deskty hai
// const {menu = [], starterMenu: stater = []} = restaurant; // menu object me nhi hai khud se dala , aur value bi deskty hai Array me, but abi array empty hai.
// console.log(menu, stater)

// // Mutating Variables // mutatting means change
// let a = 112;
// let b= 233;
// const obj = {a: 19, b: 20};
// // {a,b} = obj; // show error
// ({a,b} = obj);
// console.log(a,b);

// ////NESTED OBJECT
// const {name, openingHours, categories} = restaurant;
// console.log(openingHours)
// const {fri: {open, close}} = openingHours; /// nested object
// console.log(open, close);
// const {thu: {open: o, close: c}} = openingHours;/// name bi deskty apni trf se
// console.log(o ,c);

// // restaurant.orderDelivery({
// //     time: '22:30',
// //     address: 'wazir abad Rawalpindi',
// //     mainIndex: 2,
// //     starterIndex:2,
// // });

///////////////////////// Video 111, THE SPREAD OPERATOR(...)
// const arr = [7, 8, 9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)
// const newArr = [1,2, ...arr]
// console.log(newArr);
// console.log(...newArr);


// const restaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     openingHours : {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     },
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

//     orderPasta(ing1, ing2, ing3){
//         console.log(`Here is your delicious pasta ${ing1} ${ing2} and ${ing3}`)
//     }
// };

// const ingrediants = [prompt('let\'s make pasta! ingrediants 111?'),
//     prompt('let\'s make pasta! ingrediants 222?'),
//     prompt('let\'s make pasta! ingrediants 333?'),
// ];
// console.log(ingrediants)
// restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
// restaurant.orderPasta(...ingrediants);



// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);  ///   ['pizza', 'pasta', 'risotto', 'Gnocci']

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu]; /// shallow copy
// console.log(mainMenuCopy)

// // join Array
// const menuArrayJoin = [...newMenu, ...mainMenuCopy]
// console.log(menuArrayJoin)

// //////  ITERABLES : ARRAY, STRING, MAPS, SETS, NOT OBJECT

// const str = 'shahid';
// const letter = [...str, '', 'S.']
// console.log(letter)
// console.log(...str)
// console.log('s', 'h', 'a', 'h', 'i', 'd');
// console.log(` this ${...str}`) //// show error

// const newResturant = {foundedIn: 1997, ...restaurant, founder: 'shahid'}; // new object me pura restaurant object be copy kr dia
// console.log(newResturant)
// const restaurantCopy = {...restaurant};/// shallow copy
// restaurantCopy.name = 'Rizwan';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

///////////////////// Video 112: Rest Pattern and Parameters

// const restaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     openingHours : {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     },
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

//     orderPasta(ing1, ing2, ing3){
//         console.log(`Here is your delicious pasta ${ing1} ${ing2} and ${ing3}`)
//     },
//     orderPixxa: function (mainIngredient, ...otherIngre){
//         console.log(`Here is your delicious pizza with ${mainIngredient} and ${otherIngre}`)
//     }
// }; 

// // 1) DESTRUCTURING

// // SPREAD, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on left side of =
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(others)

// const [pizza, , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto);
// console.log(pizza, risotto,otherfood);

// // const {sat, ...day } = {...restaurant.openingHours};
// const {sat, ...days } = restaurant.openingHours;
// console.log(sat, days);
// console.log(days);

// // 2) FUNCTIONS

// const add = function (...numbers){   /// REST OPERATOR : COLLECT INTO AN ARRAY
//   //  console.log(numbers);
//    let sum = 0
//    for (let i = 0; i < numbers.length; i++)
//     sum = sum + numbers[i]
//   console.log(sum)
// };

// add(2, 3)
// add(2, 3, 5)
// add(2, 3, 5, 6, 7)
// const x = [2, 5, 7];
// add(...x)  // SPREAD OPERATORS: EXPAND ARRAY INTO INDIVIDUAL VALUES

// restaurant.orderPixxa('mashroom', 'onion', 'olives', 'spinach');
// restaurant.orderPixxa('mashroom');

////// video 113: short circuiting (&& and ||)

//  console.log('-------OR-------');
//  console.log(3 || 'shahid')
//  console.log('' || 'shahid');
//  console.log(true || 0);
//  console.log(undefined || null);
//  console.log(undefined || 0 || '' || 'shahid' || 23 || null);

//  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//  console.log(guests1);
 
//  restaurant.numGuests = 23;
//  const guests2 = restaurant.numGuests || 10;
//  console.log(guests2);

//  console.log('-------AND-------');
 
//  console.log(0 && 'shahid');
//  console.log(7 && 'shahid');
//  console.log('hello' && 23 && null && 'shahid');
 
//  if(restaurant.orderPixxa){
//      restaurant.orderPixxa('mashroom', 'spinach');
//  }
//  restaurant.orderPixxa && restaurant.orderPixxa('mashroom', 'spinach');

/////////////// video 114: nullish coalescing operator (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or ''). Nullish 0 and '' be consider as truthy value
// const guestCorect= restaurant.numGuests ?? 10;
// console.log(guestCorect)

////////////// video 115: Logical Assignment Operators 
// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

//// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1)
// console.log(rest2)

///// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1)
// console.log(rest2)
///// AND assignment operator
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1)
// console.log(rest2)

//////////// video 116: Coding Challenge #1

/*
 We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players.
 For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
 and one array ('fieldPlayers') with all the remaining 10 field players  

3. Create an array 'allPlayers' containing all players of both teams (22 players) 

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') 

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints 
each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
 WITHOUT using an if/else statement or the ternary operator. 

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored 
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 7.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  // 1
//   const [players1, players2] = game.players;
//   // console.log(players1, players2);
//   // 2)
// const  [gk, ...fieldPlayers] = players1;
// console.log('gd',gk);
// console.log('fieldPlayers',fieldPlayers);
// const  [gk2, ...fieldPlayers2] = players2;
// console.log('gk2',gk2);
// console.log('fieldPlayers2',fieldPlayers2);  
// //// 3)
// const allPlayers= [...players1, ...players2];
// console.log('allPlayers',allPlayers);
// //// 4)
// const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic']
// console.log(players1Final);
///// 5) 
//  const {odds} = game;
//  console.log(odds)
// const {team1, x: draw, team2 } = odds;
// console.log(team1, draw, team2);
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

////// 6)
// const printGoals = function (...number) {
// // console.log('playerName', number, 'player Numbers', number.length)
//  for( let i =0 ; i < number.length ; i++)
//   console.log(`'the goals playerName', ${number[i]}, `)
// };
// // printGoals('shahid', 'sajjad', 'asif');
// const printScore = game.scored;
// printGoals('printe',...printScore)

////// 7)
// const {team1, x: draw, team2 } = game.odds;
// // console.log(team1< team2);
// team1 < team2 && console.log('team1 is more likely to win');
// team2 < team1 && console.log('team2 is more likely to win');


//////////// /////video 117: LOOPING ARRAYS: THE FOR OF LOOP

// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu]
// // console.log(menu)

// // for(const item of menu) {
// //   console.log(item)
// // }
// // for(const item of menu.entries()){
// //   // console.log(item)
// //   console.log(`${item[0] + 1} : ${item[1]}`)
// // }

// for(const [i, element] of menu.entries()){
//   // console.log(item)
//   console.log(`${i + 1} : ${element}`)
// }

////////////// video 118: Enhansed Object Literals

// 3 Enhanced Object literals 
// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//         [weekDays[3]] : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         [`day-${4 + 2}`] : {
//             open : 0,
//             close : 24,
//         }
//     };

// const openingHours = {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     };
// const restaurant1 = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],

//     // openingHours : {
//     //     thu : {
//     //         open : 12,
//     //         close : 22
//     //     },
//     //     fri : {
//     //         open : 11,
//     //         close : 23
//     //     },
//     //     sat : {
//     //         open : 0,   
//     //         close : 24
//     //     }
//     // },


//     // 1)
//     // ES6 enhanced object literals   
//     // openingHours: openingHours,
//     openingHours,
    
//     //   2 enhanced object literals
//     // order : function (startIndex, mainIndex){
//     //     return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     // },

//     order(startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

//     orderPasta(ing1, ing2, ing3){
//         console.log(`Here is your delicious pasta ${ing1} ${ing2} and ${ing3}`)
//     },
//     orderPixxa(mainIngredient, ...otherIngre){
//         console.log(`Here is your delicious pizza with ${mainIngredient} and ${otherIngre}`)
//     }
// }; 
// console.log(restaurant1)

//////////////// video: 119 OPTIONAL CHAINING (?.)

// const freshRestaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     openingHours : {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     },
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

    
// };

// console.log(freshRestaurant.openingHours.fri.open)

// if(freshRestaurant.openingHours.sat){
//   console.log(freshRestaurant.openingHours.sat.open)
// }
// if(freshRestaurant.openingHours.fri) console.log(freshRestaurant.openingHours.fri.open);
// if(freshRestaurant.openingHours && freshRestaurant.openingHours.thu) console.log(freshRestaurant.openingHours.thu.open);
// // With optional chaining
// // console.log(freshRestaurant.openingHours.mon.open)
// console.log(freshRestaurant.openingHours.mon?.open)
// console.log(freshRestaurant.openingHours.sat?.open)
// console.log(freshRestaurant.openingHours?.fri?.open)

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of weekDays){
//   const openingdays= freshRestaurant.openingHours[day]?.open;
//   console.log(`on ${day} , we open at ${openingdays}`)//// in output i dont want to undefined
// }
// for(const day of weekDays){
//   const openingdays= freshRestaurant.openingHours[day]?.open || 'close';
//   console.log(`on ${day} , we open at ${openingdays}`) //// in output not show the zero value
// }

// for(const day of weekDays){
//   const openingdays= freshRestaurant.openingHours[day]?.open ?? 'close';
//   console.log(`on ${day} , we open at ${openingdays}`) //// now show the zero value 
// }

// console.log(freshRestaurant.order?.(1,2) ?? 'Method does not exist')
// console.log(freshRestaurant.orderRisotto?.(1,2) ?? 'Method does not exist')

// //Arrays
// const user = [];
// // let user =[
// //   {
// //     name: 'shahid',
// //     email: 'shahidullahkan20@gmail'
// //   }
// // ]
// console.log(user[0]?.name ?? 'user array empty')
// //or 
// if (user.length > 0){
//   console.log(user[0].name)
// }else{
//  console.log('user array empty')
// }


///////////////////// video 120: LOOPING OBJECT : OBJECT KEYS VALUES AND ENTRIES
// const freshRestaurant = {
//     name : 'classico italiano',
//     location : 'via angelo tavanti 23, firenze, italy',
//     categories : ['italian', 'pizzeria', 'vegetarian', 'organic'],
//     starterMenu : ['focaccia', 'bruschetta', 'garlic bread', 'caprese salad'],
//     mainMenu : ['pizza', 'pasta', 'risotto'],
//     openingHours : {
//         thu : {
//             open : 12,
//             close : 22
//         },
//         fri : {
//             open : 11,
//             close : 23
//         },
//         sat : {
//             open : 0,
//             close : 24
//         }
//     },
//     order : function (startIndex, mainIndex){
//         return [this.starterMenu[startIndex] ,this.mainMenu[mainIndex]]; 
//     },

    
// };

// // Property Names
// const properties = Object.keys(freshRestaurant.openingHours)
// console.log(properties)

// let openSrt = `we are open on ${properties.length} days: `;
// for (const day of properties){
//  openSrt += `${day}, `;
// }
// console.log(openSrt);

// // PROPERTY VALUE
// const values = Object.values(freshRestaurant.openingHours);
// console.log(values)
// // for(const x of values) {
// //   console.log(x)
// // }

// // ENTRIES OBJECT
// const entries = Object.entries(freshRestaurant.openingHours);
// console.log(entries)

// // for (const [key, value] of entries) {
// //   console.log(`on ${key} we open at ${value.open} and close at ${value.close}`)
// // }
// //// or
// console.log('----------------')
// for (const [key, {open, close}] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`)
// }

////////// CLOSURES
// ----------------------------------------------
// function memoAdd(outerNUM) {
//   const num = outerNUM;
//   again(num);
//   function again(num) {
//     console.log('outer',num)
//   }

//   let cache = {};

//   return function inner(num) {
//     if (cache[num]) {
//       console.log('From cache');
//       console.log(cache)
//       return cache[num];
//     }
//     console.log('Calculating...');
//     const result = num + 10;
//     cache[num] = result;
//     return result;
//   };
// }

// const add = memoAdd(5);
// console.log(add(3));
// console.log(add(3))
// console.log(add(2)); 

// function memoAdd() {
//   let cache = {};
//   return function inner(num) {
//     if (cache[num]) { // FIRST TIME FALSE SECOND TIME SAME VALUE TRUE e.g {'5': 15}
//       console.log('From cache');
//       console.log(cache) // {'5': 15}
//       return cache[num]; // SECOND TIME 15
//     }
//     console.log('Calculating...');
//     const result = num + 10;
//     cache[num] = result;  //store in cache {'5': 15}
//     return result; //FIRST TIME 15
//   };
// }

// const add = memoAdd();
// console.log(add(5)); // 15 FIRST TIME
// console.log(add(5))
// ----------------------------------------------



//////////////// video 121 : challenge # 2
const game2 = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 7.33,
      x: 3.25,
      team2: 6.5,
    },
  };

/*
let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (we already studied how to calculate averages, you can go check
 if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects
 have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
// //// 1)
// const gameScored = game2.scored;
// for (const [i , name] of gameScored.entries()){
//   // console.log(player)
//   console.log(`Goal ${i + 1}: ${name} `)
// }

// //// 2) 
// const odds = Object.values(game2.odds)
// let average = 0;
// for (const odd of odds) {
//   // console.log(odd)
//   average += odd
// // console.log(average)
// }
// average /= odds.length;
// console.log(average)

// //// 3)
// const victory = Object.entries(game2.odds);
// for (const [team, number] of victory){
//   const teamStr  = team === 'x'? 'draw' :  `victory ${game2[team]}`
//   console.log(`odds of ${teamStr} ${number}`)
// }

// //// 4)
// const employee = new Set();
// employee.add('shahid');
// console.log(employee);
// console.log(employee.has('shahid'))
// employee.add('khan');
// // employee.delete('shahid');
// employee.add(`[age , 29]`)
// console.log(employee)
// const mySet = new Set(['name: Shahid', 'age: 29', 'city: Karachi']);
// // console.log(mySet)
// const entries = [...mySet.entries()];
// // console.log(entries)
// let myData; 
// for (const [key, value] of entries) {
//  myData= `my Bio Dat a ${key} : ${value}`;
//  console.log(myData)
// }


// // text in underscore_case
// const text= 'underscore_case_something_else_change_this_to_camelCase';

// const convert = text.split('_');
// console.log(convert)
//  let joinMethod = convert.join(' ');
//  console.log(joinMethod)


/////////////////////// video 122: SETs
// JAVE SCRIPT ECMA6 tWo more data structure introduce MAP and SET NOW TOTAL 5 DATA STRUCTURE HIS NAMES(ARRAY, OBJECT, MAP, SET, STRINGS);
// what is set ? set is a collection of unique values.
// what is array? array is a collection of values.
 // difference between set and array? set is a collection of unique values and array is a collection of values.
// what is object? object is a collection of key value pairs.
// what is map? map is a collection of key value pairs.
// difference between object and map? object is a collection of key value pairs and map is a collection of key value pairs.
// the main difference is that in map the key can be any type of data and in object the key is always a string.
// what is string? string is a collection of characters..


// const orderSet = new Set(['pizza', 'shawarma', 'pizza', 'pasta', 'shawarma','shawarma' ]);
// console.log(orderSet)

// console.log(orderSet.entries())
// console.log(orderSet.has('pizza')) // return a boolean value . has means is me ye value hai k nhi .
// console.log(orderSet.has('burger'))
// console.log(orderSet.add('samosa')) // return New Set
// console.log(orderSet.delete('pasta'))
// console.log(orderSet)
// // console.log(orderSet[0]); /// this is wrong 
// //  const clearOrderSet = orderSet.clear(); /// this is not work
// //  console.log(clearOrderSet);
// // orderSet.clear();
// // console.log(orderSet)
// for( const items of orderSet){
//   console.log(items)
// }

// // Example
// const hotalStaff = ['waiter', 'manager', 'chef', 'waiter', 'manager', 'chef'];
// const UniqueStaff = new Set(hotalStaff) // Array convert to Set 
// console.log(UniqueStaff)
// const convertToArray = [...UniqueStaff];
// console.log('covertToArray', convertToArray)
// const uniqueStaffAraay = [...new Set(hotalStaff)] // set to Array direct  convert 
// console.log(uniqueStaffAraay);

// const orderSetToAray = [...orderSet];
// console.log('OrderSet To Array', orderSetToAray)



// const myName = new Set('shahidKhan');
// console.log(myName)
// console.log('size of my name', myName.size); // not count duplicate value.



/////////////// video 123: New Operations to Make Sets UseFull

// const italianFoods = new Set(['pasta', 'gnocchi', 'tomatoes','olive oil', 'garlic', 'basil']);
// const mexicanFoods = new Set(['tortiles', 'beans', 'tomatoes','rice', 'avocado', 'garlic']);
// /////////-------------INTERSECTION-------------
// const Commonfoods = italianFoods.intersection(mexicanFoods); // common values
// console.log(Commonfoods);
// console.log([...Commonfoods])/// convert to Array
// //// UNION
// const italianMexicaneFusion = italianFoods.union(mexicanFoods); // all join togather but no duplicate value.
// console.log('union', italianMexicaneFusion)
// console.log('union', [...italianMexicaneFusion])
// //// or 
// ////both in one array 
// console.log([...italianFoods, ...mexicanFoods])
// //// then 
// console.log(new Set([...italianFoods, ...mexicanFoods])) // then set remove duplicate values
// //// then back to Array 
// console.log([...new Set([...italianFoods, ...mexicanFoods])]) // then set remove duplicate values
// //// DIFFERENCE
// const uniqueItalianFood = italianFoods.difference(mexicanFoods);// don't pick the same value in italian set
// console.log(uniqueItalianFood);
// const uniqueMaxicanFood = mexicanFoods.difference(italianFoods);// don't pick the same value in mexican set
// console.log(uniqueMaxicanFood);
// const uniqueItalianAndMaxicanFood = italianFoods.symmetricDifference(mexicanFoods)// this is the opposite of intersection .. not pick the same value in both sets. 
// console.log(uniqueItalianAndMaxicanFood)
// const superSetofItalian = italianFoods.isDisjointForm(mexicanFoods)
// console.log(superSetofItalian)

/////////////// video 124: Maps Fundamentals .

// const rest = new Map();
// rest.set('name', 'Altaf Ahmad'); // set method is used to add new element in map.
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 3555);
// console.log(rest);

// const rest1 = new Map([
//   ['name', 'Classico Italiano'],
//   [1, 'Firenze, Italy'],
//   [2, 3555],
// ]);
// console.log(rest1);

// rest.set(2, 'location Islamabad');
// rest.set(2, "shahdi");
// rest.set('Foods', ['pasta', 'pizza', 'shwarma']);
// console.log(rest.get('Foods'))
// rest.set('categories',['italian', 'pizzeries', 'Organic']).set("open", 11).set('close', 23).set(true, 'we are open :D').set(false, 'we are closed :(');
// console.log(rest);
// console.log(rest.get('name'))
// console.log(rest.get('1'))// here 1 in a string
// console.log(rest.get(1))
// // const time = 21;
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))/// return boolean mean rest.get(true)
// console.log(rest.has('categories'))
// rest.delete(1)
// console.log(rest.size)

// rest.set([1,2], 'Test')
// console.log(rest)
// console.log(rest.get([1,2]))
//  const Addin = [3,2];
//  rest.set(Addin, 'Test')
//  console.log(rest)
//  console.log(rest.get(Addin))
//  rest.set(document.querySelector('h1'), 'Heading');
//  console.log(rest)

//  ///////////////// VIDEO 125: Maps Iteration

//  const question  = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'C++'],
//   [4, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct👍'],
//   [false, 'try Again'],
// ])
// // console.log(question)


// // const answer = Number(prompt('Enter correct value'));
// let answer = 3;
// const covertToArray = [...question.entries()]
// // console.log(covertToArray)

// for(const  [key, value] of covertToArray){
//  if(typeof key === 'number'){
//   console.log('key', key, 'value', value)
//  }
// }
// console.log(answer , question.get(question.get('correct') === answer))

// const mapToArray = [...question]
// const mapToArray1 = [...question.entries()] 
// console.log(mapToArray)/// both are same
// console.log(mapToArray1)
// console.log(question.keys())
// console.log(question.values())
 


 ///////////////// VIDEO 126 : Which Data Structure use?

 /// source of Data: 
 // 1) From the program it self: Data we write the code.
 // 2) From the UI: Data we input from the user or the web site.
 // 3) From external sources: Data we get from external sources like web API.
 // SIMPLE LIST: Array or Sets.
 // KEY/VALUE PAIRS: Objects or Maps.  : key allow us to describe values.

 //// ARRAY VS SETS VS OBJECT VS MAPS
 // ARRAY: use when you need ordered list of values (might contain duplicates).
 // SETS: use when you need to work with unique values.Use when high performance is really important. Sets use to remove duplicate values.
 // OBJECTS: use when you need to store key/value pairs. In the old way. easier to write and access data.
 // MAPS: use when you need to store key/value pairs. In the modern way. better performance, keys can have any data type, easy to iterate, easy to compute size, easy to add and remove elements.


 ///////////////// VIDEO 127: CHALANGE #3

 /*

Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, lLIke this: 
[FIRST HALF] 17 : Goal
 */

// const gameEvents = new Map([ 
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents.values())
// //1)
// const events = new Set(gameEvents.values());
// console.log(events)
// console.log([...events])
// // 2)
// gameEvents.delete(64);
// console.log(gameEvents)

// // 3)
// const time = [...gameEvents.keys()].pop();
// console.log(`
//   An event happend, on average , every ${ time / gameEvents.size} minutes`)
// // 4)
//   for(const [min, event] of gameEvents){
//     const time = min <= 45 ? 'FIRST' : 'SECOND';
//    console.log(`[${time}HALF] ${min} :${event}`);
//   }

 ///////////////// VIDEO 128: WORKING WITH STRINGS :PART 1,

//  const airline = 'TAP Air portugal';
//  const plane = 'A320';
//  console.log(plane[0])
//  console.log(plane[1])
//  console.log(plane[2])
//  console.log('B737'[0])

// console.log(airline.length)
// console.log(plane.length)
// console.log('first'.length)

// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))
// console.log(airline.indexOf('portugal'))

// ///////// ---------------SLICE METHOD : ALWAYS RETURN A NEW STRING -------------
// console.log(airline.slice(5)) // pehly 5 ko chor kr sro ko collect krliya: ye new string return krta hai
// const f_name= 'Rahimullah khan';
//  const sliceString = f_name.slice(0, 5);
//  console.log(sliceString)
//  console.log(f_name.slice(1,5));/// ye four charactor pick karega . Qk (End - begining) 5 se 1 minus kro tu 4 aty hai. 
//  console.log(f_name.slice(2,));
//  console.log(airline.slice(0, airline.indexOf(' ')));// first space
//  console.log(airline.slice(0, airline.lastIndexOf(' ')));// last space
//  console.log(airline.slice(-2)) // last 2 index .. minus left yani k last se start huta hai.
//  console.log(airline.slice(1, -1))

//  ////// this method is called Boxing : automatically convert string primitive  to String object.
// let checkMiddleSeat = function (seat){
//   // B and S are middle seat
//   let s = seat.slice(-1);
//   s === 'B' || s === 'S' ? console.log(`${s} you win middle seat`) : console.log('see you next time')
  
// }
// checkMiddleSeat('11B');  
// checkMiddleSeat('2AG');
// checkMiddleSeat('6ES')

// console.log( new String('Shahid'))
// console.log(typeof new String('Shahid'))
// console.log(typeof new String('Shahid').slice(1))

 ///////////////// VIDEO 129: WORKING WITH STRINGS :PART 2,
/// -------------TOLOWERCASE AND TOUPPERCASE

//  const airline = 'TAP Air portugal';
// //  const plane = 'A320';

//  console.log(airline.toUpperCase())
//  console.log(airline.toLowerCase());
//  // Fix capitalization in name
//  const passenger = 'jOin';
//  const passengerLower = passenger.toLowerCase();
//  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
//  console.log(passengerCorrect);
/// --------------------------TRIM    AND    REPLACE-------------
//  const LoginEmail= '     shahidullah@gMail.com  \n'
//  const lowerEmail = LoginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimEmail = lowerEmail.trim();
// console.log(trimEmail);

// const normalizedEmail = LoginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// ///// -----------REPLACING-----------
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&','$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passenger come to Boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door', 'gate'))
// // console.log(announcement.replaceAll('door', 'gate')) //
// console.log(announcement.replace(/door/g, 'gate' )) /// replaceAll

// /// ---------- three simple method that return boolean (true of false)
///-----------------------INCLUDE-----------
// const planeNo = 'Airbus A320neo';
// console.log(planeNo.includes('A320'))// true
// console.log(planeNo.includes('neo')) // true
// console.log(planeNo.includes('A320neo')) // true
// console.log(planeNo.includes('A320neo')) // true
// console.log(planeNo.startsWith('A320')) // true
// console.log(planeNo.endsWith('neo')) // true


// if(planeNo.startsWith("Air") && planeNo.endsWith('neo')){
//   console.log('parts of the new Airbus family')
// }

// const checkBaggage = function(items){
//   // console.log(items)
//   const baggaged = items.toLowerCase();// first must convert to lowerCase because if capitalize word and lower word not same
//   // console.log(baggaged)
//   if(baggaged.includes('knife') || baggaged.includes('gun')){
//     console.log('you are NOT Allowed to Boart');
//   }else{
//     console.log('WELCOME you a re allowed')
//   }
//   // items.toLowerCase().includes('knife') || items.toLowerCase().includes('gun') ? console.log('WELCOMEyou are not allowed') : console.log('you are Allowed');

// };
// checkBaggage('i have a laptop, some Food and a pocket knife');
// checkBaggage('socks and some');
// checkBaggage('Got some snaks and a gun for protection');


 ///////////////// VIDEO 130: WORKING WITH STRINGS :PART 3,

 // --------------SPLITE METHOD-------------
//  console.log('a+very+nice+string'.split('+'))// divided parts by divider String here "+" sign is dividerString
//  console.log('shahid Ullah'.split(' '));
//  const [firstName, LastName] = 'Shahid ullah'.split(' ');
// //  console.log(firstName, LastName)
// const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
// console.log(newName)

//  const textSplit = 'Mr Shahid ullah Khan';
//  const text  = [...textSplit].join('+');
// //  console.log(text)
//  console.log(text)
//   const textSplit1 = 'Mr Shahid ullah Khan'.split(' ');
//  const text11  = [...textSplit1].join('+');
// //  console.log(text)
//  console.log(text11)

//  const capitalizeName = function(name){

//   const names = name.split(' ')
//   console.log(names)
//   let nameUpper= []
//   for(const char of names){
//   //  let nameslice = char[0].toUpperCase() + char.slice(1)
//   // console.log(nameslice)
//   // nameUpper.push(char[0].toUpperCase() + char.slice(1));// OR
//   nameUpper.push(char.replace(char[0], char[0].toUpperCase()))// Same Result
// }
// // console.log(nameUpper.join(' '))
  
//  }

//  capitalizeName('jessica ann smith davis');
//  capitalizeName('Ahmad ullah khan marwat');


//  //// -----------------------PADDING METHOD----------------

//  const message = 'Go to gate 22!';
//  console.log(message.padStart(25, '+').padEnd(30, '*'));
//  console.log('shahid'.padStart(25,'+'))
//  console.log('shahid'.padStart(25,'+').padEnd(30, '*'));

//  /// in Reall Life example

//  const maskCreditCard = function(number){
//   // first convert to string 
//   const str = number + '';/// => '1231325425434' and (lenght:13)
//   const lastDigits = str.slice(-4);/// 5434 last four charactor
//   return lastDigits.padStart(str.length, '*') /// 5434.paddStart(13, "*");
//  }

//  console.log(maskCreditCard(1231325425434))
//  console.log(maskCreditCard(1231325476234468))
//  console.log(maskCreditCard(1231325463988788765))

// ///// --------------REPEAT METHOD----------

// const message3= 'Bad weather ... All Departues Delayed...';
// console.log(message3.repeat(3))

// const planeInLines = function(n){
//   console.log(`there are ${n} planes in line ${'✈'.repeat(n)}`)
// };
// planeInLines(5);
// planeInLines(3);

 ///////////////// VIDEO 131: Challenge #4
  /*
  write a program that receives a list of variable names written in underscore_case and consvert then to camelCase.

  The input will come from a textarea inserted into the DOM (see code below to insert the element),
   and conversion will happen when the button is pressed.

   THIS TEXT DATA (pasted in textarea)
   underscore_case
     first_name
  Some_Variable
      calculate_AGE
  delayed_departure

  SHOULD PRODUCE THIS OUTPUT (5 separate console.log output ):
  underscoreCase        ✅
  firstName             ✅✅
  someVariable          ✅✅✅
  calculateAge          ✅✅✅✅
  delayedDeparture      ✅✅✅✅✅

  HINT 1: Remember which character defines a new line in the textarea
  HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
  HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
  HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
  */

  document.body.append(document.createElement('textarea'));
  document.body.append(document.createElement('button'))

  document.querySelector('textarea').style.height = '100px';
  document.querySelector('textarea').style.width = '200px';
  document.querySelector('button').style.height = '50px';
  document.querySelector('button').style.width = '100px';
  document.querySelector('button').innerText = 'Convert';

  const btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    const SelectText =document.querySelector('textarea').value;
    const rows = SelectText.split('\n');
    console.log(rows);
    for(const [i, item] of rows.entries()){
      const [text1, text2=''] = item.trim().toLowerCase().split('_');
      const output = `${text1}${text2.replace(text2[0], text2[0].toUpperCase())}`;
      console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i+1)}`)
    }
  })


 ///////////////// VIDEO 132: STRING METHOD PRACTICE 
 
 const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

                 const answer1 = flights.split('+')
                //  console.log(answer1);

                 for(const item of answer1){
                     const splitText =item.split(';')
                    //  console.log(splitText)
                     const [type, country1, country2, time] = splitText;
                      //  const text11 = `${type.split('_').join(' ')}`OR
                      //  console.log(text11)
                        // const result= text11.toLowerCase().includes('delayed')?`✅${text11}` : text11 ; OR
                        const result= `${type.startsWith('_Delayed') ? `✅` :' '} ${type.replaceAll('_',' ')} `
                       const country1Set = country1.slice(0,3).toUpperCase();
                       const country2Set = country2.slice(0,3).toUpperCase();
                       const setTime = time.replace(':','h')
                      //  console.log(text11)
                      //  console.log(`${result} From ${country1Set} to ${country2Set} (${setTime})`.padStart(45,' '))OR
                       const output= `${result} From ${country1Set} to ${country2Set} (${setTime})`;
                       console.log(output.padStart(45,' '))
                      //  console.log(country2Set)
                      //  console.log(setTime)
                 };



let a = 10;
let b = a ;
b = 20;
console.log(a, b)

let obj1 = { name: "Fahad" };
let obj2 = obj1;    // copy by reference

obj2.name = "Ali";

console.log(obj1.name); // "Ali"
console.log(obj2.name); // "Ali"





 






































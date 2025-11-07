'use strict';

////////////////--------Video: 147: --Section Intro
////////////////--------Video: 148: --Section Roadmap
////////////////--------Video: 149: --Simple Array Methods

// const currencies = new Map([
// ['USD', 'United state dollar'],
// ['EUR', 'Euro'],
// ['GBP', 'Pound sterling'],
// ])
 
// const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
///// ------------SLICE 
// SLICE METHOD : NOT CHANGE ORIGINAL ARRAY
//// SLICE METHOD: Slice method Return a new Array, also used for shallow copy
// console.log(arr)
// const sliceArr= arr.slice(2);
// console.log(arr.slice(1,4));//end perameter (4) not included in the output
// console.log(arr.slice(-1));//last element
// console.log(arr.slice(-2));//last element
// console.log(arr.slice()); //CREATE A  SHALLOW COPY;
// console.log([...arr])// SAME AS A SLICE METHOD;

// ---------------SPLICE
//  SPLICE METHOD : SPLICE METHOD SAME AS SLICE BUT ONE DIFFERENCE SPLICE CHANGE ORIGINAL ARRAY; means Mutate the Array
// console.log(arr.splice(0,1))
// console.log(arr)
// console.log(arr.splice(-1));
// console.log(arr.splice(1,6)) // here 2nd argument number of delete index; 
// console.log(arr);

//------------- REVERSE

//// REVERSE METHOD: Reverse method change the original Array 
// let arr2 = ['f', 'e', 'd', 'c', 'b', 'a'];

// console.log(arr2.reverse())
// console.log(arr2)

// //--------------CONCAT
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// const letter = arr.concat(arr2);
// console.log(letter)
// console.log([...arr, ...arr2]) //same method

// // -------------JOIN 

// console.log(arr.join('-'))
// console.log(arr.join())// here you write any symble or write nothing

// ////////////////--------Video: 150: --THE NEW AT METHOD
// //-------------at method

// const arry= [23, 34, 45];
// // first element
// // console.log(arry[0]);
// // console.log(arry.at(0));

// // last element 
// console.log(arry[arry.length - 1]);
// console.log(arry.slice(-1)[0]);
// console.log(arry.at(-1));
// console.log(arry.at(-2));
// console.log('shahid'.at(1));  // 1 index means: h
// console.log('shahid'.at(-1));// last corrector

// ////////////////--------Video: 151: LOOTING ARRAYS: ForEach 

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// -------- FOR OF LOOP
//  for (const movement of movements){
//     if(movement > 0){
//         console.log(`you deposited ${movement}`)
//     }else{
//         console.log(`your withdraw ${Math.abs(movement)}`)
//     }
//  };
//  // ------- FOREACH LOOP
//  console.log('-------ForEach') // forEach method does is loop over the array and in each iteration it well execute this callback function here. 
// movements.forEach(function(movement){ // ye callback function leta hai. ye current element as an argument leta hai.
//     if(movement > 0){
//         console.log(`you deposited ${movement}`)
//     }else{
//         console.log(`'you withdraw ${Math.abs(movement)}`)
//     }
// });


// -------- FOR OF LOOP
//  for (const [i, movement] of movements.entries()){
//     if(movement > 0){
//         console.log(`Movement ${i +1} you deposited ${movement}`)
//     }else{
//         console.log(`movement ${i +1} you withdraw ${Math.abs(movement)}`)  // MATH.ABS(MOVEMENT) REMOVE THE MINUS SYMBOLE
//     }
//  };
//  // ------- FOREACH LOOP
//  console.log('-------ForEach') // forEach method does is loop over the array and in each iteration it well execute this callback function here. 
// movements.forEach(function(movement, index, array){ // first perameter CURRENT ELEMENT ,    2nd CURRENT INDEX, 3rd perameter ENTIRE ARRAY OVER THE LOOPING ARRAY
//     if(movement > 0){
//         console.log(`Movement ${index +1} you deposited ${movement}`)
//     }else{
//        console.log(`movement ${index +1} you withdraw ${Math.abs(movement)}`)
//     }
    
// });
////////////////--------Video: 152: ForEach With  Maps and Sets

// const currencies = new Map([
// ['USD', 'United state dollar'],
// ['EUR', 'Euro'],
// ['GBP', 'Pound sterling'],
// ])

// currencies.forEach(function(value, key, map){
// console.log(`${key}= ${value}`);
// })

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
// currenciesUnique.forEach(function(value, key, map){
// console.log(`${key} :::: ${value}`);
// })
// // OR 
// currenciesUnique.forEach(function(value, _, map){ /// SET KEY NHI LETA IS LIYE K WO ALREADY UNIQUE VALUE STORE KRTA  HAI.
// console.log(`${value} :::: ${value}`);
// })

////////////////--------Video: 153: project bankist app 
////////////////--------Video: 154: Creating DOM Elements (bakist app)
////////////////--------Video: 155: Chalange # 1

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
 and stored the data into an array (one array for each). For now, they are just interested in knowing
  whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia, dogsKate){
//     const dogsJuliaCorrected = dogsJulia.slice();// shallow
//     dogsJuliaCorrected.splice(0,1);
//     dogsJuliaCorrected.splice(-2)
//     console.log(dogsJuliaCorrected)
//     const dogs = dogsJuliaCorrected.concat(dogsKate)
//     console.log(dogs)

//     dogs.forEach(function(dog, i){
//         if(dog >= 3){
//             console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//         }else{
//             console.log(`Dog number ${i+1} is still a puppy 🐶`)
//         }
//     })
// }

// // checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])


// ////////////////--------Video: 156: DATA TRANSFORMATION WITH MAP, FILTER , AND REDUCE
// ////////////////--------Video: 157: The Map Method
// // map function or method return a new array;

// //----------------------- Map () 

// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let eurToUsd = 1.1;
// // const movementsUSD = movements2.map(function(move){
// //     return move * eurToUsd;
// // })
// // or 
// const movementsUSD = movements2.map(move => move * eurToUsd)

// console.log(movements)
// console.log(movementsUSD)
// // OR
// const movementsUSDfor =[];
// for(const move of movements2){
//     movementsUSDfor.push(move * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescription = movements2.map((mov, index)=> 
//     `Movement ${index+ 1} : you ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
// //     {
// //    if(mov > 0){
// //        return `Movement ${index +1} you deposited ${mov}`
// //     }else{
// //      return  `movement ${index +1} you withdraw ${Math.abs(mov)}`
// //     }
// // }
// )
// console.log(movementsDescription)

////////////////--------Video: 158: COMPUTING USERNAME (BANKIST APP)
////////////////--------Video: 159: The FILTER Method
// FILTER METHOD : filter method take a callback function and return a new array;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter(function(mov){
//   return mov > 0;
// });
// console.log(deposit);
// const depositFor = [];
// for(const mov of movements){
//   if(mov > 0) depositFor.push(mov)
// };
// console.log(depositFor)


// // withdraw
// const withdraw = movements.filter((mov) => mov < 0);
// console.log(withdraw);

// const withdrawFor = [];
// for(const mov of movements){
//   if(mov < 0) withdrawFor.push(mov)
// };
// console.log(withdrawFor)

////////////////--------Video: 160: The REDUCE Method
// REDUCE METHOD : reduce method take a callback function and return a value;


// REDUCE : 2 Argument lety hai, 1st accumolator , 2nd start value. <<<<<==========================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // accumulator -> SNOWBALL
// const balance = movements.reduce((acc, cur)=> acc + cur , 0); // accumolator + current 
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

// // ----------- FIND MAX VALUE
// const max = movements.reduce((acc, cur, index, array)=> {
//   if(acc > cur) return acc;
//   else return cur;
// },movements[0]);
// console.log(max);

// // ---------- FIND MIN VALUE
// const min = movements.reduce(
//   (acc, cur, index, array)=> acc < cur ? acc: cur ,movements[0]);
// console.log(min);
// const checkDogs = [3, 5, 2, 12, 7, 4, 1, 15, 8, 3];

// const average =  checkDogs.reduce((acc, cur, index, arr) =>  acc + cur / arr.length,0);
// console.log(average);



////////////////--------Video: 161: CHALANGE # 2;
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages
 to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
   If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// //  const dogs = [5, 2, 4, 1, 15, 8, 3];
//  const dogs = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages){
//    const humanAge = ages.map((ages) =>{ 
//     if(ages <= 2){
//         return 2 * ages;
//     }else{
//         return 16 + ages * 4;
//     }});
//    const adults =humanAge.filter((ages) => {
//        return ages >= 18
//    } );
//    console.log(adults)
//    const average =adults.reduce((acc, cur, i, arr) =>
//     { return  acc + cur / arr.length},0
//     );
//    return Math.trunc(average); // Math.trunc() remove the decimal point;
// }
// console.log('average human age',calcAverageHumanAge(dogs));



////////////////--------Video: 162: THE MEGIC OF CHAINING METHODS;

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 283.3;

// // -------------------------- PIPLINE 
// const totalDepositedUsd = movements
// .filter(mov => mov > 0)
// .map((mov, i, arr)=>{
//    console.log(arr);
//  return mov * eurToUsd
// })
// .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositedUsd)

// ////////////////--------Video: 163: CHALANGE # 3;
// //------------CHAINING METHOD---------------

// //  const dogs = [5, 2, 4, 1, 15, 8, 3];
//  const dogs = [16, 6, 10, 5, 6, 1, 4];

//  const calcAverageHumanAge = function (ages){
//     const humanAge = ages.map(ages =>ages <= 2 ? 2 * ages : 16 + ages * 4)
//     .filter(ages => ages >= 18 )
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length,0);
//    return Math.trunc(humanAge);
// }
// console.log('average human age',calcAverageHumanAge(dogs));

////////////////--------Video: 164: THE FIND METHOD;

// FINE METHOD : find method take a callback function and return a value;
 // Fine Method start se value find frta hai.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(move => move < 0)
// console.log(firstWithdrawal)


// DATA
const account11 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account12 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account13 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account14 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accountsAgain = [account11, account12, account13 , account14]

// console.log(accountsAgain)

// //----------------------------FIND METHOD PURA USER YA ARRAY KA OBJECT RETURN KRTA HAI
// const accountt = accountsAgain.find(acc => acc.owner === 'Jessica Davis')
// console.log(accountt)

// ////////////////--------Video: 165: IMPLEMENTING LOGIN (BANKIST APP);
// ////////////////--------Video: 166: IMPLEMENTING TRANSFER (BANKIST APP);

// ////////////////--------Video: 167: FINDINDEX METHOD (BANKIST APP);

// //----------------------------FINDINDEX METHOD SIRF INDEX NUMBER RETURN KRTA HAI
// const accountindex = accountsAgain.findIndex(acc => acc.owner === 'Jessica Davis')
// console.log(accountindex)
// ////////////////--------Video: 168: THE NEW FINDLAST AND  FINDLASTINDEX METHODS 

// // --------------------------------FindLast method ye Find ki tara pura user ua object return krta hai array se . 
//   // but find method array start se finding start krta AUR findLast method Array ki last se find start krta hai
// const accountLastIndex = accountsAgain.findLast(acc => acc.owner === 'Jessica Davis')
// console.log(accountLastIndex)

//  const  movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//  const firstWithdrawal = movements.find(move => move < 0);
//  console.log(firstWithdrawal)

//  const lastWithdrawal = movements.findLast(move => move > 0);
//  console.log(lastWithdrawal)

//  // 'your latest large movement was X movement ago'

//  const latestLargeMovementIndex = movements.findLastIndex(move => Math.abs(move) > 2000);
//  console.log(latestLargeMovementIndex)

//  console.log(`your latest large movement was ${movements.length - latestLargeMovementIndex} movement ago`)


////////////////////////--------Video: 169: SOME AND EVERY  METHODS 
// SOME : RETURN BOLEAN VALUE
// some method array ki kisi bhi value ko check krta hai agr koi bhi value condition ko satisfy krta hai to true return krta hai warna false return krta hai
// console.log(movements)
// console.log(movements.includes(-130))

// const anyDeposit = movements.some(mov => mov > 5000)
// console.log(anyDeposit)
// //CONDITION 
// console.log(movements.some(mov => mov === -400))

// // EVERY METHOD : RETURN BOLEAN VALUE
// // every method array ki har value ko check krta hai agr sare condition true hai to true return krta hai warna false return krta hai
// console.log(movements.every(mov => mov > 0))
// console.log(movements.every(mov => mov < 0 ))

// // SEPERATE CALLBACK
// const deposit = move => move > 0;
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

///////////////////////--------Video: 170: flat and flatmap  METHODS 
//  // map methodnested array ko single array me convert krta hai
//  // this one level deep array
// const arr = [['a', 'b'], ['c', 'd'], ['e', 'f']];
// console.log(arr.flat())
// const arragain = [[1, 2,3], [4,5], 6, 7];
// console.log(arragain.flat());

// // this two level deep array
// const arrDeep = [[[1, 2,3]], [[4,5], 6], 7];
// console.log(arrDeep.flat(2));

// //--------------FLATMAP METHOD
// const accountMevements = accountsAgain.map(acc => acc.movements)
// console.log(accountMevements);

// const allmovements = accountMevements.flat();
// console.log(allmovements);
// const overAllBalance = allmovements.reduce((acc, cur) => acc + cur, 0);
// console.log(overAllBalance);

// // flatMap method combined map and flat method: 
// const throughFlatMap = accountsAgain.flatMap(acc=> acc.movements);
// console.log(throughFlatMap);
// const throughFlatMapReduce = accountsAgain.flatMap(acc=> acc.movements).reduce((acc, cur) => acc + cur, 0);
// console.log(throughFlatMapReduce);

///////////////////////--------Video: 171: CODING CHALANGE # 4;

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 10,
    activities: ['agility', 'fetch'],
  },
];

// 1)
// const huskyAvgWet = breeds.find(bre => bre.breed === 'Husky').averageWeight;
// console.log(huskyAvgWet);

// // 2)
// const FindBreed = breeds.find(bree => bree.activities.includes('running') && bree.activities.includes('fetch')).breed;
// console.log(FindBreed);

// // 3)
// const findAllActivities = breeds.map(bree => bree.activities).flat();
// console.log(findAllActivities);
// //// OR
// const flatMapActivities = breeds.flatMap(bree => bree.activities);
// console.log(flatMapActivities);

// // 4) 
// const uniqueActivityFind =[...new Set(breeds.flatMap(bree => bree.activities))];
// console.log(uniqueActivityFind);

// // 5)
// // const swimmingAdjacent = breeds.filter(bree => bree.activities.includes('swimming')).map(bre => bre.activities).flat();
// // OR 
// const swimmingAdjacent = breeds.filter(bree => bree.activities.includes('swimming'))
// .flatMap(bre => bre.activities)
// .filter(bre => bre !== 'swimming');
// console.log([...new Set(swimmingAdjacent)]);

// // 6)
// console.log(breeds.every(bree => bree.averageWeight >= 10))

// // 7) 
// console.log(breeds.some(bre => bre.activities.length >= 3))

// // BONUS
// const heaviestWieght = breeds.filter(bre => bre.activities.includes('fetch')).map(bre => bre.averageWeight)
// const heaviestWieghtMaxValue = Math.max(...heaviestWieght);
// console.log('heaviest Wieght', heaviestWieghtMaxValue);

///////////////////////--------Video: 172: Sorting Array;

// const owners = ['shahid', 'akram', 'tahir', 'zaman', 'muzamil'];
// const numberArray = [1, 6, 3, 9, 2, 4 ];

// console.log(owners.sort())
// console.log(numberArray.sort())

const  transactions = [200, 450, -400, 3000, -650, -130, 70, 1300]

// console.log(transactions.sort())// not sort well


// RETURN < 0, A, B (keep order)
// RETURN > 0, B, A (switch order)
// Ascending: a > b means 200 > 450 then check if 200 > 450 return 1 then switch order
//  if 200 < 450 return -1 then keep order . keep order means 200 will come before 450
// ----------------------------ASCENDING ORDER
// transactions.sort((a,b) => {
//   if(a > b) return 1;
//   if(a < b) return -1
// })
// //OR
// transactions.sort((a,b) => a - b)
// console.log('wel ascending sort with callback',transactions)

// ----------------------------DESCENDING ORDER
// transactions.sort((a,b) => {
//   if(b > a) return 1;
//   if(b < a) return -1
// })
//OR 
// transactions.sort((a,b) => b - a)
// console.log('wel descending sort with callback',transactions)

///////////////////////--------Video: 173: ARRAY GROUPING;

// console.log(transactions)
// // const groupingMovement = Object.groupBy(transactions, trans=>{
// //   if(trans > 0 ) return 'Recieve__Balance';
// //   if(trans < 0 ) return 'Send__Balance';
// // } )
// ////OR 
// const groupingMovement = Object.groupBy(transactions, trans=> trans > 0 ? 'Recieve__Balance' : 'Send__Balance')
// console.log(groupingMovement)
// console.log(groupingMovement.Recieve__Balance)
// console.log(groupingMovement.Send__Balance.map(item => item + 2))

// console.log(accountsAgain);

// const Movementlength = Object.groupBy(accountsAgain, acc =>{
//   const moveLength = acc.movements.length ;
//   // if(moveLength >= 6){
//   //   return 'Too much transaction';
//   // }else if (moveLength >= 3){
//   //   return 'middle transaction';
//   // }else {
//   //   return 'Too Low Transaction';
//   // }
//   //// OR 
//   if(moveLength >= 6) return 'Too_much_transaction';
//   if (moveLength >= 3) return 'middle_transaction';
//   if (moveLength >= 1) return 'To_Low_transaction';
//   return 'inactive'
// });

// console.log(Movementlength)

// // const AccountType = Object.groupBy(accountsAgain, trans=> trans.type)
// //// OR 
// const AccountType = Object.groupBy(accountsAgain, ({type}) => type)
// console.log(AccountType)


///////////////////////--------Video: 174: More Ways of Creating AND Filling ARRAYs;

// // this is creating manualy
// console.log([1,3, 2, 6, 4])
// const arr= [1,3, 2, 6, 4];
// console.log(new Array(1,3, 2, 6, 4))

// // when creating by programetically
// const x = new Array(7);
// console.log(x) // now empty
// console.log(x.map(()=> 5));

// // only one method then call empty array and his called fill method.
// //---------------------fill method
// // fill mutate(change) the original Arrays
// // x.fill(1);
// // console.log(x);
// x.fill(1, 3, 5);
// console.log(x)
// x.fill(20, 4, 6)
// console.log(x)

// //------------------------Array.form
// const newArr = Array.from({length: 7}, ()=> 1);
// console.log(newArr)

// // const newArr2 = Array.from({length: 6}, (cur, index)=> index + 1);
// //OR
// const newArr2 = Array.from({length: 6}, (_, index)=> index + 1);
// console.log(newArr2)

// // 
// const labelBalances = document.querySelector('.balance__value');



// labelBalances.addEventListener('click', function(e) {
//   e.preventDefault()
// // const movementUI = Array.from(document.querySelectorAll('.movements__value'));
// // console.log(movementUI.map(ele => ele.textContent.replace('€', '')))
// // OR
// // the map write in 2nd argument
// // const movementUI = Array.from(document.querySelectorAll('.movements__value'),(ele => ele.textContent.replace('€', '')));
// // OR
// const movementUI = Array.from(document.querySelectorAll('.movements__value'),ele => Number(ele.textContent.replace('€', '')));
// console.log(movementUI)

// const movementUI2 =[...document.querySelectorAll('.movements__value')]
// console.log(movementUI2.map(ele => ele.textContent.replace('€', '')));

// })


// ///////////////////////--------Video: 175: Non-Destructive Alernative : toReversed, toSorted, toSpliced with ;

// console.log(transactions);
// // const reverseMov = transactions.reverse(); mutate(change) original array
// const reverseMov = transactions.slice().reverse();// slice make a shallow copy (mutate a shallow copy array )
// console.log(reverseMov)
// const reverseMov2 = transactions.toReversed();// toReversed not mutate the origingla array;
// console.log(reverseMov2)

// // toSorted (sort), toSpliced (splice)
// // transactions[0]= 2000; // change the original Array
// // console.log(transactions)
// //--------------------------- With method
// const newMovements = transactions.with(1, 2999);// first index number 2nd value
// console.log(newMovements)


///////////////////////--------Video: 176: Which Array method to use ?
// Which Array method to use ?
//--------------- TO MUTATE ORIGINAL ARRAY:
 // add to original
  // .push (end)
  // .unshift (start)
// remove from original
  // .pop (end)
  // .shift (start)
  // .splice (any)
// others
  // .reverse
  // .sort
  // .fill
  // .Spliced

  //------------------ A NEW ARRAY BASED ON ORIGINAL
  // computed from original
  // .map (loop)
  // .filter (filter)
  // .slice
  // .flat
  // .flatMap
  // others
  // .concat
  // .toReversed
  // .toSorted
  // .toSpliced
  // .with

  //------------------ AN ARRAY INDEX
  // .at (index)

  // --->  base on value
  // .indexOf (index)
  // .lastIndexOf (index)

  // --->  base on condition
  // .findIndex (find index)
  // .findLastIndex (find last index)

  //------------------ AN ARRAY ELEMENT 
  //----> based on test condition
  // .find (find)
  // .findLast (find last)
  
  //----> based on test position
  // .at (index)

  // ------------------ KNOW IF ARRAY INCLUDES
  // --->  base on value
  // .includes (include)

  //----> based on test condition
  // .some (some)
  // .every (every)

  // ------------------ A NEW STRING
  // .join (string)
 

  // ------------------ TO TRANSFORM TO VALUE
  // based on accumulator
  // .reduce (reduce)
  // .reduceRight (reduce right)

  //------------------ TO JUST LOOP ARRAY
  // based on callback
  // .forEach (forEach)




///////////////////////--------Video: 177: Array Methods in Practice ?

// 1)
// const bankDepositSum = accountsAgain.map(acc => acc.movements).flat()
// OR
// const bankDepositSum = accountsAgain.flatMap(acc => acc.movements);
// console.log(bankDepositSum);

// const bankDepositSum2 = accountsAgain.flatMap(acc => acc.movements).filter(move => move > 0).reduce((acc, cur)=> acc + cur, 0);
// console.log(bankDepositSum2);


// 2)
// const bankDeposit = accountsAgain.flatMap(acc => acc.movements).filter(move => move >= 1000).length;
// console.log(bankDeposit);
// OR THROUGH REDUCE FUNCTION
const bankdepositLength = accountsAgain.flatMap(acc => acc.movements).reduce((count, cur)=> (cur >= 1000 ? count + 1: count),0);
//OR
// const bankdepositLength2 = accountsAgain.flatMap(acc => acc.movements).reduce((count, cur)=> (cur >= 1000 ? count++: count),0);  //here count ++ not work 
const bankdepositLength2 = accountsAgain.flatMap(acc => acc.movements).reduce((count, cur)=> (cur >= 1000 ? ++count: count),0); //here count ++ not work 
console.log(bankdepositLength2);

// 3)
const {deposits, withdrawal} = accountsAgain.flatMap(acc => acc.movements)
                              .reduce((sum, cur)=> {
                                // cur > 0 ? (sum.deposits += cur) : (sum.withdrawal += cur);// or
                                sum[cur > 0 ? 'deposits' : 'withdrawal'] += cur;
                               return sum;
                              }, {deposits: 0, withdrawal: 0});
                              console.log(deposits ,withdrawal)
// 4)
// CAPITALIZE SENTENCE :
const covertTitleCase = function(title){
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const  titleCase = title.toLowerCase()
                     .split(' ')
                     .map(word => exceptions.includes(word) ? word :  word[0].toUpperCase() + word.slice(1))
                     .join(' ');
                     return capitalize(titleCase);

}

console.log(covertTitleCase('this is a nice title.'))
console.log(covertTitleCase('this is a LONG title but not too long.'))
console.log(covertTitleCase('and here is another title with an EXAMPLE.'))


///////////////////////--------Video: 178: CODE CHALANGE # 5:
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property.
 Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array,
 and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food,
 based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically,
 the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

  // 1)
  dogs.forEach(dog=> {
    dog.recFood = Math.floor(dog.weight ** 0.75 * 28)
  });
  console.log(dogs)

  // 2)
  const SarahDog = dogs.find(dog => dog.owners.includes('Sarah') )
  console.log(SarahDog)
  console.log(`Sarah's dog eats too ${SarahDog.curFood > SarahDog.recFood ? 'much' : 'little'}`)

  // 3)
  const owersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(owers => owers.owners)
  console.log(owersTooMuch)
  const owersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(owers => owers.owners)
  console.log(owersTooLittle);

  // 4)
  const stringCase= `"${owersTooMuch.join(' and ')}'s dogs eat too much!" and "${owersTooLittle.join(' and ')}'s dogs eat too little!`;
  console.log(stringCase)

  // 5)
  const healthy = dogs.some(dog => dog.curFood === dog.recFood);
  console.log(healthy);

  // 6)
  // const dogEating = dogs.every(dog => dog.curFood < dog.recFood * 1.1 &&  dog.curFood > dog.recFood * 0.9);
  // console.log(dogEating);
  // OR
   const dogEating = dog => dog.curFood < dog.recFood * 1.1 &&  dog.curFood > dog.recFood * 0.9;
  console.log(dogs.every(dogEating));

  // 7)

  const dogsEatingOkay = dogs.filter(dogEating)
  console.log(dogsEatingOkay)

// 8)
const dogsGroup = Object.groupBy(dogs, dog=> {
  if(dog.curFood > dog.recFood)return 'too Much';
  if(dog.curFood < dog.recFood)return 'too Little';
       return 'exact'

})
console.log(dogsGroup)

// 9)
const dogsGroupByOwners = Object.groupBy(dogs, dog=> 
   `${dog.owners.length}__Owners`
)
console.log(dogsGroupByOwners)

// 10)
const sortDogs = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(sortDogs)
console.log(dogs)













// Remember , we're using strict mode
'use strict';

  ////////////////// SECTION 4: DEVELOPER SKILLS AND EDITOR SETUP /////////////////////////////
    
    ////////////////// VideoNo55: Section Intro   /////////////////////////////
    ////////////////// VideoNo56: Section Roadmap  /////////////////////////////
    ////////////////// VideoNo57: Setting up Prettier and VS Code  /////////////////////////////
    // const x = 23;
    // if (x === 23) console.log(23);
    
    ////////////////// VideoNo58: install NodeJs and Setting up a Dev Enviroment  /////////////////////////////
    // const calcAge = birthYear => 2025 - birthYear;
    // console.log(calcAge(1991));

    ////////////////// VideoNo59: Learning How to code  /////////////////////////////
    ////////////////// VideoNo60: Step to solve any  problem /////////////////////////////
    ////////////////// VideoNo61: Using Google , stackoverflow , MDN /////////////////////////////

    //PROBLEM: 
    // we work for a company building a smart home thermometer. Our most recent task is this: "given an array of
    //  temperature of the day , calculate the temperature amplitude.
    //  Keep in mind that sometimes there might be a sensor error".

    // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

    // 1) Understanding the problem 
    // --What is temp amplitude? Answer : difference between highest and lowest temp.
    // -- how to compute max and min temperature?
    // -- What's a sensor error? And What to do?

    // 2) Breaking up into sub-problems
    // -- how to ignore errors?
    // -- find max value in temp array
    // -- Find min value in temp array
    // -- Subtract min from max (amplitude) and return it

    // get max value 
    // const calcTempImplitude = function (temps) {
    //   let max= temps[0];
    //   let min= temps[0];
    //   for( let i = 1; i < temps.length; i++){

    //     if( typeof temps[i] !== 'number') continue;// explain continue: the continue statement skips the current iteration and moves to the next one
    //     if (temps[i] > max) max = temps[i];
    //     if (temps[i] < min) min = temps[i];

    //   }
    //   console.log(max, min);
    //   return max - min;
    // }


    // const  amplitude= calcTempImplitude(temperatures);
    // console.log(amplitude);


    //Problem 2:
     
    // Function should now receive 2 arrays of temps

    // 1) Understanding the problem
    // -- What 2 arrays, should we implement functionality twice? No! just merge two arrays

    // 2) Breaking up into sub-problems 
    // -- merge 2 arrays

    // const arr1 = [1, 2, 4];
    // const arr2 = [5, 6, 'c'];
    // const mergeArray = arr1.concat(arr2);
    // console.log(mergeArray);

    ////////////////// VideoNo62: Debugging  (Fixing Errors)  /////////////////////////////
    // What is Debugging.? Debugging is the process of identifying and fixing errors or bugs in the code.

    ////////////////// VideoNo63: Debugging  with the console and breakpoints /////////////////////////////

    // const measurekelvin = function (){
    //   const measurment = {
    //     type: 'temp',
    //     unit: 'celsius',
    //     // value: Number(prompt('Enter the temperature in celsius:'))
    //     value: 10, 
    //   }
    //   // console.table(measurment);
    //   // console.log(typeof measurment.value);10
    //   // const kelvin = Number(measurment.value) + 273;
    //   const kelvin = measurment.value + 273;
    //   return kelvin;
    // }

    // console.log(measurekelvin());


    //     const calcTempImplitude = function (t1, t2) {

    //   const temps= t1.concat(t2);
    //   // let max= temps[0];
    //   // let min= temps[0];
    //   let max= 0;
    //   let min= 0;
    //   for( let i = 0; i < temps.length; i++){

    //     if( typeof temps[i] !== 'number') continue;// explain continue: the continue statement skips the current iteration and moves to the next one
    //     if (temps[i] > max) max = temps[i];
    //     if (temps[i] < min) min = temps[i];

    //   }
    //   console.log(max, min);
    //   return max - min;
    // }


    // const  amplitude= calcTempImplitude([3, 4, 5],[7, 8, 9]);
    // console.log(amplitude);

    ////////////////// VideoNo64: CHALANGE#1 /////////////////////////////

    /*
     Given an array of forecasted maximum temprature, the thermometer display a string with these temprature.
     Example: [17, 21, 23] will print "... 17°C in 1 day, ... 21°C in 2 days, ... 23°C in 3 days... "

     Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
     Use the problem-solving framework: Understand the problem and break it up into sub-problems!

     TEST DATA 1 = [17, 21, 23];
     TEST DATA 2 = [12, 5, -5, 0, 4];

     1) Understanding the problem
     -- Array transformed to string, separated by ...
     -- What is the X days? Answer: index + 1

     2) Breaking up into sub-problems
     -- Transform array into string
     -- Transform each element to string with °C
     -- String needs to contain day (index + 1)
     -- Add ... between elements and start and end of string
     
    */

  //  let data1 = [17, 21, 23];
  //  let data2 = [12, 5, -5, 0, 4];

  // //   const printForecast = function(arr1){

  // //     let str;

  // //   for(let i = 0 ; i < arr1.length; i++){
  // //     str = `... ${arr1[i]}°C in ${i + 1} day ...`;

  // //   }
  // //   return str;
    
  // // }
  // //    console.log(printForecast([17]))

  // const printForecast = function(arr1){
  //   let str = '';
  //   for(let i = 0 ; i < arr1.length; i++){
  //     // str += `... ${arr1[i]}°C in ${i + 1} day `;
  //     str += `${arr1[i]}°C in ${i + 1} days ... `;
  //   }
  //   return str;
  // }

  // console.log('... '+ printForecast(data1));


    ////////////////// VideoNo65: The Rise of AI Tools (ChatGPT , Cursor, GitHub Copilot , etc) /////////////////////////////

    /*
       BEFORE YOU USE AI:
    1) .. you need to know how to code on your own.
         Fundamental skills are 100% essential!
    2) .. You need to be able to solve problem on your own .
    3) .. you need to have very critical thinking (AI code contains a suprising amount of bugs or bad code)
    4) .. you need to have curiosity and joy while coding

     ☝ Don't need use AI without knowing                                  Use AI as an Assisstant, not a replacement!
        what you're doing . Otherwise , AI             INSTEAD:            Save time on repetitive and boring tasks.
        will turn you into a terrible programmer!       ➡                 It's also great for learning!

        AI will help us , not replace us!
       

    */


    ////////////////// VideoNo64: CHALANGE#2 With AI /////////////////////////////

    /*
     Let's say you're building a time tracking application for freelancer. 
     At some point in building this app, you need a function that  receives
     daily work hours for a certain week and return:
     1.Total hours worked
     2. Average daily hours
     3. The day with most hours worked 
     4. Number of days worked
     5. Whether time week was full time (worked 35 hours or more)

     TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
    
    */

     function analyzeWorkWeek(dailyHours) {

      // Validate input
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error("Input must be an array of exactly 7 numbers (Monday to Sunday).");
  }
  
  // Days mapping for readability
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // 1. Total hours worked
  const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

  // 2. Average daily hours (rounded to 1 decimal place)
  const averageDaily = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // 3. The day with most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDay = days[dailyHours.indexOf(maxHours)];

  // 4. Number of days worked (> 0 hours)
  const daysWorked = dailyHours.filter(h => h > 0).length;

  // 5. Full-time check (35+ hours)
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDaily,
    maxDay,
    daysWorked,
    isFullTime
  };
}

     const weeklyHours= [7.5, 8, 6.5, 0, 8.5, 5, 0]

     const analysis = analyzeWorkWeek(weeklyHours);

     console.log(analysis);


     function sayHello(name) {
  console.log("Hello " + name);
}

function greetUser(callback) {
  callback("Alice"); // calling the function passed in
}

greetUser(sayHello); // Output: Hello Alice


//
if (new Date("2025-08-30T12:04:08") > new Date("2025-08-30T12:02:08")) {
  console.log("if The first date is after the second date.");
} else {
  console.log(" else The first date is not after the second date.");
}



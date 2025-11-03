'use strict'

//////////////////////////////////
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



/////////////////////////////////
//BANKIST APP 

// DATA
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3 , account4]
// console.log(accounts)



/////////////////////////////////////////////////////////////////////
//          FUNCTIONS

const displayMovement = function (movements, sorted){
  // console.log('display',movements)
    containerMovements.innerHTML= '';
    const sortMovement = movements.slice().sort((a,b)=> a-b)
    const move = sorted ? sortMovement : movements
    move.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML("afterbegin",html)
    });
}
//--------------------------------------

// SUM ALL DEPOSITED AND WITHDRAW BALANCES
const calcDepositSummary = function (acc){
  const incomes = acc.movements.filter(move => move > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent= ` ${incomes}€`;

  const outcome = acc.movements.filter(move => move < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent= `${Math.abs(outcome)}€`;

  const interest = acc.movements
  .filter(move => move > 0)
  .map(mov => (mov * acc.interestRate) / 100)
  .filter(interest => interest >= 1 )
  .reduce((acc, cur, i, arr) => acc + cur, 0);
  labelSumInterest.textContent= `${interest}€`;
}
// ---------------------------------------------------
// CURRENT USER ALL TOTAL BALANCE
const  calcDisplayBalance = function (acc){
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  // console.log('display balance',displayCurrentAccountBalance)
  labelBalance.textContent =`${acc.balance}€`

}

// -------------------------------------------------------
//  User names first digit e.g(shahid ullah khan)=> (suk)
const createUserNames = function(acc) {
    // here add one key in object (acc.userName)
    acc.forEach(function(acc){
         acc.userName = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
    })
};
createUserNames(accounts);

// ----------------------------------------------------
// UPDATE UI 
const updateUI = function (currentAccount) {
  // Display Movement
displayMovement(currentAccount.movements);
// Display balance
calcDisplayBalance(currentAccount);
// Display Summary
calcDepositSummary(currentAccount);
}

// -------------------------------------------------------

// LongIn EventHandler Function
let currentAccount;
btnLogin.addEventListener('click', function(e){
e.preventDefault();

currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value )
if(!currentAccount){
   return alert('your name is incorrect')
}
// if(currentAccount?.pin  === inputLoginPin.value)
if(currentAccount?.pin  === Number(inputLoginPin.value)){
       console.log('welcome')
}else{
 return alert('your password is incorrect')
}
// Display UI and message
labelWelcome.textContent=`Welcome back ${currentAccount.owner.split(' ')[0]}`
containerApp.style.opacity= 100;
inputLoginUsername.value = inputLoginPin.value = '';
inputLoginPin.blur();

updateUI(currentAccount)

});

// ------------------------------------------------
// balance transfer function
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc => acc.userName === inputTransferTo.value);
 
  if(amount > 0 && currentAccount.balance >= amount && recieverAccount?.userName !== currentAccount.userName){
    console.log(amount, recieverAccount)
    
    recieverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
    console.log(accounts);
    // empty input 
    inputTransferAmount.value = inputTransferTo.value ='';
    //upsate ui function
    updateUI(currentAccount)
  }
})

// ------------------------------------------------
// REQUEST LOAN METHOD 
btnLoan.addEventListener('click', function(e) {
 e.preventDefault();
const amount =inputLoanAmount.value;
console.log(amount * 0.1)
const percent =currentAccount.movements.some( move=> move >= amount * 0.1);
console.log(percent)
// if(amount > 0 && currentAccount.movements.some( move=> move >= amount/10)){// 10 percent
if(amount > 0 && currentAccount.movements.some( move=> move >= amount * 0.1)){ // 10percent

currentAccount.movements.push(Number(amount));
updateUI(currentAccount)
inputLoanAmount.value = '';
}

});

// ------------------------------------------------
 // Delet Current USER 
 btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.userName && Number(inputClosePin.value) === currentAccount.pin){
    const findIndex = accounts.findIndex(acc => acc.userName === inputCloseUsername.value  && acc.pin === Number(inputClosePin.value));
    // delete curren user
    accounts.splice(findIndex, 1); 
    console.log('user name and pin is ok', accounts);
    // empty Input 
    inputCloseUsername.value = inputClosePin.value = '';
    //Hide UI
    containerApp.style.opacity= 0;
  

  }
 })
// ------------------------------------------------
let sortedFalse =false;
btnSort.addEventListener('click', function(e){
      e.preventDefault();
  displayMovement(currentAccount.movements , !sortedFalse)
  sortedFalse = !sortedFalse;
})






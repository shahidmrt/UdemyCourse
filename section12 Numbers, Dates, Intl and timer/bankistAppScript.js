"use strict";

//////////////////////////////////
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////
//BANKIST APP

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2024-11-18T21:31:17.178Z",
    "2024-12-23T07:42:02.383Z",
    "2025-10-20T09:15:04.904Z",
    "2025-10-28T10:17:24.185Z",
    "2025-10-31T14:11:59.604Z",
    "2025-11-02T17:01:17.194Z",
    "2025-11-03T23:36:17.929Z",
    "2025-11-04T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE // pt-PT
  // currency: "PKR",
  // locale: "ur-PK", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];
let sortedFalse = false;

/////////////////////////////////////////////////////////////////////
//          FUNCTIONS

const formatMovementDate = function (date, local) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`; // almost 6 days
  if (daysPassed <= 30)
    return `${Math.round(daysPassed / 7)} week ago`; // almost 4 week
  else {
    return new Intl.DateTimeFormat(local).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovement = function (account, sorted) {
  containerMovements.innerHTML = "";
  const movements = account.movements;
  const combinedMovsDates = movements.map((mov, i) => ({
    movement: mov,
    movementDate: account.movementsDates.at(i),
  }));
  if (sorted) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach((obj, i) => {
    const { movement, movementDate } = obj;
    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, account.locale);
    const type = movement > 0 ? "deposit" : "withdrawal";
    const formatedMov = formatCurrency(
      movement,
      account.locale,
      account.currency
    );
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
//--------------------------------------

// SUM ALL DEPOSITED AND WITHDRAW BALANCES
const calcDepositSummary = function (acc) {
  const incomes = acc.movements
    .filter((move) => move > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const outcome = acc.movements
    .filter((move) => move < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter((move) => move > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, cur, i, arr) => acc + cur, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};
// ---------------------------------------------------
// CURRENT USER ALL TOTAL BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

// -------------------------------------------------------
//  User names first digit e.g(shahid ullah khan)=> (suk)
const createUserNames = function (acc) {
  // here add one key in object (acc.userName)
  acc.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);

// ----------------------------------------------------
// UPDATE UI
const updateUI = function (currentAccount) {
  // Display Movement
  displayMovement(currentAccount, false);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display Summary
  calcDepositSummary(currentAccount);
};

//-------------------------------------------------------

//______________________Countdown Time Function________________________

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // When 0 second, stop timer and Loged User
    if (time === 0) {
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
      clearInterval(timer);
    }
    // Decrease Is
    //  time = time - 1; //OR
    time--;
  };
  // set time to 5 minut
  let time = 100;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// ________________________LOGIN____________________
let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (!currentAccount) {
    return alert("your name is incorrect");
  }
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      day: "numeric",
      year: "numeric", //OR another Option of the year
      month: "long",
      // weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // month/day/year => US

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Timer
    if (timer) clearInterval(timer);
    // call to loged Timer function
    timer = startLogOutTimer();

    updateUI(currentAccount);
  } else {
    return alert("your password is incorrect");
  }
});

//-------------------------------------------------------
// ALWAYS FAKE LOGIN
// currentAccount = account1;
// containerApp.style.opacity = 100;
// updateUI(currentAccount);

// -----------------------------------------------------
// balance transfer function
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recieverAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAccount?.userName !== currentAccount.userName
  ) {
    // empty input
    inputTransferAmount.value = inputTransferTo.value = "";
    setTimeout(() => {
      recieverAccount.movements.push(amount);
      currentAccount.movements.push(-amount);
      // Add Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());
      recieverAccount.movementsDates.push(new Date().toISOString());
      //Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
      //UPDATE UI
      updateUI(currentAccount);
    }, 2500);
  }
});

// ------------------------------------------------
// Btn LOAN METHOD
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  console.log(amount * 0.1);
  const percent = currentAccount.movements.some((move) => move >= amount * 0.1);
  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    // 10percent
    setTimeout(() => {
      currentAccount.movements.push(+amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      //Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
      updateUI(currentAccount);
    }, 2500);
    inputLoanAmount.value = "";
  }
});

// ------------------------------------------------
// Delet Current USER
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const findIndex = accounts.findIndex(
      (acc) =>
        acc.userName === inputCloseUsername.value &&
        acc.pin === +inputClosePin.value
    );
    // delete curren user
    accounts.splice(findIndex, 1);
    console.log("user name and pin is ok", accounts);
    // empty Input
    inputCloseUsername.value = inputClosePin.value = "";
    //Hide UI
    containerApp.style.opacity = 0;
  }
});
// ------------------------------------------------
//// BTN MOVEMENTS SORT METHOD
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount, !sortedFalse);
  sortedFalse = !sortedFalse;
});

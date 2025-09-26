"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent)
  // let i = 1;
  // btnsOpenModal[i].addEventListener('click', function(){
  //     console.log('Button clicked', i);
  //     console.log(btnsOpenModal.length, i);
  // });
  btnsOpenModal[i].addEventListener("click", openModal);

  
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
 
// Handling keyboard events
document.addEventListener("keydown", function (e) {
    console.log("A keydown was pressed", e.key);
//   console.log("A keydown was pressed", e);
//   if (e.key === 'Escape'){
//     if(!modal.classList.contains('hidden')){
//         closeModal();
//     }
//   }
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// document.addEventListener("keypress", function (e) {
//   console.log("A keykeypress was pressed", e.key);
// });
// document.addEventListener("keyup", function (e) {
//   console.log("A keyup was pressed", e.key);
// });
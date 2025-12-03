'use strict';

const modal2 = document.querySelector('.modal');
const overlay2 = document.querySelector('.overlay');
const btnCloseModal2 = document.querySelector('.btn--close-modal');
const btnsOpenModal2 = document.querySelectorAll('.btn--show-modal');
const btnScrollTo2 = document.querySelector('.btn--scroll-to');
const section12 = document.querySelector('#section--1')
const nav2 = document.querySelector('.nav');
const tabs2 = document.querySelectorAll('.operations__tab');
const tabsContainer2 = document.querySelector('.operations__tab-container');
const tabsContent2 = document.querySelectorAll('perations__content');

/////////////////////////////////////////////
// Modal Window

// const openModal = function (e) {
//     console.log('openModal clicked')
//     e.preventDefault();
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function (e) {
//     e.preventDefault();
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };


// // btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);


////////////////////////// Video # 198  selectin, creating , deleting Elements

//// SELECT ELEMENT
// console.log(document.documentElement)
// console.log(document.head);
// console.log(document.body);

const allSections2 = document.querySelectorAll('.section');
// console.log(allSections2)
const header1 = document.querySelector('.header');

//// CREATING ELEMENT
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `we use cookied for improved  functionality and analytics.`
message.innerHTML = `we use cookied for improved  functionality and analytics.
<button class='btn btn--close-cookie'> Got it!</button>`;

// header1.prepend(message);// add first child 
// header1.append(message);// add last child 
// header1.append(message.cloneNode(true))

// header1.before(message);// before sibling
// header1.after(message);// after sibling

////DELETE ELEMENT
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//     message.remove();// new method
//     // message.parentElement.removeChild(message);// old method
// });

////////////////////////// Video # 199  STYLES , ATTRIBUTES AND CLASSES

// STYLE 
message.style.backgroundColor = '#37383d'; // ye style inline style set huta hai.
message.style.width= '90%'

// console.log(message.style.height)
// console.log(message.style.backgroundColor)
// console.log(getComputedStyle(message))
// console.log(getComputedStyle(message).color)

// message.style.height= getComputedStyle(message).height + 40 + 'px'; // now this is a string . then we convert to number
// message.style.height= Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // now this is a string . then we convert to number
// console.log(getComputedStyle(message).height)

// document.documentElement.style.setProperty('--color-primary', 'orangered') // root variable change 

//// ATTRIBUTES

const logo = document.querySelector('.nav__logo');
// console.log(logo.src)// this is already exist in js img object
// console.log(logo.getAttribute('src')); ///Non-Standard: this is not a standard attribute
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.designer); ///Non-Standard: this is not a standard attribute
// console.log(logo.getAttribute('designer')); ///Non-Standard: this is not a standard attribute
logo.setAttribute('company', 'Bankist');


const link = document.querySelector('.twitter-link');
// console.log(link.href)
// console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
// console.log(link2.href)
// console.log(link2.getAttribute('href'));

////Data ATTRIBUTE
// console.log(logo.dataset.versionNumber)// the data attribute convert to camelCase eg(data.version-number = dataset.versionNumber)

//// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c')

// Don't use = because the entire classes changed with this 
// logo.className ='box';


////////////////////////// Video # 200 : implementing Smooth Scrolling

btnScrollTo2.addEventListener('click', function(e){
    const s1coords = section12.getBoundingClientRect();
    console.log(s1coords);

    // console.log(e.target.getBoundingClientRect())
    // console.log('current scroll (X/Y)', window.pageXOffset, pageYOffset) // OR
    console.log('current scroll (X/Y)', window.scrollX, window.scrollY)
    // console.log('height/Width viewPort',
    //     document.documentElement.clientHeight,
    //     document.documentElement.clientWidth,
    // )

    //// Scrolling
    // window.scrollTo(s1coords.left, s1coords.top);
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //      s1coords.top + window.scrollY
    //     );
        // console.log('viewport',
        // s1coords.left + window.pageXOffset,
        //  s1coords.top + window.scrollY)

        //// OLD WAY
        //  window.scrollTo({
        //  left: s1coords.left + window.pageXOffset,
        //  top: s1coords.top + window.pageYOffset,
        //  behavior: 'smooth'
        // });

        //// MODERN WAY
        section12.scrollIntoView({behavior: 'smooth'})
})


////////////////////////// Video # 201 : TYPES OF EVENTS AND EVENT HANDLERS

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e){
//     alert('addEventListener: Great! you are reading the heading :D')
// })

// h1.onmouseenter =  function(e){
//     alert('addEventListener: Great! you are reading the heading :D')
// }
// const h1Func = function(e){
//     alert('addEventListener: Great! you are reading the heading :D')
//     h1.removeEventListener('mouseenter', h1Func)
// }

//  h1.addEventListener('mouseenter', h1Func)


////////////////////////// Video # 202 : theory : EVENT PROPAGATION: BUBBLING AND CAPTURING 
////////////////////////// Video # 203 : EVENT PROPAGATION PTACTICE 

//// Generate random color 

// const randomInt = (min, max)=> 
//     Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
// // console.log(randomColor(0, 255))

// document.querySelector('.nav__link').addEventListener('click', function(e){
//     e.preventDefault()
//     this.style.backgroundColor = randomColor();
//     console.log('Link', e.target, e.currentTarget)
//     // console.log(this === e.currentTarget);

//     // stop propagation;
//     // e.stopImmediatePropagation();
//     e.stopPropagation();

// })

// document.querySelector('.nav__links').addEventListener('click', function(e){
//     console.log('Linksssssss', e.target, e.currentTarget)
//     this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav').addEventListener('click', function(e){
//     console.log('Nav', e.target, e.currentTarget)
//     this.style.backgroundColor = randomColor();

// },
//  true  // byDefault is false means here nothing write then means false.
// )

////////////////////////// Video # 204 : EVENT Delegation. Implementing Page Navigation. (bankist app)
////////////////////////// Video # 205 : DOM TRAVERSING : DOM Traversing means can select an element through another element 

// const h1 = document.querySelector('h1');

// // Going downwards: Child
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes); // return Node  and Node can any thing 
// console.log(h1.children); // return only element

// h1.firstElementChild.style.color ='white';
// h1.lastElementChild.style.color ='orangered';

// Going upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header1').style.background = 'purple'
// h1.closest('.header1').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log('pre Sibling',h1.previousSibling)
// console.log('nextSibling',h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(ele){
//     if(ele !== h1) ele.style.transform =   `scale(0.5)`
    
// })


////////////////////////// Video # 206 : Building a Tabbed Components (bankist app);
////////////////////////// Video # 207 : Passing Arguments to Event Handlers (bankist app);
////////////////////////// Video # 208 : Implement a Sticky Navigation (bankist app);
////////////////////////// Video # 209 : A better way : The Intersection Observer API (bankist app);
const obsCallback = function (entries, observer) { 
    entries.forEach(entry => {
        // console.log(entry)
    })
};
const obsOptions = {
root : null, // null = viewport
threshold: 0.1, // 10% . means when 10% of the target is visible in the viewport the callback function will be called
threshold: [0, 0.2, 0.4, 0.6, 0.8, 1], // array of thresholds // and the every time the threshold is passed the callback function will be called
}// 0 means when the target is completely out of the viewport the callback function will be called
// 0.2 means when the target is 20% visible in the viewport the callback function will be called
// 1 means when the target is completely visible in the viewport the callback function will be called BUT HERE 100% means 100% of the target is visible in the viewport BUT HERE THE SECTION IS LARGE THEN 100% SCREEN  THEN 1 IS NOT REACHED

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section12);

////////////////////////// Video # 210 : Revealing Elements on Scroll  (bankist app)
////////////////////////// Video # 211 : fixing a small Scrolling Bug  (bankist app)
////////////////////////// Video # 212 : Lazy loading Image (bankist app)
////////////////////////// Video # 213 : Building a slider Component part 1 (bankist app)
////////////////////////// Video # 214 : Building a slider Component part 2 (bankist app)
////////////////////////// Video # 215 : Life Cycle DOM Events

document.addEventListener('DOMContentLoaded', function(e){
    console.log('HTML parsed and Dom tree built;', e)
});
window.addEventListener('load', function(e){
    console.log('page fully Loaded', e)
})
 //// Ask for user then 100% sure that close the tab
 ////e.g : user fill form there we use this functionality and so on.
// window.addEventListener('beforeunload',function(e){
// e.preventDefault();
// console.log("closeTab", e)
// e.returnValue = 'message';
// })

////////////////////////// Video # 216 : Efficient Script Loading: defer and async
//// DEFER AND ASYNC SCRIPT LOADING

// 1) REGULAR:
    // <script src="scriptsParactice.js"></script>
    // never use this in header 
  
// 2) ASYNC
    // <script async src="scriptsParactice.js"></script>

// 3) DEFER
    // <script defer src="scriptsParactice.js"></script>
      
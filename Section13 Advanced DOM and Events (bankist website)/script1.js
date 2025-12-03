'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/////////////////////////////////////////////
//----------------------- Modal Window

const openModal = function (e) {
    // console.log('openModal clicked')
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

////--------------------------------------targetAllSections
const allSections = document.querySelectorAll('.section');
// console.log(allSections)

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault()
    // console.log(e.target)
    // this.style.backgroundColor = randomColor();
    // Matching strategy
    if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        // console.log(id)
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'})
    }
});

/////////////-------------------------------------------------- Tabbed Component
// tabs.forEach(t => t.addEventListener('click', () => console.log('TaB'))) // this is bad pratice / if one hundrad or more tabs then one hundrads copies of this callback function  and thats simply slow down the page.
// now use event Delegation 
tabsContainer.addEventListener('click', function(e){
    e.preventDefault();
    const clicked = e.target.closest('.operations__tab');
    // console.log('clicked', clicked);
    
    //Guard clause
    if(!clicked) return;
    
    // Active Tab 
    tabs.forEach(t=> t.classList.remove('operations__tab--active'));
    // console.log(tabsContent)
    tabsContent.forEach(c=> c.classList.remove('operations__content--active'))
    clicked.classList.add('operations__tab--active');
    //  const tab = clicked.dataset.getAttribute('tab')

    // Active content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})

//----------------------------------- Menu fade animation
const handleOver = function(e) {
    // console.log(this)
 if (e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if(el !== link) {
                el.style.opacity = this;
            };
               logo.style.opacity = this;
        })
    }
};
  // Passing an "argument" into handler
nav.addEventListener('mouseover', handleOver.bind(0.5))
// nav.addEventListener('mouseout',function(e) {
    //     handleOver(e, 1)
    // })
    // OR
nav.addEventListener('mouseout', handleOver.bind(1))

////-------------------------------------- sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords)
//     window.addEventListener('scroll', function(){
//         // console.log(window.scrollY)
//         if(window.scrollY > initialCoords.top)
//            {
//               nav.classList.add('sticky')
//             } else { 
//               nav.classList.remove('sticky')
//             }
//     })

////-------------------------------------- sticky navigation: Intersection observer API 

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)

const stickyNav = function (entries) {
    const [entry] = entries;
    if(!entry.isIntersecting)// !entry.isIntersecting === false
         nav.classList.add('sticky')
        else nav.classList.remove('sticky');
}
// const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: '-90px'});
const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`});

headerObserver.observe(header)

// ------------------------------Reveal Sections
const sections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
    // const [entry] = entries;
    // console.log(entries)
    // console.log(entry)
    entries.forEach(entry =>{

        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target)
    })
}

const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15, });
sections.forEach(section =>{
     sectionObserver.observe(section);
     section.classList.add('section--hidden')}
    );

// ------------------Lazy Loading Image

const imgTargets = document.querySelectorAll('img[data-src]');
 const loadImg = function (entries, observer){
      const [entry] = entries;
    //   console.log(entry);
        if(!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', function() {
            entry.target.classList.remove('lazy-img')
        })
        observer.unobserve(entry.target)
 }
const imgObserver = new IntersectionObserver(loadImg, {root: null, threshold: 0.1, rootMargin:'-200px'})
imgTargets.forEach(img => 
    imgObserver.observe(img)
);

////-----------------------------------SLIDER 
const slider = function(){
const slider = document.querySelector('.slider');
// slider.style.transform= `scale(0.5) translateX(-850px)`;
// slider.style.overflow = `visible`
const slides = document.querySelectorAll('.slide');
let curSlide= 0;
let maxSlide = slides.length -1 ; // becuase the length not start with 0 
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
// 0, 100%, 200%, 300%.


////---------slider Dots
const createDots = function () {
    slides.forEach((_, i)=> {
        dotContainer.insertAdjacentHTML('beforeend', 
            `<button class='dots__dot' data-slide="${i}"></buttonc>`
        )
    })
}

////--- ActiveDots Function 
const activeDots = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot=> dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
}
// dots Clicked Function
dotContainer.addEventListener('click', function(e){
    // if(e.target.classList.contains('dots__dot')){
    //     const {slide} = e.target.dataset;
    //     goToSlide(slide)
    // }
    //// OR
   curSlide = Number(e.target.dataset.slide);
   goToSlide(curSlide);
   activeDots(curSlide);
})
//// main function next & pre slide
const goToSlide = function(slide){
    slides.forEach((s, i)=> 
        s.style.transform= `translateX(${100 * (i - slide)}%)`);
}
// Right Button clicked (next Slide)
const nextSlide = function(){
  if(curSlide === maxSlide) {
        curSlide = 0;
    }else {
        curSlide++;
    }
    goToSlide(curSlide)
    activeDots(curSlide);
};
// Left Button clicked  (prev slide)
const prevSlide = function(){
    // curSlide--;
    if(curSlide === 0){
        curSlide = maxSlide;
    } else{
        curSlide--;
    }
    goToSlide(curSlide)
    activeDots(curSlide);
}

btnRight.addEventListener('click', nextSlide)
//// curSlide=1;  -100%, 0%, 100%, 200%.
btnLeft.addEventListener('click', prevSlide)
////----keyBoard left & right Button press Function
document.addEventListener('keydown', function(e){
    // console.log(e)
    if(e.key === 'ArrowLeft'){
        prevSlide()
    }
    e.key === 'ArrowRight' && nextSlide(); // short cercuting
})
const init = function(){
goToSlide(0);
createDots();
activeDots(0);
}
init();
}
slider();












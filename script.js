// header
const MENU = document.getElementById('menuUl');

MENU.addEventListener('click', (event) => {
   MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active'); 
});
//scroll- header
 window.onscroll = function() {myFunction()};
let header = document.querySelector(".header");
let sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
// scrol active
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('.navigation');
  const links = document.querySelectorAll('#menuUl a');

  divs.forEach ((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  });
}

// BLACKPHONE
const vert = document.getElementById('VERT');
const horiz = document.getElementById('HORIZ');
const vert1 = document.getElementById('VERT1');
const horiz1 = document.getElementById('HORIZ1');


vert.addEventListener('click', (event) => {
   vert1.classList.toggle('display1'); 
}); 
vert1.addEventListener('click', (event) => { 
   vert1.classList.add('display1'); 
}); 

horiz.addEventListener('click', (event) => { 
   horiz1.classList.toggle('display1'); 
}); 
horiz1.addEventListener('click', (event) => { 
   horiz1.classList.add('display1'); 
}); 


// slider corusel corusel eto radost dlya nas!
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('s-active', direction);
  })
}

function showItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('s-active');
    isEnabled = true;
    if (currentItem==1) {
      document.querySelector('.slider').classList.add('blue');
    }
    else {
      document.querySelector('.slider').classList.remove('blue');
    }
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});
  // portfolio
const PORTFOLIO_MENU = document.getElementById('porfolio_head1');
const PORTFOLIO_GAL = document.querySelector('.portfolio__gallery');
const GALLERY = document.querySelectorAll('#gallery');


PORTFOLIO_MENU.addEventListener('click', event => {
  if (event.target.classList.contains('button') & !event.target.classList.contains('.activeButton')) {
    PORTFOLIO_GAL.querySelectorAll('gallery__img').forEach(el => el.classList.remove('activePortfolio'));
    PORTFOLIO_MENU.querySelectorAll('button').forEach(el => el.classList.remove('activeButton'));
    event.target.classList.add('activeButton');
    for (let i = 0; i < GALLERY.length; i++) {
      let IMG = GALLERY[i].children;
      for (let j = 0; j < IMG.length; j++) {
        let n = Math.floor(Math.random() * 12) +1 ;
        IMG[j].setAttribute('src', `./assets/portfolio${n}.png`);
      }
    }
  }
})
PORTFOLIO_GAL.addEventListener('click', event => {

  if (event.target.classList[0] == 'gallery__img') {
    PORTFOLIO_GAL.querySelectorAll('.gallery__img').forEach(el => el.classList.remove('activePortfolio'));
    event.target.classList.add('activePortfolio');
  }
})

// form
const SUBMIT = document.getElementById('form__submit');
const MESSAGE = document.getElementById('popup');
const CLOSE_BTN = document.getElementById('close-btn');
const TEMA = document.getElementById('popup-tema');
const DESCRIPTION = document.getElementById('popup-description'),
      FORM_SUBJECT = document.getElementById('form-subject'),
      FORM_DESC = document.getElementById('textarea');
      MANE = document.getElementById('mane');
      MANE1 = document.getElementById('mane1');
      pClass = document.getElementById('oppasity')
SUBMIT.addEventListener('click', event => {
  if (FORM_SUBJECT.value !== '' ) {
    TEMA.textContent = `Тема: ${FORM_SUBJECT.value}`; 
  }
  if (FORM_DESC.value !== '' ) {
    DESCRIPTION.textContent =  `Описание: ${FORM_DESC.value}`;
  }
  if (MANE.value == '')  {
    pClass.classList.remove('oppasity'); 
    MESSAGE.classList.remove('hidden')
  } 
  if (MANE.value !== '')  {
     pClass.classList.add('oppasity');
     MESSAGE.classList.remove('hidden');
}

if (MANE1.value == '')  {
  pClass.classList.remove('oppasity'); 
  MESSAGE.classList.remove('hidden');
} 
if (MANE1.value !== '')  {
   pClass.classList.add('oppasity');
   MESSAGE.classList.remove('hidden');
}

if (MANE.value == '' || MANE1.value == '') {
  MESSAGE.classList.add('hidden');
}
if (MANE1.value !== '' && MANE.value == '') {
  MESSAGE.classList.add('hidden');
  pClass.classList.remove('oppasity');  
}


  FORM_SUBJECT.value = '';
  FORM_DESC.value = '';
})

CLOSE_BTN.addEventListener('click', event => {
  TEMA.textContent = 'Без темы';
  DESCRIPTION.textContent = 'Без описания';
  MESSAGE.classList.add('hidden');
  document.getElementById("quote-form").reset();
})
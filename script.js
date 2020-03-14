// header
const MENU = document.getElementById('menuUl');

MENU.addEventListener('click', (event) => {
   MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active'); 
});

///

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

//slider black

const blackVertical = document.getElementById("blackVertical");
const blackHorisont = document.getElementById("blackHorisont");
const imgVertical = document.getElementById("imgVertical");
const imgHorizontal = document.getElementById("imgHorizontal");
let countVerticalPhone = 1;
let countHorizontalPhone = 1;

imgVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
imgHorizontal.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none")
    : (blackHorisont.style.display = "inline-block");
});
blackVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none") : (blackVertical.style.display = "inline-block");
});
blackHorisont.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none") : (blackHorisont.style.display = "inline-block");
});

// slider corusel corusel eto radost dlya nas!

const sliderLeft = document.getElementById("sliderLeft");
const sliderRight = document.getElementById("sliderRight");
const SLIDER = document.getElementById("slider");
const slide1 = document.getElementById("slide1");
const img = document.createElement("img");
let countClickArrow = 1;
img.setAttribute("src", "./assets/Slide-2.png",);

sliderLeft.addEventListener("click", event => {
    countClickArrow++;
    countClickArrow % 2 !== 0 ? img.replaceWith(slide1) : slide1.replaceWith(img);
  });
  sliderRight.addEventListener("click", event => {
    countClickArrow++;
    countClickArrow % 2 !== 0 ? img.replaceWith(slide1) : slide1.replaceWith(img);
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

SUBMIT.addEventListener('click', event => {
  if (FORM_SUBJECT.value !== '' ) {
    TEMA.textContent = `Тема: ${FORM_SUBJECT.value}`; 
  }
  if (FORM_DESC.value !== '' ) {
    DESCRIPTION.textContent =  `Описание: ${FORM_DESC.value}`;
  }

  MESSAGE.classList.remove('hidden');
  FORM_SUBJECT.value = '';
  FORM_DESC.value = '';
})

CLOSE_BTN.addEventListener('click', event => {
  TEMA.textContent = 'Без темы';
  DESCRIPTION.textContent = 'Без описания';
  MESSAGE.classList.add('hidden');
})
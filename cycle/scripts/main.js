'use strict'

/* Индекс слайда по умолчанию */
let slideIndex = 4;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
let timerId = setInterval(() => plusSlide(), 3000);
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".gallery__slider li");
    let dots = document.querySelectorAll(".gallery__dots--item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}


// scroll

let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling == false;
    });
  }
  // isScrolling = true;
}

document.addEventListener('DOMContentLoaded', scrolling, false);

let scrollAnim = document.querySelectorAll('.scrollAnim');

function scrolling(e) {
  for (let i = 0; i < scrollAnim.length; i++) {
    let scrollAnimItem = scrollAnim[i];

    if (isPartiallyVisible(scrollAnimItem)) {
      scrollAnimItem.classList.add("active");
    } else {
      scrollAnimItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
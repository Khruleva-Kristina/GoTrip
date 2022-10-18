// Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  startPosition: 1,
  items: 1,
  responsive: {
    481 : {
      items: 2,
    }, 
    600 : {
      margin: 20,
      items: 3,
    }, 
    1200 : {
      margin: 30,
      items: 3,
    } 
  }
});
// Go to the previous item
$('.slider__btn--prev').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel');
})
// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//Menu-burger
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuBurger = document.querySelector('.menu-icon');

//! classList.toggle - данный метод позволяет добавлять указанный в (...) класс элементу, если его изначально нет, а если заданный в скобках класс у элемента есть, то он его наоброт убирает, то есть в первом случае ведёт себя как метод classList.add, а во втором случае как метод classList.remove, то есть другими словами является своего рода переключателем.
navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile');
  menuBurger.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll');
};
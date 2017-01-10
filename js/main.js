var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    autoplay: 6000,
    a11y: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    keyboardControl: true,
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

( function () {
    "use strict";
    var btn = document.getElementById("btn-menu")
    var menu = document.querySelector(".page-nav")
    var ring = document.querySelector(".hamburger-svg__ring")
    var ham = document.querySelector(".hamburger")
    var items = [menu, ring, ham]
    var itemsClass = ["page-nav__opened", "hamburger-svg__ring-filled", "hamburger-opened"]

    btn.addEventListener("click", function(){
        
        if (ham.className === "hamburger") {
                btn.setAttribute("title", "Close menu")
            }
        else {
                btn.setAttribute("title", "Open menu")
            }
        
        if (menu.classList) {
            for (var i = 0; i<items.length; i++){
                items[i].classList.toggle(itemsClass[i])
            }
        }
        else {
            ( function () {
                for (var i = 0, ilen = items.length; i < ilen; i++) {
                    var reg = new RegExp('(\\s|^)' + itemsClass[i] + '(\\s|$)')
                    if (items[i].parentNode.nodeName !== "svg") {
                        if (ham.className === "hamburger") {
                            items[i].className += " " + itemsClass[i]
                        } else {
                            items[i].className = items[i].className.replace(reg, '')
                        }
                    } else {
                        if (ham.className === "hamburger") {
                            items[i].className.baseVal += " " + itemsClass[i]
                        } else {
                            items[i].className.baseVal = items[i].className.baseVal.replace(reg, '')
                        }
                    }
                }
            } () );
        }
        
    }, false)
} () );

//(function(){
//   var stickyNavTop = $('.page-header').offset().top;
// 
//   var stickyNav = function(){
//   var scrollTop = $(window).scrollTop();
// 
//   if (scrollTop > stickyNavTop) { 
//      $('.page-header').addClass('page-header__sticky');
//   } else {
//      $('.page-header').removeClass('page-header__sticky');
//    }
//   };
// 
// 
//   $(window).scroll(function() {
//      stickyNav();
//   });
//}());

window.onscroll = function() {
    var sticky = window.document.getElementById('page-header');
    if( document.body.scrollTop + document.documentElement.scrollTop > 0)
    {sticky.classList.add("page-header__sticky")}
    else sticky.classList.remove("page-header__sticky");
};
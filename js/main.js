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
    var header = document.getElementById('page-header')
    var ham = document.getElementById("hamburger")
    var logo = document.getElementById("page-logo")
    var items = [menu, ring, ham]
    var itemsClass = ["page-nav__opened", "hamburger-svg__ring-filled", "hamburger-opened"]
    
    function classToggle(checker, checkerClass, arr, arrClass){
        
        if (checker.classList) {
            for (var i = 0, ilen = arr.length; i < ilen; i++){
                arr[i].classList.toggle(arrClass[i])
            }
        }
        else {
            ( function () {
                for (var i = 0, ilen = arr.length; i < ilen; i++) {
                    var reg = new RegExp('(\\s|^)' + arrClass[i] + '(\\s|$)')
                    if (arr[i].parentNode.nodeName !== "svg") {
                        if (checker.className === '"'+checkerClass+'"') {
                            arr[i].className += " " + arrClass[i]
                        } else {
                            arr[i].className = arr[i].className.replace(reg, '')
                        }
                    } else {
                        if (checker.className === '"'+checkerClass+'"') {
                            arr[i].className.baseVal += " " + arrClass[i]
                        } else {
                            arr[i].className.baseVal = arr[i].className.baseVal.replace(reg, '')
                        }
                    }
                }
            } () );
        }
        
    }
    
    function sticky () {
        
        if ( document.body.scrollTop + document.documentElement.scrollTop > 0 ) {
            header.classList.add("page-header__sticky")
            ham.classList.add("hamburger__sticky")
            logo.setAttribute("src", "img/logo-dark.png")
        }
        else {
            header.classList.remove("page-header__sticky")
            ham.classList.remove("hamburger__sticky")
            logo.setAttribute("src", "img/logo.png")
        }
        
    }
    
    btn.addEventListener("click", function () {
        
        if (ham.className === "hamburger" || ham.className === "hamburger hamburger__sticky") {
            btn.setAttribute("title", "Close menu")
            header.classList.remove("page-header__sticky")
            ham.classList.remove("hamburger__sticky")
            logo.setAttribute("src", "img/logo.png")
            window.removeEventListener("scroll", sticky, false)
        }
        else {
            btn.setAttribute("title", "Open menu")
            window.addEventListener("scroll", sticky, false)
        }
        
        classToggle(ham, hamburger, items, itemsClass)
        
    }, false)
    
    window.addEventListener("scroll", sticky, false)
    
} () );

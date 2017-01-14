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

( function() {
    "use strict";
    var btn = document.getElementById("btn-menu")
    var menu = document.querySelector(".page-nav")
    var ring = document.querySelector(".hamburger-svg__ring")
    var header = document.getElementById('page-header')
    var ham = document.getElementById("hamburger")
    var logo = document.getElementById("page-logo")
    
    function classToggle( arr, arrClass ) {
        for ( var i = 0, ilen = arr.length; i < ilen; i++ ) {
            arr[i].classList.toggle( arrClass[i] )
        }
    }
    
    function classAdd( arr, arrClass ) {
        for ( var i = 0, ilen = arr.length; i < ilen; i++ ) {
            arr[i].classList.add( arrClass[i] )
        }
    }
    
    function classRemove( arr, arrClass ) {
        for ( var i = 0, ilen = arr.length; i < ilen; i++ ) {
            arr[i].classList.remove( arrClass[i] )
        }
    }
    
    function sticky() {
        var arr = [header, ham]
        var arrClass = ["page-header__sticky", "hamburger__sticky"]
        var dist = document.body.scrollTop + document.documentElement.scrollTop
        if ( dist > 0 ) {
            classAdd( arr, arrClass )
            logo.setAttribute( "src", "img/logo-dark.png" )
        }
        else {
            classRemove( arr, arrClass )
            logo.setAttribute( "src", "img/logo.png" )
        }
    }
    
    btn.addEventListener( "click", function () {
        var items = [menu, ring, ham]
        var itemsClass = ["page-nav__opened", "hamburger-svg__ring-filled", "hamburger-opened"]
        
        if ( ham.className === "hamburger" || ham.className === "hamburger hamburger__sticky" ) {
            btn.setAttribute( "title", "Close menu" )
            header.classList.remove( "page-header__sticky" )
            ham.classList.remove( "hamburger__sticky" )
            logo.setAttribute( "src", "img/logo.png" )
            window.removeEventListener( "scroll", sticky, false )
        }
        else {
            btn.setAttribute( "title", "Open menu" )
            window.addEventListener( "scroll", sticky, false )
        }
        
        classToggle( items, itemsClass )
    }, false )
    
    window.addEventListener( "scroll", sticky, false )
    
} () );

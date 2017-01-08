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
        
        if (menu.classList) {
            for (var i = 0; i<items.length; i++){
                items[i].classList.toggle(itemsClass[i])
            }
            // menu.classList.toggle("page-nav__opened");
            // ring.classList.toggle("hamburger-svg__ring-filled");
            // ham.classList.toggle("hamburger-opened");
        }
        else {
            var classes = menu.className.split(' ');
            var existingIndex = classes.indexOf("page-nav__opened");
            // var classesRing = ring.className.split(' ');
            // var existingIndexRing = classesRing.indexOf("hamburger-svg__ring-filled");
            // var classesHam = ham.className.split(' ');
            // var existingIndexHam = classesHam.indexOf("hamburger-opened");
            
            if (existingIndex >= 0) {
                    var x = "";
                    var classTab = "";
                    var index = "";
//                    classes.splice(existingIndex, 1);
//                    classesRing.splice(existingIndexRing, 1);
                    for (var i = 0; i < items.length; i++){
                        if(items[i].parentNode.nodeName === "svg"){
                            x = items[i].className.baseVal + '';
                            classTab = x.split(' ');
                            index = classTab.indexOf(itemsClass[i])
                            classTab.splice(index, 1)
                        }else{
                            x = items[i].className + '';
                            classTab = x.split(' ');
                            index = classTab.indexOf(itemsClass[i])
                            classTab.splice(index, 1)
                        }
                    }
            }
            else
                
                classes.push("page-nav__opened");
                classesRing.push("hamburger-svg__ring-filled");
                menu.className = classes.join(' ');
                ring.className = classesRing.join(' ');
        }
    }, false)
} () );
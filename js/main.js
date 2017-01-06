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
    var btn = document.getElementById("btn-menu")
    var menu = document.querySelector(".page-nav")
    btn.addEventListener("click", function(){
        if (menu.classList) {
            menu.classList.toggle("page-nav__opened");
        }
        else {
            var classes = menu.className.split(' ');
            var existingIndex = classes.indexOf("page-nav__opened");

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push("page-nav__opened");
                menu.className = classes.join(' ');
        }
        console.log(btn)
        console.log(menu)
    }, false)
} () );
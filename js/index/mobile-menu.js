var open_menu = document.querySelector(".top-header__open-mobile-menu");
var close_menu = document.querySelector(".top-header__close-mobile-menu");
var nav_menu = document.querySelectorAll(".top-header__nav, .top-header__btn-wrapper, .top-header__cart-link-wrapper");

open_menu.addEventListener("click", function (evt) {
    evt.preventDefault();

    for (var i = 0; i < nav_menu.length; ++i) {
        nav_menu[i].classList.remove("display--none");
    };
    
    close_menu.classList.remove("display--none");

    open_menu.classList.add("display--none");
});

close_menu.addEventListener("click", function(evt){
    evt.preventDefault();

    for (var i = 0; i < nav_menu.length; ++i) {
        nav_menu[i].classList.add("display--none");
    };

    close_menu.classList.add("display--none");

    open_menu.classList.remove("display--none");
});
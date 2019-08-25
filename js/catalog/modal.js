var order_product = document.querySelector(".making-process__button");
var popup = document.querySelector(".modal");


order_product.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
});

window.onclick = function(evt) {
    if (evt.target == popup) {
        popup.classList.remove("modal__show");
    }
}

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27) {
        if (popup.classList.contains("modal__show")){
            evt.preventDefault();
            popup.classList.remove("modal__show");
        }
    }
});
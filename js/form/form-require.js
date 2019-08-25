var order_form = document.querySelector(".order__form");
var user_name = order_form.querySelector("[name=name]");
var surname = order_form.querySelector("[name=surname]");
var tel = order_form.querySelector("[name=tel-number]");
var email = order_form.querySelector("[name=email]");


order_form.addEventListener("submit", function(evt){
    if (!user_name.value || !surname.value || !tel.value || !email.value) {
        evt.preventDefault();
        order_form.classList.remove("form__error");
        order_form.offsetWidth = order_form.offsetWidth;
        order_form.classList.add("form__error");
    }
});

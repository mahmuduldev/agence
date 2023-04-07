$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        pauseOnHover: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    $('.counterup-main h2').counterUp({
        delay: 10,
        time: 1000,
    });
    $('.review-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        prevArrow: ".icon-left",
        nextArrow: ".icon-right",
        centerMode: true,
        centerPadding: '0',
    });
})

var username = document.getElementById('username')
console.log(username);

var username_err = document.getElementById('username_err')

var email = document.getElementById('email')
console.log(email);

var email_err = document.getElementById('email_err')

var email_regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var phone = document.getElementById('phone')
console.log(phone);

var phone_err = document.getElementById('phone_err')

var phone_regx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

function signup(){
    if (username.value == "") {
        username_err.innerHTML = "Please input your name"
        username.style.border = "1px solid red"
        return false;
    }
    if (email.value == "") {
        email_err.innerHTML = "Please input your e-mail address"
        email.style.border = "1px solid red"
        return false;
    }
    if (!email_regx.test(email.value)){
        email_err.innerHTML = "Please input e-mail correctly"
        email.style.border = "1px solid red"
        return false;
    }
    if (phone.value == "") {
        phone_err.innerHTML = "Please input your phone number"
        phone.style.border = "1px solid red"
        return false;
    }
    if (!phone_regx.test(phone.value)){
        phone_err.innerHTML = "Please input phone number correctly"
        phone.style.border = "1px solid red"
    }
}

function valid(){
    if (username.value != "") {
        username_err.innerHTML = ""
        username.style.border = "1px solid green"
    }
    if (email.value != "") {
        email_err.innerHTML = ""
        email.style.border = "1px solid green"
    }
    if (phone.value != "") {
        phone_err.innerHTML = ""
        phone.style.border = "1px solid green"
    }
}

username.addEventListener('blur', valid)
email.addEventListener('blur', valid)
phone.addEventListener('blur', valid)
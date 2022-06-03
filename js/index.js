$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}

//Validation
function formValid() {
    let name = document.getElementById("i-1");
    let phone = document.getElementById("i-2");
    let email = document.getElementById("i-3");
    let message = document.getElementById("i-4");
    let sendBtn = document.getElementById("send_message")

    if(nameValid(name))
    {
        if(phoneValid(phone))
        {
            if(emailValid(email))
            {
                if(messageValid(message))
                {
                    sendBtn.disabled = false;
                    return
                }
            }
        }
    }

    sendBtn.disabled = true;
}

function nameValid(name) {
    if (name.value.length > 0)
    {
        return true;
    }

    alert("Name must be longer than 0 symbols");
    return false;
}

function phoneValid(phone) {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if (!phone.value.length > 5)
    {
        alert("Phone must be longer than 5 symbols");
        return false;
    }

    if(!regex.test(phone.value)){
        alert("Invalid phone number")
        return false;
    }else{
        return true;
    }
}

function emailValid(email) {
    let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(email.value.length <= 0){
        alert("Write email");
        return false;
    }

    if(!regex.test(String(email.value).toLowerCase())){
        alert("Invalid email");
        return false;
    }
    else {
        return true;
    }
}

function messageValid(message) {
    if (message.value != null)
    {
        return true;
    }

    alert("Write a message");
    return false;
}

//To up button
$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});

//Drop menu animation
/*
let $dropMenu = $('.drop_menu')
$(".compaing").on('click', function () {
    $dropMenu.addClass('menu_anim');

    if ($dropMenu.hasClass('menu_anim')){
        $dropMenu.removeClass('menu_anim');
    }
});*/

let btn = document.querySelector('.compaing');
let dropMenu = document.querySelector('.drop_menu');

btn.addEventListener("click", function () {
    dropMenu.classList.add('menu_anim');
    dropMenu.classList.add('active');
});

dropMenu.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler() {
    dropMenu.classList.remove('menu_anim');
    dropMenu.classList.remove('active');
}
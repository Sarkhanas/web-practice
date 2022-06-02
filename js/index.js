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
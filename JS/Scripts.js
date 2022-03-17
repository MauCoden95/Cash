var searchBtn = document.querySelector('#searchBtn');
var search = document.querySelector('.search-container');
var user = document.querySelector('#user');
var login = document.querySelector('.login-form-container');
var close = document.querySelector('.close');
var navbar = document.querySelector('.navbar');
var menu = document.querySelector('#menu');


searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
    searchBtn.classList.toggle('fa-times')
})



user.addEventListener('click' , () => {
    login.style.top = "0";
})


close.addEventListener('click', () =>{
    login.style.top = "-120%";
})


menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})




/*AOS - Animated On Scroll */
window.addEventListener('load', () => {
    AOS.init();
})




/*Slides Testimony*/
let slides = document.querySelectorAll('.slider-container');
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let index = 0;


nextBtn.addEventListener('click', () => {
    next();
});

prevBtn.addEventListener('click', () => {
    prev();
})

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}






/*Validation Form*/
let formContact = document.querySelector('.form-contact');

let nameInput = document.querySelector('#ipt-name');
let emailInput = document.querySelector('#ipt-email');
let phoneInput = document.querySelector('#ipt-phone');
let messageTextarea = document.querySelector('#textarea-message');

formContact.addEventListener('submit', (e) => {
    e.preventDefault();


   
    validateInputs();
    
    
    

    
});


function validateInputs() {
    isName();
    isEmail();
    isPhone();
    isMessage();

}



function isName() {
    let spanNameError = document.querySelector('.form-item-name span');
    let iconErrorName = document.querySelector('.form-item-name .fa-times-circle');
    let iconSuccessName = document.querySelector('.form-item-name .fa-exclamation-circle');
    const nameValue = nameInput.value;
    
    

    if (nameValue == '') {
        spanNameError.innerHTML = "*este campo es requerido";
        spanNameError.style.visibility = "visible";
        nameInput.style.borderColor = "#ff0000";
        iconErrorName.style.visibility = "visible";
        iconSuccessName.style.visibility = "hidden";
    }else if (isNaN(nameValue)) {
        nameInput.style.borderColor = "#27890c";
        iconSuccessName.style.visibility = "visible";
        iconErrorName.style.visibility = "hidden";
        spanNameError.style.visibility = "hidden";
        nameInput.value = "";
    }else{
        spanNameError.innerHTML = "*ingrese un nombre valido, no puede contener números";
        spanNameError.style.visibility = "visible";
        nameInput.style.borderColor = "#ff0000";
        iconErrorName.style.visibility = "visible";
        iconSuccessName.style.visibility = "hidden";        
    }


    
}


function isEmail() {
    let spanEmailError = document.querySelector('.form-item-email span');
    let iconErrorMail = document.querySelector('.form-item-email .fa-times-circle');
    let iconSuccessMail = document.querySelector('.form-item-email .fa-exclamation-circle');
    const emailValue = emailInput.value;

    if (emailValue == '') {
        spanEmailError.innerHTML = "*este campo es requerido";
        spanEmailError.style.visibility = "visible";
        emailInput.style.borderColor = "#ff0000";
        iconErrorMail.style.visibility = "visible";
        iconSuccessMail.style.visibility = "hidden";
    }else if (((emailValue).split('')).includes('@')) {
        emailInput.style.borderColor = "#27890c";
        iconSuccessMail.style.visibility = "visible";
        iconErrorMail.style.visibility = "hidden";
        spanEmailError.style.visibility = "hidden";
        emailInput.value = "";
    }else{
        spanEmailError.innerHTML = "*ingrese una direccion de correo valida";
        spanEmailError.style.visibility = "visible";
        emailInput.style.borderColor = "#ff0000";
        iconErrorMail.style.visibility = "visible";
        iconSuccessMail.style.visibility = "hidden";
    }
}






function isPhone() {
    
    let spanPhoneError = document.querySelector('.form-item-phone span');
    let iconErrorPhone = document.querySelector('.form-item-phone .fa-times-circle');
    let iconSuccessPhone = document.querySelector('.form-item-phone .fa-exclamation-circle');
    const phoneValue = phoneInput.value;

    if (phoneValue == "") {
        spanPhoneError.innerHTML = "*este campo es requerido";
        spanPhoneError.style.visibility = "visible";
        phoneInput.style.borderColor = "#ff0000";
        iconErrorPhone.style.visibility = "visible";
        iconSuccessPhone.style.visibility = "hidden";
    }else if (isNaN(phoneValue)) {
        spanPhoneError.innerHTML = "*ingrese un numero de telefono valido, no puede contener letras";
        spanPhoneError.style.visibility = "visible";
        phoneInput.style.borderColor = "#ff0000";
        iconErrorPhone.style.visibility = "visible";
        iconSuccessPhone.style.visibility = "hidden";
    }else{
        phoneInput.style.borderColor = "#27890c";
        iconSuccessPhone.style.visibility = "visible";
        iconErrorPhone.style.visibility = "hidden";
        spanPhoneError.style.visibility = "hidden";   
        phoneInput.value = "";
    }


    
}


function isMessage() {
    let spanMessageError = document.querySelector('.form-item-message span');
    let iconErrorMessage = document.querySelector('.form-item-message .fa-times-circle');
    let iconSuccessMessage = document.querySelector('.form-item-message .fa-exclamation-circle');
    const messageValue = messageTextarea.value;


    if (messageValue == "") {
        spanMessageError.innerHTML = "*este campo es requerido";
        spanMessageError.style.visibility = "visible";
        messageTextarea.style.borderColor = "#ff0000";
        iconErrorMessage.style.visibility = "visible";
        iconSuccessMessage.style.visibility = "hidden";
    }else{
        messageTextarea.style.borderColor = "#27890c";
        iconSuccessMessage.style.visibility = "visible";
        iconErrorMessage.style.visibility = "hidden";
        spanMessageError.style.visibility = "hidden"; 
        messageTextarea.value = "";  
    }
}
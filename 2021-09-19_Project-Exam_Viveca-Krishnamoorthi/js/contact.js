const form = document.querySelector("#contact-form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const button = document.querySelector("button");
const submitMessage = document.querySelector("#submit-message");


form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const nameValue = name.value;

    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
        nameHasError = false;
    } else {
        nameError.style.display = "block";
        nameHasError = true;
    }

    const emailValue = email.value;

    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailHasError = true;
    }

    const messageValue = message.value;

    if (validateLength(messageValue, 10) === true) {
        messageError.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageHasError = true;
    }

    if (nameHasError === true || emailHasError === true || messageHasError === true) {
        submitMessage.innerHTML = "Please check that your information is correct";
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
        submitButton.innerHTML = `Message sent <i class="
        fas fa-check message-sent-icon"></i>`;
        submitButton.style.color = "rgb(0, 122, 61)";
    }
}

function validateLength(value, lengthCheck) {
    const trimValue = value.trim();

    if (trimValue.length >= lengthCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}
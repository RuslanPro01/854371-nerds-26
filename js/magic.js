// JavaScript Document
var button = document.querySelector(".WriteUs");
var modalPopUp = document.querySelector(".popUp");
var closePopUp = modalPopUp.querySelector("input.popUpExit");
var form = modalPopUp.querySelector("form");
var flName = modalPopUp.querySelector("[name=FLName]");
var email = modalPopUp.querySelector("[name=eMail]");
var textArea = modalPopUp.querySelector("[name=comment]");
//var submitForm = modalPopUp.querySelector("[type=submit]");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.add("popUpShow");
    modalPopUp.classList.add("popupOpenAnimate");
    flName.focus();
});

closePopUp.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.add("popupClose");
    modalPopUp.classList.remove("popUpShow");
    modalPopUp.classList.remove("popupOpenAnimate");
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        if (modalPopUp.classList.contains("popUpShow")) {
            e.preventDefault();
            modalPopUp.classList.remove("popUpShow");
            modalPopUp.classList.remove("popupOpenAnimate")
        }
    }
});

form.addEventListener("submit", function (evt) {
    if (!flName.value || !email.value || !textArea.value) {
    evt.preventDefault();
    modalPopUp.classList.add("popupClose");
    }
});
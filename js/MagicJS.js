// JavaScript Document
var button = document.querySelector(".WriteUs");
var modalPopUp = document.querySelector(".popUp");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.add(".popUpShow")
});
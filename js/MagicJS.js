// JavaScript Document
var button = document.querySelector(".WriteUs");
var modalPopUp = document.querySelector(".popUp");
var closePopUp = modalPopUp.querySelector("input.popUp_exit");
var flName = modalPopUp.querySelector("[name=FLName]");
var eMail = modalPopUp.querySelector("[name=eMail]");
var tArea = modalPopUp.querySelector("[name=comment]");
var Form = modalPopUp.querySelector("form");
var storageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("flName");
} catch (err) {
    storageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.add("popUpShow");
});

closePopUp.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.remove("popUpShow");
});

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      if(modalPopUp.classList.contains("popUpShow")) {
        e.preventDefault();
        modalPopUp.classList.remove("popUpShow");
      }
    }
  });

flName.focus();

if (storage) {
    flName.value = storage;
    eMail.focus();
} else {
    flName.focus();
}

if (storage) {
    flName.value = storage;
}

Form.addEventListener("submit", function (evt) {
    if (!flName.value || !eMail.value || !tArea.value) {
        evt.preventDefault();
        console.log('Нужно ввести логин, e-mail и написать письмо');
    } else {
        if (storageSupport) {
            localStorage.setItem("fLName", flName.value);
        }
    }
});
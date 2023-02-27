"use strict";

//Ẩn thông tin cá nhân
const emailEle = document.getElementById("email");
const btnsRegister = document.getElementById("btns-register");

btnsRegister.addEventListener("click", function () {
  let isValid = checkValidate();

  if (isValid == true) {
    document.querySelector("#chitiet").classList.remove("hide");
    document.querySelector("#forms").remove("forms");
  }
});

function checkValidate() {
  let emailValue = emailEle.value;

  let isCheck = true;

  if (emailValue == "") {
    alert("Khong duoc de trong");
    isCheck = false;
  } else if (!isEmail(emailValue)) {
    alert("Khong dung dinh dang");
    isCheck = false;
  }

  return isCheck;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Thong tin nghe nghiep
let buttons = document.querySelectorAll(".show");
let parent, chitiet;
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let parent = button.closest(".box-info");
    let chitiet = parent.querySelector(".chitiet");
    if (chitiet.classList.contains("an")) {
      chitiet.classList.remove("an");
      button.innerHTML = "⬆ Less more";
    } else {
      chitiet.classList.add("an");
      button.innerHTML = "⬇ Show more";
    }
  });
});

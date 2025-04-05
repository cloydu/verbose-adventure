const closeMenu = document.getElementById("closeMenu")
const openMenu = document.getElementById("menu")
const contMenu = document.getElementById("menuCont")

openMenu.addEventListener("click", function () {
    contMenu.style.display = "flex"
})

closeMenu.addEventListener("click", function () {
    contMenu.style.display = "none"
})

var getState = document.querySelectorAll(".getState")
const closeState = document.getElementById("closeState")
const contState = document.getElementById("modalState")

getState.forEach(function (btn) {
    btn.addEventListener("click", function () {
        contState.style.display = "flex"
    })
})

closeState.addEventListener("click", function () {
    contState.style.display = "none"
})

const sendInfo = document.getElementById("sendInfo")

sendInfo.addEventListener("click", function () {
    localStorage.setItem("Фамилия", document.getElementById("firstName").value);
    localStorage.setItem("Имя", document.getElementById("secondName").value);
    localStorage.setItem("Отчество", document.getElementById("thirdName").value);
    localStorage.setItem("Дата рождения", document.getElementById("birthDay").value);
    localStorage.setItem("Номер телефона", document.getElementById("numberPhone").value);
    localStorage.setItem("Электронная почта", document.getElementById("eMail").value);
    localStorage.setItem("Серия и номер паспорта", document.getElementById("passport").value);
})

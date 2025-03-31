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
    console.log(
        document.getElementById("firstName").value,
        document.getElementById("secondName").value,
        document.getElementById("thirdName").value,
        document.getElementById("birthDay").value,
        document.getElementById("numberPhone").value,
        document.getElementById("eMail").value,
        document.getElementById("passport").value,
    )
})

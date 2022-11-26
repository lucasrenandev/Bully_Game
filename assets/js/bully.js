// Scroll
const button = document.getElementById("button")
button.addEventListener("click", function() {
    window.scrollTo(0, 0)
})

document.addEventListener("scroll", Hidden)
function Hidden() {
    if(window.scrollY > 600) {
        button.style.display = "flex"
    }
    else {
        button.style.display = "none"
    }
}
Hidden()

// Responsive menu
const menu = document.querySelector(".menu")
const menuImage = document.querySelector(".menu img")
const navegation = document.querySelector("nav ul")

menu.addEventListener("click", responsiveMenu)
function responsiveMenu() {
    
    navegation.classList.toggle("active")

    if(menuImage.getAttribute("src") === "assets/images/open.svg") {
        menuImage.setAttribute("src", "assets/images/close.svg")
    }
    else {
        menuImage.setAttribute("src", "assets/images/open.svg")
    }
}
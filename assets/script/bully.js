
const button = document.getElementById("button")

button.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener("scroll", Hidden)

function Hidden() {

    if(window.scrollY > 1200) {
        button.style.display = "flex"
    }
    else {
        button.style.display = "none"
    }
}

Hidden()
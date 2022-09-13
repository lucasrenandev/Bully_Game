
/* == SCRIPT PARA O SCROLL DOS LINKS DE NAVEGAÇÃO == */
const menuItems = document.querySelectorAll("nav a")
menuItems.forEach(item => {
    item.addEventListener("click", scrollId_OnClick)
})

/* rolagem dos links de navegação por ID */
function scrollId_OnClick(event) {
    event.preventDefault()
    const scroll = getScrollByHref(event.target) - 120
    scroll_Smooth(scroll)
}

/* scroll suave */
function scroll_Smooth(scroll) {
    window.scroll({
        top: scroll,
        behavior: "smooth"
    })
}

/* pegando os links de navegação por Href */
function getScrollByHref(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

/* == SCRIPT PARA O SCROLL DO BOTÃO == */
const button = document.getElementById("button")
button.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener("scroll", Hidden)
function Hidden() {
    if(window.scrollY > 1000) {
        button.style.display = "flex"
    }
    else {
        button.style.display = "none"
    }
}
Hidden()
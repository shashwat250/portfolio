/* SMOOTH SCROLL FOR NAV LINKS */

const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute("href"))

target.scrollIntoView({
behavior: "smooth"
})

})

})



/* SCROLL REVEAL ANIMATION */

const sections = document.querySelectorAll(".section")

function revealSections(){

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top
const windowHeight = window.innerHeight

if(sectionTop < windowHeight - 100){

section.style.opacity = "1"
section.style.transform = "translateY(0)"

}

})

}

window.addEventListener("scroll", revealSections)


/* INITIAL HIDDEN STATE */

sections.forEach(section => {

section.style.opacity = "0"
section.style.transform = "translateY(60px)"
section.style.transition = "all 0.8s ease"

})



/* NAVBAR BACKGROUND CHANGE */

const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {

if(window.scrollY > 100){

navbar.style.background = "#000"
navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)"

}
else{

navbar.style.background = "transparent"
navbar.style.boxShadow = "none"

}

})



/* IMAGE LIGHTBOX PREVIEW */

const images = document.querySelectorAll(".portfolio-pages img")

images.forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div")

overlay.style.position = "fixed"
overlay.style.top = "0"
overlay.style.left = "0"
overlay.style.width = "100%"
overlay.style.height = "100%"
overlay.style.background = "rgba(0,0,0,0.9)"
overlay.style.display = "flex"
overlay.style.alignItems = "center"
overlay.style.justifyContent = "center"
overlay.style.zIndex = "2000"

const fullImage = document.createElement("img")

fullImage.src = img.src
fullImage.style.maxWidth = "90%"
fullImage.style.maxHeight = "90%"
fullImage.style.borderRadius = "10px"

overlay.appendChild(fullImage)

document.body.appendChild(overlay)

overlay.addEventListener("click", () => {

overlay.remove()

})

})

})
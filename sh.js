/* =========================
   MOBILE NAVBAR (HAMBURGER)
   ========================= */

const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");

/* create hamburger button dynamically */
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "24px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none";
navbar.appendChild(menuBtn);

/* toggle menu */
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});

/* show hamburger on small screens */
function handleMenu() {
    if (window.innerWidth <= 768) {
        menuBtn.style.display = "block";
        nav.style.display = "none";
    } else {
        menuBtn.style.display = "none";
        nav.style.display = "flex";
    }
}

handleMenu();
window.addEventListener("resize", handleMenu);


/* =========================
   SMOOTH SCROLL NAVIGATION
   ========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

        /* close mobile menu after click */
        if(window.innerWidth <= 768){
            nav.style.display = "none";
        }

    });

});


/* =========================
   ACTIVE NAV LINK ON SCROLL
   ========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealSections = document.querySelectorAll(".section:not(.hero):not(#about)");

function reveal() {

    revealSections.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            section.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


/* =========================
   PORTFOLIO IMAGE LIGHTBOX
   ========================= */

const portfolioImages = document.querySelectorAll(".portfolio-pages img");

portfolioImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";

        const fullImage = document.createElement("img");
        fullImage.src = img.src;
        fullImage.style.maxWidth = "90%";
        fullImage.style.maxHeight = "90%";
        fullImage.style.borderRadius = "8px";

        overlay.appendChild(fullImage);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

    });

});
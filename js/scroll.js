const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.style.background = "rgba(5,5,5,0.72)";
        navbar.style.padding = "16px 35px";
    }
    else{
        navbar.style.background = "rgba(10,10,10,0.45)";
        navbar.style.padding = "18px 35px";
    }
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a")
.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        navLinks.classList.remove("active");
    }
});
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });
    navItems.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href")
        === `#${current}`){
            link.classList.add("active");
        }
    });
});
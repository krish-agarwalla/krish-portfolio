const cursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach(el => {

    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });

});
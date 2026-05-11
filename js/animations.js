gsap.from(".hero-subtitle",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.3
});

gsap.from(".hero-content h1",{
    y:80,
    opacity:0,
    duration:1.4,
    delay:0.5,
    ease:"power4.out"
});

gsap.from(".hero-content h2",{
    y:40,
    opacity:0,
    duration:1.2,
    delay:0.9
});

gsap.from(".hero-description",{
    y:40,
    opacity:0,
    duration:1.2,
    delay:1.1
});

gsap.from(".hero-buttons",{
    y:40,
    opacity:0,
    duration:1.2,
    delay:1.3
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

            element.style.transition =
                "all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)";
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
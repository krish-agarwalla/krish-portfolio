tsParticles.load("particles", {
    background: {
        color: "transparent"
    },
    particles: {
        number: {
            value: 35
        },
        color: {
            value: ["#c8a96b", "#f5f5f5"]
        },
        opacity: {
            value: 25
        },
        size: {
            value: {
                min: 1,
                max: 3
            }
        },
        move: {
            enable: true,
            speed: 0.6
        },
        links: {
            enable: false
        }
    },
    detectRetina: true
});
window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".global-candles",{
        x:moveX,
        y:moveY,
        duration:2,
        ease:"power3.out"
    });
});
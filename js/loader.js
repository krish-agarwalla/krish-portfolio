window.addEventListener("load", () => {

    const wandSound =
        document.getElementById("wand-sound");

    let audioUnlocked = false;

    const unlockAudio = () => {

        if(!audioUnlocked){

            wandSound.play()
            .then(() => {

                wandSound.pause();

                wandSound.currentTime = 0;

                audioUnlocked = true;

            })
            .catch(() => {});

        }

        document.removeEventListener(
            "click",
            unlockAudio
        );

        document.removeEventListener(
            "keydown",
            unlockAudio
        );

    };

    document.addEventListener(
        "click",
        unlockAudio
    );

    document.addEventListener(
        "keydown",
        unlockAudio
    );

    const tl = gsap.timeline();

    tl.to(".loader-top-text",{
        opacity:1,
        duration:1,
        letterSpacing:"10px"
    })

    .to(".loader-title",{
        opacity:1,
        y:0,
        duration:1.4,
        ease:"power3.out"
    })

    .to(".loader-line",{
        width:"280px",
        duration:1.2,
        ease:"power2.out"
    })

    .call(() => {

        if(audioUnlocked){

            wandSound.volume = 0.45;

            wandSound.currentTime = 0;

            wandSound.play();

        }

    })

    .to("#loader",{
        opacity:0,
        duration:1.3,
        delay:0.3,
        pointerEvents:"none"
    })

    .set("#loader",{
        display:"none"
    });

});
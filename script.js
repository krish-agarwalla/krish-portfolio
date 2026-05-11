const audioToggle = document.getElementById("audio-toggle");
const bgAudio = document.getElementById("bg-audio");
let isPlaying = false;
audioToggle.addEventListener("click", () => {
    if(!isPlaying){
        bgAudio.play();
        audioToggle.innerHTML = "✦";
        isPlaying = true;
    }
    else{
        bgAudio.pause();
        audioToggle.innerHTML = "♫";
        isPlaying = false;
    }
});
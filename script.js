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
async function updateVisitorCount(){
    try{
        const response = await fetch(
            "https://api.counterapi.dev/v2/krish-agarwallas-team-4065/wizard-archive-visits/up"
        );
        const data = await response.json();
        document.getElementById("visitor-count")
        .innerText = data.data.up_count;
    }
    catch(error){
        document.getElementById("visitor-count")
        .innerText = "--";
    }
}
updateVisitorCount();
let typedText = "";
window.addEventListener("keydown", (e) => {
    typedText += e.key.toLowerCase();
    if(typedText.includes("lumos")){
        document.body.style.filter =
            "brightness(1.15)";
        setTimeout(() => {
            document.body.style.filter =
                "brightness(1)";
        },1000);
        typedText = "";
    }
});
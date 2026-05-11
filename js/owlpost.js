const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    formData.append("_captcha", "false");
    try{
        const response = await fetch(
            "https://formsubmit.co/ajax/krishagarwalla24@gmail.com",
            {
                method:"POST",
                body:formData
            }
        );
        if(response.ok){
            formMessage.innerHTML =
                "✦ Owl delivered successfully.";
            formMessage.style.color = "#c8a96b";
            contactForm.reset();
        }
        else{
            formMessage.innerHTML =
                "Something went wrong.";
            formMessage.style.color = "#ff6b6b";
        }
    }
    catch(error){
        formMessage.innerHTML =
            "Unable to send owl.";
        formMessage.style.color = "#ff6b6b";
    }
});
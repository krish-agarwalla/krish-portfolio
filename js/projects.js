const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(200,169,107,0.12),
                rgba(255,255,255,0.02)
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = `
            linear-gradient(
                rgba(255,255,255,0.03),
                rgba(255,255,255,0.01)
            )
        `;

    });

});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flowersContainer");
    const card = document.getElementById("card");
    const surpriseContainer = document.getElementById("surpriseContainer");
    const closeBtn = document.getElementById("closeBtn");
    const totalFlowers = 30;

    // Generar las flores/estrellas flotantes de fondo
    for (let i = 0; i < totalFlowers; i++) {
        createFlower();
    }

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const size = Math.random() * 15 + 10;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 5 + 4;
        const delay = Math.random() * 5;

        flower.style.animationDuration = `${duration}s`;
        flower.style.animationDelay = `${delay}s`;

        container.appendChild(flower);

        flower.addEventListener("animationiteration", () => {
            flower.style.left = `${Math.random() * 100}vw`;
        });
    }

    // Al hacer clic en la tarjeta principal, se oculta y muestra la sorpresa
    card.addEventListener("click", () => {
        card.style.display = "none";
        surpriseContainer.style.display = "flex";
    });

    // Al hacer clic en el botón "X", se oculta la sorpresa y regresa a la página principal
    closeBtn.addEventListener("click", () => {
        surpriseContainer.style.display = "none";
        card.style.display = "block";
    });
});

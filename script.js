document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flowersContainer");
    const card = document.getElementById("card");
    const surpriseContainer = document.getElementById("surpriseContainer");
    const totalFlowers = 25;

    // Crear las flores de fondo
    for (let i = 0; i < totalFlowers; i++) {
        createFlower();
    }

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const size = Math.random() * 20 + 15;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 6 + 4;
        const delay = Math.random() * 5;

        flower.style.animationDuration = `${duration}s`;
        flower.style.animationDelay = `${delay}s`;

        container.appendChild(flower);

        flower.addEventListener("animationiteration", () => {
            flower.style.left = `${Math.random() * 100}vw`;
        });
    }

    // Acción al hacer clic en la tarjeta
    card.addEventListener("click", () => {
        card.style.display = "none"; // Oculta la tarjeta del mensaje
        surpriseContainer.style.display = "flex"; // Muestra la imagen del perrito sobre fondo negro
    });
});

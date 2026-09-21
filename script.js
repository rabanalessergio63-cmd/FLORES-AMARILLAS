document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flowersContainer");
    const totalFlowers = 25; // Cantidad de flores en pantalla

    for (let i = 0; i < totalFlowers; i++) {
        createFlower();
    }

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Tamaños aleatorios para darle profundidad
        const size = Math.random() * 20 + 15; // Entre 15px y 35px
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

        // Posición horizontal aleatoria
        flower.style.left = `${Math.random() * 100}vw`;

        // Duración y retraso aleatorios para que la animación sea natural
        const duration = Math.random() * 6 + 4; // Entre 4 y 10 segundos
        const delay = Math.random() * 5; // Retraso inicial

        flower.style.animationDuration = `${duration}s`;
        flower.style.animationDelay = `${delay}s`;

        container.appendChild(flower);

        // Reiniciar la flor cuando termine su animación para un bucle infinito
        flower.addEventListener("animationiteration", () => {
            flower.style.left = `${Math.random() * 100}vw`;
        });
    }
});

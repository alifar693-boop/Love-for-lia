const button = document.getElementById("startBtn");
const message = document.getElementById("loveMessage");

button.addEventListener("click", () => {
    message.classList.remove("hidden");
    button.innerHTML = "❤️ I Love You Lia ❤️";

    for (let i = 0; i < 40; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = window.innerHeight;

    const interval = setInterval(() => {
        y -= 3;
        heart.style.top = y + "px";
        heart.style.transform = `translateX(${Math.sin(y / 30) * 20}px)`;

        if (y < -50) {
            clearInterval(interval);
            heart.remove();
        }
    }, 20);
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts");

let scale = 1;

noBtn.addEventListener("click", () => {
    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>🎉 JAAAAAA!! 🎉</h1>
            <p>Ik wist het 😍💖</p>
        </div>
    `;
});

// hartjes genereren
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

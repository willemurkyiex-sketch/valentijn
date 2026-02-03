const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsBg = document.querySelector(".background-hearts");

let scale = 1;

// Nee vlucht weg bij hover
noBtn.addEventListener("mouseenter", () => {
    scale += 0.25;
    yesBtn.style.transform = `scale(${scale})`;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
});

// Ja aangeklikt
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="card">
            <h1 style="color:#ff4d88;">🎉 JAAAAA!! 🎉</h1>
            <p>Ik ben zo blij 😍💖</p>
        </div>
    `;
});

// Zwevende hartjes
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = Math.random() > 0.5 ? "💗" : "😻";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 14 + "px";
    heartsBg.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

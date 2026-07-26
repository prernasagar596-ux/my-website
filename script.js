const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hearts = document.getElementById("hearts");

window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
};

startBtn.onclick = () => {
    document.getElementById("scene1").scrollIntoView({
        behavior: "smooth"
    });
};

let playing = false;

musicBtn.onclick = () => {
    if (playing) {
        music.pause();
        musicBtn.innerHTML = "🎵";
    } else {
        music.play();
        musicBtn.innerHTML = "⏸";
    }
    playing = !playing;
};

function createHeart() {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 300);

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

yesBtn.onclick = () => {

    for (let i = 0; i < 80; i++) {

        setTimeout(createHeart, i * 60);

    }

    alert("💖 Yayyyyy!! I Love You Forever ❤️🥹");

    document.querySelector(".ending").scrollIntoView({
        behavior: "smooth"
    });

};

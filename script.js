const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const teddy = document.querySelector(".teddy-container");
const banner = document.getElementById("loveBanner");
const heartsContainer = document.querySelector(".hearts");

/* =========================
   FLOATING HEARTS (always)
========================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

/* =========================
   YES BUTTON CLICK
========================= */
yesBtn.addEventListener("click", () => {
  teddy.style.display = "none";

  // Small cinematic delay
  setTimeout(() => {
    banner.style.display = "block";
  }, 400);

  // Typing effect
  const text = "I LOVE YOU 💖";
  message.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    if (i < text.length) {
      message.textContent += text[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, 120);

  // Celebration heart burst
  for (let i = 0; i < 60; i++) {
    createHeart();
  }
});

/* =========================
   NO BUTTON MISCHIEF 😈
========================= */
const noTexts = [
  "NO 💔",
  "Are you sure? 😏",
  "Think again 🙃",
  "Oops 😌",
  "You can't say no 😈",
  "Nice try 😂"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];
});

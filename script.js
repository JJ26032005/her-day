const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const teddy = document.querySelector(".teddy-container");
const banner = document.getElementById("loveBanner");
const heartsContainer = document.querySelector(".hearts");

// Floating hearts
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

// YES click
yesBtn.addEventListener("click", () => {
  teddy.style.display = "none";
  banner.style.display = "block";
  message.textContent = "YEEEEEEEEEE!!!💖";
});

// NO runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

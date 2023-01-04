document.getElementById("m-btn").addEventListener("click", () => {
  const mpCard = document.getElementById("mp-card");
  mpCard.classList.add("m-2");
  document.getElementById("m-description").innerText = "0.5rem";
});

document.getElementById("p-btn").addEventListener("click", () => {
  const mpCard = document.getElementById("mp-card");
  mpCard.classList.add("p-2");
  document.getElementById("p-description").innerText = "0.5rem";
});

document.getElementById("reset-btn").addEventListener("click", () => {
  const mpCard = document.getElementById("mp-card");
  mpCard.classList.remove("p-2");
  mpCard.classList.remove("m-2");
  document.getElementById("m-description").innerText = "0";
  document.getElementById("p-description").innerText = "0";
});

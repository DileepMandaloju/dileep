window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");

document.querySelectorAll(".screenshot-grid img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

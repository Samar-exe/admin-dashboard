let stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    star.classList.toggle("starred");
  });
});

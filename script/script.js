const openBtn = document.querySelector("#open-btn");
card = document.querySelector(".card");
closeBtn = document.querySelector(".close-btn");
loginLink = document.querySelector(".loginLink");
registerLink = document.querySelector(".registerLink");
containerForm = document.querySelector(".container-form");
openBtn.addEventListener("click", () => {
  card.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  card.classList.remove("show");
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  containerForm.classList.add("show-register");
});
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    containerForm.classList.remove("show-register");
});
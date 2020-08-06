const rope = document.querySelector(".rope");
const bulb = document.querySelector("#form-bulb");
const body = document.querySelector("body");

rope.addEventListener("click", () => {
  bulb.classList.toggle("hideBulb");
  body.classList.toggle("dark-background");
})

const buttonToMain = document.querySelector("#button-to-main");

buttonToMain.addEventListener("click", () => {
  location.href = "/main";
});


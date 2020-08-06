const rope = document.querySelector(".rope");
const bulb = document.querySelector("#form-bulb");

rope.addEventListener("click", () => {
  bulb.classList.toggle("hideBulb");
})

const buttonToMain = document.querySelector("#button-to-main");

buttonToMain.addEventListener("click", () => {
  location.href = "/main";
});


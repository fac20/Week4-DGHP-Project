const buttonToMain = document.querySelector("#button-to-main");

buttonToMain.addEventListener("click", () => {
  location.href = "/main";
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const http = require("http");

// function to request information of the text file
const myRequest = (url, cb) => {
  return new Promise((resolve, reject) => {
    http
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          const body = JSON.parse(data);
          const statusCode = response.statusCode;
          resolve({ statusCode, body });
        });
      })
      .on("error", reject);
  });
};

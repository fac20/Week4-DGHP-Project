const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const mainHandler = require("./handlers/mainHandler");
const submitHandler = require("./handlers/submitHandler");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    homeHandler(request, response);
    // console.log("router");
  } else if (url === "/main") {
    console.log("url-ref", url);
    // blogPostHandler(request, response);
    mainHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitHandler(request, response);
  }
}

module.exports = router;

const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const mainHandler = require("./handlers/mainHandler");

function router( request, response) {
    const url = request.url;
    if (url === "/"){
        homeHandler(request, response);
        // console.log("router");
    } else if (url === "/main") {
        console.log("url-ref", url);
        mainHandler(request, response)
    } else if (url.includes("public")) {
        publicHandler(request, response);
    }
}

module.exports = router;
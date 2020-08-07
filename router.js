const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const mainHandler = require("./handlers/mainHandler");
const submitHandler = require("./handlers/submitHandler");

function router(request, response) {
    const url = request.url;
    const method = request.method;

    if (url === "/") {
        homeHandler(request, response);
    } else if (url === "/main") {
        mainHandler(request, response);
    } else if (url.includes("public")) {
        publicHandler(request, response);
    } else if (url === "/submit" && method === "POST") {
        submitHandler(request, response);
    } else {
        response.writeHead(404, {
            "content-type": "text/html"
        });
        response.end("<h1>Sorry nothing seems to be here!</h1>")
    }
}

module.exports = router;
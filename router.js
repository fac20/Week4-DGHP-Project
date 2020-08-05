const homeHandler = require("./handlers/homeHandler");

function router( request, response) {
    const url = request.url;

    if (url === "/"){
        homeHandler(request, response);
    }
}
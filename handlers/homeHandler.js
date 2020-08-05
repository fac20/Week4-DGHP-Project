// this will serve the landing page html

const fs = require("fs");
const path = require("path");

const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    ico: "image/x-icon",
  };

function homeHandler(request, response) {
    response.writeHead(200, {"content-type": "text/html"});
    response.end()
}

module.exports = homeHandler;
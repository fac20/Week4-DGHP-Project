// this will serve the landing page html

const fs = require("fs");
const path = require("path");

function homeHandler(request, response) {
  //  find the path of the file
  const filePath = path.join(__dirname, "..", "public", "index.html");
  // read file content
  fs.readFile(filePath, (error, file) => {
    if (error) {

      response.writeHead(404, {
        "content-type": "text/html"
      });
      response.end("<h1>Not found</h1>");
    } else {
      // display said file
      response.writeHead(200, {
        "content-type": "text/html"
      });
      response.end(file);
    }
  });
}

module.exports = homeHandler;
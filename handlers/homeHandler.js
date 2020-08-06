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
  const url = request.url; //url is / so we can't split to get content type
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension]; // type is undefined => types[undefined] 

  const filePath = path.join(__dirname, "..", "public",  "index.html");
  console.log(url);
  console.log(filePath);
  fs.readFile(filePath, (error, file) =>{
    if (error) {
      console.log(error);
      response.writeHead(404, {"content-type" : "text/html"});
      response.end("<h1>Not found</h1>");
    }
    else{
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }


  });
}

module.exports = homeHandler;
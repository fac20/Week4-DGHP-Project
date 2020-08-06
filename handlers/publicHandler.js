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

function publicHandler(request, response) {
  const url = request.url; //url is / so we can't split to get content type
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension]; // type is undefined => types[undefined] 

  const filePath = path.join(__dirname, "..", url);
  console.log(url);
  console.log(filePath);
  fs.readFile(filePath, (error, file) =>{
    if (error) {
      console.log(error);
      response.writeHead(404, {"content-type" : "text/html"});
      response.end("<h1>Not found</h1>");
    }
    else{
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }


  });

    // response.writeHead(200, {"content-type": "text/html"});

    // console.log("home handler ");

    // response.end("<h1>Hello</h1>");
}

module.exports = publicHandler;
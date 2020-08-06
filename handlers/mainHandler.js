// this will serve the landing page html

const fs = require("fs");
const path = require("path");


function mainHandler(request, response) {


  const filePath = path.join(__dirname, "..", "public",  "main.html");
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

module.exports = mainHandler;
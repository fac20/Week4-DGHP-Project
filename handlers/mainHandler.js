// this will serve the main page with forum and  form
const fs = require("fs");
const path = require("path");
const database = require("../model");

// 
function mainHandler(request, response) {
  const filePath = path.join(__dirname, "..", "public", "main.html");

  fs.readFile(filePath, "utf-8", (error, file) => {
    // handle erro first
    if (error) {

      response.writeHead(404, {
        "content-type": "text/html"
      });
      response.end("<h1>Not found</h1>");
    } else {
      // iterate through database and place each title and message inside a template for the article 
      // put all the data from iteration into an array called post
      const post = database.map((messageObject) => {
        return `<article class="post">
        <h2 class="post-title">${messageObject.title}</h2>
        <p class="post-message">${messageObject.message}</p>
      </article>`;
      });
      // replace the file(server-side copy of html) with the content of post and call it newFile
      const newFile = file.replace(
        `<!-- blog post comes here -->`,
        post.join("\n")
      );
      response.writeHead(200, {
        "content-type": "text/html"
      });
      // display newFile
      response.end(newFile);
    }
  });
}

module.exports = mainHandler;
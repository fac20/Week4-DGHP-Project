// this will serve the landing page html

const fs = require("fs");
const path = require("path");
const database = require("../model");

function mainHandler(request, response) {
  const filePath = path.join(__dirname, "..", "public", "main.html");
  console.log(filePath);
  fs.readFile(filePath, "utf-8", (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      const post = database.map((messageObject) => {
        return `<article class="post">
        <h2 class="post-title">${messageObject.title}</h2>
        <p class="post-message">${messageObject.message}</p>
        <button class="delete-button"></button>
      </article>`;
      });
      const newFile = file.replace(
        `<!-- blog post comes here -->`,
        post.join("\n")
      );
      response.writeHead(200, { "content-type": "text/html" });
      response.end(newFile);
    }
  });
}

module.exports = mainHandler;

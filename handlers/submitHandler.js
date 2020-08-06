// this will serve the landing page html

const database = require("../model");
// const filePath = path.join(__dirname, "..", "public",  "main.html");
// fs.readFile(filePath, (error, file) =>{

function submitHandler(request, response) {
  // get contents of form
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  //store input message into an object
  request.on("end", () => {
    console.log(body);
    const data = new URLSearchParams(body);
    const title = data.get("title-input");
    const message = data.get("message");
    let object = {
      title: title,
      message: message,
    };
    // store object into database(array)
    database.unshift(object);
    console.log(database);
    // adding variables, the title and the message and add it into a text file
    response.writeHead(302, { location: "/main" });
    response.end();
  });
  request.on("error", (error) => {
    response.writeHead(500, { "content-type": "text/html" });
    response.end("<h1>Server error</h1>");
  });
}

module.exports = submitHandler;

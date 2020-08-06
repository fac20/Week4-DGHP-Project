const http = require("http");
const router = require("./router");

// const PORT = 5000;

const server = http.createServer(router);
server.listen(process.env.PORT || 5000, () => console.log(`Listening on http://localhost:`));

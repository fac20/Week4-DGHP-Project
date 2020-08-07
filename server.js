const http = require("http");
const router = require("./router");


const server = http.createServer(router);
server.listen(process.env.PORT || 4000, () => console.log(`Listening on http://localhost:`));
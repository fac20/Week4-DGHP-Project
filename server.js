const http = require("http");
const router = require("./router");

const PORT = 5000;

const server = http.createServer(router);
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

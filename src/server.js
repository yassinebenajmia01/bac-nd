const http = require("http");
const app = require("./app.js");

require("./config/connect.js");

const server = http.createServer(app);//create serveur http request

const port = process.env.PORT || 8000;//4000

async function startServer() {
  server.listen(port, function () {
    console.log(`Server listening at http://localhost:${port}`);//start seveur
  });
}

startServer();

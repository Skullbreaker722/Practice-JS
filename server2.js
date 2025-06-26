// server.mjs
const { createServer } = require("node:http");
const app = require("./app");

const server = createServer(app);

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node server.mjs`

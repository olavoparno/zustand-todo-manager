const jsonServer = require("json-server");
const generateUuid = require("./helper");

const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser)
server.use(middlewares);

server.use((req, _, next) => {
  if (req.method === "POST") {
    req.body.id = generateUuid();
    req.body.creationDate = new Date().toString();
  }
  
  next();
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});

const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const heroData = require("../server/data/heros");

server.get("/api/heros", (req, res, next) => {
  res.status(200).send(heroData.getHeros);
});

server.listen(3000, () => {
  console.log("JSON server listening on port 3000");
});

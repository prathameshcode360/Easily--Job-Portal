import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("welcome to easliy");
});

server.listen(3600, () => {
  console.log("server is listening on 3600");
});

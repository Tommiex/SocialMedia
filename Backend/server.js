import express from "express";
import { user } from "./serverConfig.js";


const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.get("/", (req, res) => {
  res.send(user);
});

server.listen(9050, () => {
  console.log("run server 9050");
});

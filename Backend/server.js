import express from "express";
import { datatest } from "./serverConfig.js";
// import { user } from "./serverConfig.js";

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
  res.send(datatest);
  console.log(datatest)
  // res.send(user);
  // console.log(user)
});

server.listen(9050, () => {
  console.log("run server 9050");
  
});

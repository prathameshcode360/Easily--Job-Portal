import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import getHomePage from "./src/controllers/homeController.js";
import JobController from "./src/controllers/job.controller.js";

const server = express();

// controllers
const jobController = new JobController();

//setting static file
server.use(express.static("public"));

// setting ejs and ejs layout
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));

// routes
server.get("/", getHomePage);
server.get("/jobPage", jobController.getJobs);
server.listen(3600, () => {
  console.log("server is listening on 3600");
});

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import getHomePage from "./src/controllers/homeController.js";
import JobController from "./src/controllers/job.controller.js";
import ApplicationController from "./src/controllers/application.controller.js";
import resumeUploads from "./src/middlewares/resumeUpload.middleware.js";
import validateInputs from "./src/middlewares/validation.middleware.js";
import UserController from "./src/controllers/user.controller.js";

const server = express();

//setting url encoded
server.use(express.urlencoded({ extended: true }));

// controllers
const jobController = new JobController();
const applicationController = new ApplicationController();
const userController = new UserController();

//setting static file
server.use(express.static("public"));

// setting ejs and ejs layout
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));

// routes
server.get("/applications", applicationController.getApplications);
server.get("/", getHomePage);
server.get("/jobPage", jobController.getJobs);
server.get("/jobDetails/:id", jobController.getJobDetails);
server.get("/application_form/:id", jobController.renderApplicationForm);
server.post(
  "/application_form/:id",
  resumeUploads.single("resume"),
  validateInputs,
  jobController.applyForJob
);

server.get("/register", userController.getRegister);
server.get("/login", userController.getLogin);
server.post("/login", userController.signin);
server.post("/register", userController.signup);

server.listen(3600, () => {
  console.log("server is listening on 3600");
});

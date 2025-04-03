import express from "express";
import session from "express-session";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import getHomePage from "./src/controllers/homeController.js";
import JobController from "./src/controllers/job.controller.js";
import ApplicationController from "./src/controllers/application.controller.js";
import resumeUploads from "./src/middlewares/resumeUpload.middleware.js";
import validateInputs from "./src/middlewares/validation.middleware.js";
import UserController from "./src/controllers/user.controller.js";

const server = express();

// controllers
const jobController = new JobController();
const applicationController = new ApplicationController();
const userController = new UserController();
//setting url encoded
server.use(express.urlencoded({ extended: true }));
//setting static file
server.use(express.static("public"));
server.use(
  session({
    secret: "mysceret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

// setting ejs and ejs layout
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));

// routes
// server.get("/applications", applicationController.getApplications);
server.get("/", getHomePage);
server.get("/jobPage", jobController.getJobs);
server.get("/jobDetails/:id", jobController.getJobDetails);
server.get(
  "/application_form/:id",
  applicationController.renderApplicationForm
);
server.post(
  "/application_form/:id",
  resumeUploads.single("resume"),
  validateInputs,
  applicationController.applyForJob
);
server.get("/myApplications/:recruiter_id", userController.viewApplications);
server.get("/addNew", jobController.getaddNewJobPage);
server.post("/addNew", jobController.addNewJob);
server.get("/update/:id", jobController.getUpdatePage);
server.post("/update/:id", jobController.updateJob);
server.post("/myJobs/:recruiter_id", jobController.updateJob);
server.get("/register", userController.getRegister);
server.get("/login", userController.getLogin);
server.post("/recruiterHome", userController.signin);
server.get("/recruiterHome", userController.renderRcruiterPage);
server.post("/register", userController.signup);
server.get("/myJobs/:recruiter_id", userController.viewJobs);

// Serve resumes from uploads folder
// Manually define __dirname

server.use("/uploads", express.static("uploads"));

server.listen(3600, () => {
  console.log("server is listening on 3600");
});

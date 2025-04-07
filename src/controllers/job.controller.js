import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";
import UserModel from "../models/user.model.js";

export default class JobController {
  getJobs(req, res) {
    let jobs = JobModel.getAll();
    return res.render("jobPage", { jobs, message: null });
  }
  getJobDetails(req, res) {
    const id = req.params.id;
    let job = JobModel.getById(id);

    if (job) {
      return res.render("jobDetails", { job });
    }
  }
  getaddNewJobPage(req, res) {
    return res.render("addNewJob", {
      message: null,
      userEmail: req.session.userEmail,
    });
  }
  addNewJob(req, res) {
    const {
      job_name,
      company_name,
      job_location,
      salary,
      skills,
      recruiter_id,
    } = req.body;
    const skillsArray = skills.split(",");
    JobModel.add(
      job_name,
      company_name,
      job_location,
      salary,
      skillsArray,
      recruiter_id
    );
    return res.render("addNewJob", {
      userEmail: req.session.userEmail,
      message: "Job added sucessfully",
    });
  }

  getUpdatePage(req, res) {
    const id = req.params.id;
    const job = JobModel.getById(id);
    job.skills = Array.isArray(job.skills)
      ? job.skills
      : job.skills.split(",").map((skill) => skill.trim());
    return res.render("updateJob", {
      job,
      userEmail: req.session.userEmail,
      message: null,
    });
  }
  updateJob(req, res) {
    const { job_name, company_name, job_location, salary, skills } = req.body;
    const id = req.body.id; // Yahan se id le sakte hain
    const skillsArray = skills.split(",");
    JobModel.update(
      id,
      job_name,
      company_name,
      job_location,
      salary,
      skillsArray
    );
    const job = JobModel.getById(id);
    return res.render("updateJob", {
      job,
      userEmail: req.session.userEmail,
      message: "Job Updated sucessfully",
    });
  }
  searchJob(req, res) {
    const { job_name } = req.body;
    const jobs = JobModel.searchByName(job_name);
    if (jobs.length > 0) {
      return res.render("jobPage", { jobs: jobs, message: null });
    } else {
      return res.render("jobPage", {
        jobs: [],
        message: "No job found",
      });
    }
  }
}

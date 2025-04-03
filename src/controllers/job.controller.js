import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";
import UserModel from "../models/user.model.js";

export default class JobController {
  getJobs(req, res) {
    let jobs = JobModel.getAll();
    return res.render("jobPage", { jobs });
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
    return res.render("updateJob", { job });
  }
  updateJob(req, res) {
    const id = req.body.id; // Yahan se id le sakte hain
    JobModel.update(id, req.body);
    res.redirect(`/myJobs/${req.body.recruiter_id}`);
  }
}

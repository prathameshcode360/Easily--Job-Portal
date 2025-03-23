import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";

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
  renderApplicationForm(req, res) {
    const id = req.params.id;
    let job = JobModel.getById(id);
    if (job) {
      return res.render("applicationForm", { job: job, errorMessage: null });
    } else {
      return res.status(404).send("Job not found");
    }
  }
  applyForJob(req, res) {
    const jobId = req.params.id;
    const job = JobModel.getById(jobId);
    if (!job) {
      return res.status(404).send("Job not found");
    }
    const { name, email, contact } = req.body;
    const resume = req.file.filename;

    const user_details = { name, email, contact, resume };
    const job_details = {
      job_name: job.job_name,
      company_name: job.company_name,
      job_location: job.job_location,
    };

    const application = ApplicationModel.addApplication(
      user_details,
      job_details
    );
    console.log(application);
    let jobs = JobModel.getAll();
    return res.render("jobPage", { jobs });
  }
  getaddNewJobPage(req, res) {
    return res.render("addNewJob", { message: null });
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
    return res.render("addNewJob", { message: "Job added sucessfully" });
  }
}

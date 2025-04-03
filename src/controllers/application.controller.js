import ApplicationModel from "../models/application.model.js";
import JobModel from "../models/job.model.js";

export default class ApplicationController {
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
      recruiter_id: job.recruiter_id,
    };
    ApplicationModel.addApplication(user_details, job_details);
    let jobs = JobModel.getAll();
    return res.render("jobPage", { jobs });
  }
}

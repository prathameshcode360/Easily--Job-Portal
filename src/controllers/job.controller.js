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
      return res.render("applicationForm", { job });
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
    console.log(req.body);
    const { name, email, contact } = req.body;

    const user_details = { name, email, contact };
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
}

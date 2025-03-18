import JobModel from "../models/job.model.js";

export default class JobController {
  getJobs(req, res) {
    let jobs = JobModel.getAll();
    return res.render("jobPage", { jobs });
  }
}

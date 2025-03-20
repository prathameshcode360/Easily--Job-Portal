import ApplicationModel from "../models/application.model.js";

export default class ApplicationController {
  getApplications(req, res) {
    let applications = ApplicationModel.getAllAppllications();
    return res.send(applications);
  }
}

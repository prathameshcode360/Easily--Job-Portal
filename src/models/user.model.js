import { application } from "express";
import ApplicationModel from "./application.model.js";
import JobModel from "./job.model.js";

export default class UserModel {
  constructor(id, name, email, password, recruiter_id) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.recruiter_id = recruiter_id;
  }
  static register(name, email, password, recruiter_id) {
    const newUser = new UserModel(
      users.length + 1,
      name,
      email,
      password,
      recruiter_id
    );
    users.push(newUser);
  }
  static login(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }
  static getJobs(recruiter_id) {
    const jobs = JobModel.getAll().filter(
      (job) => job.recruiter_id == recruiter_id
    );
    return jobs;
  }
  static getApplications(recruiter_id) {
    let applications = ApplicationModel.getAllAppllications().filter(
      (application) => application.job_details.recruiter_id == recruiter_id
    );
    return applications;
  }
}
let users = [new UserModel(1, "user1", "user1@gmail.com", "user1", "CN-1")];

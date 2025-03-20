export default class ApplicationModel {
  constructor(id, user_details, job_details, applied_date) {
    this.id = id;
    this.user_details = user_details;
    this.job_details = job_details;
    this.applied_date = applied_date;
  }
  static getAllAppllications() {
    return applications;
  }
  static addApplication(user_details, job_details) {
    const newApplication = new ApplicationModel(
      applications.length + 1,
      user_details,
      job_details,
      new Date().toDateString()
    );
    applications.push(newApplication);
    return newApplication;
  }
}
let applications = [
  new ApplicationModel(
    1,
    {
      name: "prathamesh",
      email: "prathamesh@gmail.com",
      contact: "8668835905",
      resume: "",
    },
    {
      job_name: "Frontend Developer",
      company_name: "TCS",
      job_location: "pune",
    },

    "19-03-25"
  ),
];

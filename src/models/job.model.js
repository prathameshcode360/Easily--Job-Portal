export default class JobModel {
  constructor(id, job_name, company_name, job_location, salary, skills) {
    this.id = id;
    this.job_name = job_name;
    this.company_name = company_name;
    this.job_location = job_location;
    this.salary = salary;
    this.skills = skills;
  }
  static getAll() {
    return jobs;
  }
}
let jobs = [
  new JobModel(1, "Frontend Developer", "TCS", "Pune", 5000, [
    "HTML",
    "CSS",
    "React-Js",
  ]),
  new JobModel(2, "Backend Developer", "Infosys", "Bangalore", 6000, [
    "Node.js",
    "Express",
    "MongoDB",
  ]),
  new JobModel(3, "Full Stack Developer", "Wipro", "Hyderabad", 7000, [
    "React-Js",
    "Node.js",
    "MySQL",
  ]),
];

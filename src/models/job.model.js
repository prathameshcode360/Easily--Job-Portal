export default class JobModel {
  constructor(
    id,
    job_name,
    company_name,
    job_location,
    salary,
    skills,
    recruiter_id
  ) {
    this.id = id;
    this.job_name = job_name;
    this.company_name = company_name;
    this.job_location = job_location;
    this.salary = salary;
    this.skills = skills;
    this.recruiter_id = recruiter_id;
  }
  static add(
    job_name,
    company_name,
    job_location,
    salary,
    skills,
    recruiter_id
  ) {
    const newJob = new JobModel(
      jobs.length + 1,
      job_name,
      company_name,
      job_location,
      salary,
      skills,
      recruiter_id
    );
    jobs.push(newJob);
  }
  static update(id, job_name, company_name, job_location, salary, skills) {
    const index = jobs.findIndex((job) => job.id == id);
    jobs[index].job_name = job_name;
    jobs[index].company_name = company_name;
    jobs[index].job_location = job_location;
    jobs[index].salary = salary;
    jobs[index].skills = skills;
  }

  static getAll() {
    return jobs;
  }
  static getById(id) {
    let job = jobs.find((job) => job.id == id);
    return job;
  }
}
let jobs = [
  new JobModel(
    1,
    "Frontend Developer",
    "TCS",
    "Pune",
    5000,
    ["HTML", "CSS", "React-Js"],
    "CN-1"
  ),
  new JobModel(
    2,
    "Backend Developer",
    "Infosys",
    "Bangalore",
    6000,
    ["Node.js", "Express", "MongoDB"],
    "TCS-1"
  ),
  new JobModel(
    3,
    "Full Stack Developer",
    "Wipro",
    "Hyderabad",
    7000,
    ["React-Js", "Node.js", "MySQL"],
    "CN-1"
  ),
];

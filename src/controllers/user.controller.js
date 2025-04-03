import UserModel from "../models/user.model.js";

export default class UserController {
  getRegister(req, res) {
    return res.render("registerForm");
  }

  getLogin(req, res) {
    return res.render("loginForm", { message: null });
  }

  signup(req, res) {
    const { name, email, password, recruiter_id } = req.body;
    const newUser = UserModel.register(name, email, password, recruiter_id);
    return res.render("loginForm", {
      message: null,
    });
  }
  signin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.login(email, password);
    // console.log(user);
    if (!user) {
      return res.render("loginForm", { message: "Invalid Credentails" });
    }
    req.session.user = user;
    req.session.userEmail = user.email;

    return res.render("recruiterPage", {
      user,
      userEmail: req.session.userEmail,
    });
  }
  renderRcruiterPage(req, res) {
    return res.render("recruiterPage", {
      user: req.session.user,
      userEmail: req.session.userEmail,
    });
  }
  viewJobs(req, res) {
    const recruiter_id = req.params.recruiter_id;
    const jobs = UserModel.getJobs(recruiter_id);
    return res.render("recruiterJobs", {
      jobs,
      userEmail: req.session.userEmail,
    });
  }
  viewApplications(req, res) {
    const recruiter_id = req.params.recruiter_id;
    console.log(recruiter_id);
    let applications = UserModel.getApplications(recruiter_id);
    // console.log(applications);
    return res.render("applications", {
      applications,
      userEmail: req.session.userEmail,
    });
  }
}

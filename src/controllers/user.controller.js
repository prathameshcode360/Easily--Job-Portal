import UserModel from "../models/user.model.js";

export default class UserController {
  getRegister(req, res) {
    return res.render("registerForm");
  }

  getLogin(req, res) {
    return res.render("loginForm", { message: null });
  }

  signup(req, res) {
    const { name, email, password } = req.body;
    const newUser = UserModel.register(name, email, password);
    return res.render("loginForm", { message: null });
  }
  signin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.login(email, password);
    console.log(user);
    if (!user) {
      return res.render("loginForm", { message: "Invalid Credentails" });
    }
    return res.render("recruiterPage", { username: user });
  }
}

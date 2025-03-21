import { body, validationResult } from "express-validator";
import JobModel from "../models/job.model.js";

const validationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Valid email is required"),
  body("contact")
    .notEmpty()
    .withMessage("Contact is required")
    .isNumeric()
    .withMessage("Contact must be a number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact must be 10 digits"),
];

export default function validateInputs(req, res, next) {
  Promise.all(validationRules.map((rule) => rule.run(req))).then(() => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next(); // ✅ Added return to prevent further execution
    }
    const id = req.params.id;
    const job = JobModel.getById(id);
    return res.render("applicationForm", {
      job,
      errorMessage: errors.array()[0].msg, // First error message
    });
  });
}

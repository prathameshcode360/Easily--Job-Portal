# Easily-Job Portal

Easily-Job Portal is a job portal web application built using **Node.js and Express** following the **MVC architecture**. It allows **job seekers** to search and apply for jobs, while **job recruiters** can post, update, and delete job listings.

## Features

### For Job Seekers:

- View all available jobs
- Search for jobs
- Apply for jobs

### For Job Recruiters:

- Post new job listings
- Update job details
- View all job applications

## Tech Stack

- **Backend:** Node.js, Express.js

## Working Guide

### Listen Port

- [http://localhost:3600](http://localhost:3600)

---

### 👤 Job Seeker Flow:

1. Click on the **Seeker** button on the homepage or the **Jobs** button in the navbar to view all job listings.
2. On the Jobs page, you can **search for jobs by name**.
3. Click on **View Details** to see more information about a specific job.
4. On the details page, if you're interested, click on **Apply Now**.
5. Fill in the application form with the required fields and submit.
   - 🔒 **Note:** Express Validator is implemented for the application form—feel free to test it with incorrect inputs.

---

### 🧑‍💼 Recruiter Flow:

1. Click on the **Recruiter** button to open the recruiter **registration form**.
2. If you're new, register your details using the form.
   - ⚠️ **Important:** Remember your `recruiter_id`—it is used to:
     - Show only your posted jobs
     - Display applications submitted for your jobs
     - Add new jobs under your ID
3. After registering, log in using your **email and password**.
4. Once logged in, you’ll have access to the following features:
   - ✅ **View Jobs** – See all the jobs you've posted.
   - 📄 **View Applications** – See all applications submitted for your posted jobs.
   - ➕ **Add New Job** – Post a new job listing.
   - ✏️ **Update Job** – Edit existing job listings.

---

## 📝 Pre-Registered Recruiter

Use the following credentials to log in as a recruiter for testing:

- **Email:** `user1@gmail.com`
- **Password:** `user1`
- **Recruiter ID:** `CN-1`

> These credentials are useful for demo/testing without registering manually.

---

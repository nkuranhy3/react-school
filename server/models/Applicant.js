const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  name: String,
  gender: String,
  age: Number,
  yearsOfEducation: Number,
  areasOfStudy: String,
  workExperience: String,
  jobtype: String
});

module.exports = mongoose.model("Applicant", applicantSchema);



const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  name: String,
  postedBy: String,
  postedDate: String,
  applyBy: String,
  yearsOfEducation: Number,
  benefits: String,
  areasOfStudy: String,
  jobType: String
});

module.exports = mongoose.model("Job", jobSchema);



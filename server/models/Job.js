const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  name: {
    type: String
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  applyBefore: {
    type: String,
  },
  qualifications: {
    type: String
  },
  description: {
    type: String
  },
  benefits: {
    type: String
  },
  companyId:{
    type: String
  }
});

module.exports = mongoose.model("Job", jobSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  managerName: {
      type: String
  },
  companyHistory: {
    type: String
  }
});

module.exports = mongoose.model("Company", companySchema);

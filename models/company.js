var mongoose = require("mongoose");

var companyProfileSchema = new mongoose.Schema({
   fullName: String,
   location: String,
   image: String,
   overview: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   }
});

module.exports = mongoose.model("Company", companyProfileSchema);
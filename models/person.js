var mongoose = require("mongoose");

var personProfileSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   fullName: String,
   location: Object,
   image: String,
   overview: String,
   nameUpdatedAt: String,
   cityUpdatedAt: String,
   stateUpdatedAt: String,
   countryUpdatedAt: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   }
});

module.exports = mongoose.model("Person", personProfileSchema);
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://supabasetry:YdEdDjwLEPLcUYoi@cluster0.hpx2ra8.mongodb.net/cohort"
    )
    .then(() => {
      console.log("ConnectToDB");
    });
}

module.exports = connectToDB;
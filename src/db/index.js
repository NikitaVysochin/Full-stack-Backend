const mongoose = require("mongoose");

const { Schema } = mongoose;  

const taskScheme = new Schema({
  nameShop: String, 
  dateShop: String, 
  rubles: Number
});

module.exports = Task = mongoose.model("full-stack-project", taskScheme);
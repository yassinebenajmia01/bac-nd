const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
  email: { type: String, required:true,unique:true },
  phoneNumber: { type: Number,required:true },
  password: { type: String,required:true },

});

module.exports = mongoose.model("client", clientSchema);
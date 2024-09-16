const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
  email: { type: String, required:true,unique:true },
  phoneNumber: { type: Number,required:true },
  password: { type: String,required:true },
  adresse: { type: String,required:true },
  matricule: { type: String,required:true },

});

module.exports = mongoose.model("client", clientSchema);
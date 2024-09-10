const mongoose = require("mongoose");

const Categorie = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required:true },
  language: { type: String },
  numberOfBooks: { type: Number },
  gender: { type: String, required: true },
  
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  }],
  
});

module.exports = mongoose.model("Categorie", Categorie);
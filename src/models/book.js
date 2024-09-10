const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  creationDate: { type: Date, default: Date.now },
  ageRestriction: { type: Number },
  description: { type: String },
  bookName: { type: String, required: true },
  bookLanguage: { type: String, required: true },
  coverImg: { type: String },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
   // required: true,
  },
  commandIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Command" }],
  rating: { type: Number },
  createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model("Book", bookSchema);
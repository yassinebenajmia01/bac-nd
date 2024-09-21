const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the subcategory (e.g., "Language")
  value: { type: String, required: true }, // Value for the subcategory (e.g., "English", "French")
});

const CategorieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  language: { type: String }, // You can keep the language field if needed
  numberOfBooks: { type: Number },
  gender: { type: String, required: true },
  
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  }],

  // New field for child categories, such as languages or other related categories
  subCategories: [SubCategorySchema], // Array of subcategories (child categories)
});

module.exports = mongoose.model("Categorie", CategorieSchema);

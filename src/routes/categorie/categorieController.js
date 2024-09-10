const Category = require("../../models/categorie"); 

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
    // res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.addCategory = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
  
      if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
      }
  
      if (!req.body.name) {
        return res.status(400).json({ message: "Category name is required" });
      }
  
      if (!req.body.language) {
        return res.status(400).json({ message: "Language is required" });
      }
  
      const newCategory = new Category({
        name: req.body.name,
        image: req.body.image,
        language: req.body.language,
        numberOfBooks: req.body.numberOfBooks,
        gender: req.body.gender,
        books: req.body.books || []
      });
  
      console.log("New Category Object:", newCategory);
  
      const savedCategory = await newCategory.save();
  
      console.log("Saved Category Object:", savedCategory);
  
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error("Error Adding Category:", error);
      res.status(500).json({ error });
    }
  };

  exports.updateCategory = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
  
      if (!id) {
        return res.status(400).json({ message: "Category ID is required" });
      }
  
      if (!updatedData || Object.keys(updatedData).length === 0) {
        return res.status(400).json({ message: "No update data provided" });
      }
  
      const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (updatedCategory) {
        return res.status(200).json(updatedCategory);
      } else {
        return res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      
      console.error("Error updating category:", error.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  

exports.removeCategory = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the ID is valid before attempting to delete
    if (!id) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const category = await Category.findByIdAndDelete(id);

    if (category) {
      
      return res.status(200).json({ message: "Category deleted successfully", category });
    } else {
      
      return res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

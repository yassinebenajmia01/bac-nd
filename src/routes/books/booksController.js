const Book=require("../../models/book")
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find(); 
        res.status(200).send({ message: "Success", books }); 
    } catch (error) {
        res.status(500).send({ message: "Error fetching books", error }); 
    }
};





exports.removeBooks = async (req, res) => {
    try {
        const id = req.params.id; 
        const book = await Book.findByIdAndDelete(id); 
        if (!book) {
            return res.status(404).send({ message: "Book not found" }); 
        }
        res.status(200).send({ message: "Book deleted successfully" }); 
    } catch (error) {
        res.status(500).send({ message: "Error deleting book", error }); 
    }
};

exports.addBook = async (req, res) => {
    const { price, ageRestriction, description, bookName, bookLanguage, coverImg, categoryId, commandIds, rating } = req.body;

    // if (!price || !bookName || !bookLanguage || !categoryId) {
    //     return res.status(400).json({ message: "Price, book name, language, and category ID are required" });
    // }

    try {
        const newBook = new Book({
            price,
            ageRestriction,
            description,
            bookName,
            bookLanguage,
            coverImg,
            categoryId,
            commandIds,
            rating,
            createdAt: Date.now() 
        });

        const savedBook = await newBook.save(); 
        return res.status(200).json({ message: "Book added successfully", book: savedBook });
    } catch (error) {
        return res.status(500).json({ message: "Error adding book", error }); 
    }
};
exports.updateBook = async (req, res) => {
    const { id } = req.params; 
    const { price, ageRestriction, description, bookName, bookLanguage, coverImg, categoryId, commandIds, rating } = req.body;

    try {
       
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                $set: {
                    price,
                    ageRestriction,
                    description,
                    bookName,
                    bookLanguage,
                    coverImg,
                    categoryId,
                    commandIds,
                    rating,
                    updatedAt: Date.now() 
                }
            },
            { new: true } 
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" }); 
        }

        res.status(200).json({ message: "Book updated successfully", book: updatedBook }); 
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error }); 
    }
};

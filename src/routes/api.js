const express = require("express")
const api=express.Router()
 const categories=require("./categorie/categorieRouter")
const BooksRoute=require("./books/booksRouter")



api.use('/books',BooksRoute)
 api.use('/categorie',categories)



module.exports=api
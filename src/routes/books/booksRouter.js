const express = require ("express");
const BooksRoute=express.Router()
const BooksController=require("./booksController")

BooksRoute.get("/books",BooksController.getBooks);//dima e5dem bil methode li jet mel axios wele api
BooksRoute.delete("/remove/:id",BooksController.removeBooks);
BooksRoute.post("/adBooks",BooksController.addBook);
BooksRoute.put("/update/:id",BooksController.updateBook);



module.exports=BooksRoute//defini el router eli andek bech yet9ra bara mel&
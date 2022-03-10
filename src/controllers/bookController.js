const Book = require("../models/bookModel");
const {request, response} = require("express")

module.exports = {
    async all(request, response) {
        try {
            const books = await Book.findAll();
            response.status(200).json(books)
        } catch (err) {
            response.status(400).json("deu ruim")
        }
    }
}
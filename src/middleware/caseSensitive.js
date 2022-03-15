const { request, response, next } = require('express');
const Book = require('../models/bookModel');

module.exports = {
    async case(request, response, next) {
        //esse vem do request
        const { title } = request;

        const titleCase = title.toUpperCase()

        //esse compara e checa se existe no DB
        const titleC = await Book.findOne({
            where: {}
        })

    }
}
CreateBookService
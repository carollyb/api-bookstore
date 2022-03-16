const { request, response, next } = require('express');
const Book = require('../models/bookModel');
const SearchBookService = require('../services/SearchBookService');

module.exports = {
    async case(request, response, next) {

        //esse vem do request
        const title = request.body.title;

        const titleCase = title.toUpperCase()

        //esse compara e checa se existe no DB
        const titleC = await SearchBookService.searchBook(title)
        
        next()
        //const a = titleC.title

        //a.toUpperCase() == titleCase ? response.status(400).json({error: "This book already exists in our database"}) : next()

    }
}
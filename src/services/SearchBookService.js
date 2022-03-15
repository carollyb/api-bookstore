const Book = require("../models/bookModel");

module.exports = {
    async searchBook(title) {
        const titleSearch = await Book.findOne({where: {title: title}})

        return titleSearch
        
    }
}
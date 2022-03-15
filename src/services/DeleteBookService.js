const Book = require("../models/bookModel")

module.exports = {
    async execute(id) {
        const deleteBookById = await Book.destroy({where: {id: id}})

        return deleteBookById
    }
}
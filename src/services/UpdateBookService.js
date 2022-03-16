const Book = require("../models/bookModel")

module.exports = {
    async execute(id, newTitle) {
        
        const book = await Book.findByPk(id);

        if (book == null) {
            throw new Error("Could not update book")
        }

        book.title = newTitle;

        await book.save()

        return book
    }
}
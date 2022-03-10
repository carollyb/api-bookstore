const Book = require("../models/bookModel")

module.exports = {
    async execute(id, title, author_id, language, num_pages, publication_date, publisher) {

        const book = await Book.create({
            id,
            title,
            author_id,
            language,
            num_pages,
            publication_date,
            publisher
        })

        return book

    }
}
const Book = require("../models/bookModel");
const { v4: uuid } = require('uuid');
const SearchBookService = require("./SearchBookService");

module.exports = {
    /**
     * Cria uma instância do modelo e retorna um objeto com os atributos passados.
     * @param {string} title 
     * @param {string} author_id 
     * @param {string} language 
     * @param {integer} num_pages 
     * @param {date} publication_date 
     * @param {string} publisher 
     * @returns Object
     */
    async execute(title, author_id, language, num_pages, publication_date, publisher) {

        const bookAlreadyExists = await SearchBookService.searchBook(title)
        console.log(bookAlreadyExists)

        if(bookAlreadyExists) {
            throw new Error("This book already exists on our database")
        } 
        
        const idHash = uuid();

        const book = await Book.create({
            id: idHash,
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
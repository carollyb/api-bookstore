const { request, response } = require("express")
const SearchBookService = require("../services/SearchBookService")

module.exports = {
    /**
     * Faz uma requisição à API, procurando por um título específico na base de dados
     * @param {request} request 
     * @param {response} response 
     */
    async handle(request, response) {
        const title = request.params.title;

        const book = await SearchBookService.searchBook(title)
        if (book) {
            response.status(200).json(book)
        } else {  
            response.status(400).json({error: "Book not found"})
        }
    }
}
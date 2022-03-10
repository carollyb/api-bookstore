const CreateBookService = require("../services/CreateBookService");
const { request, response } = require("express")

module.exports = {
    async handle(request, response) {

        const body = request.body;

        const book = await CreateBookService.execute( body.id, 
            body.title, 
            body.author_id,
            body.language,
            body.num_pages,
            body.publication_date,
            body.publisher)

        return response.json(book)

    }
}

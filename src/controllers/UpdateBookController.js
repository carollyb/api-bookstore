const { request, response } = require("express")
const updateBookService = require("../services/UpdateBookService")

module.exports = {
    async handle(request, response) {
        try {
            const id = request.params.id;
            const newTitle = request.body.title;
    
            const updatedBook = await updateBookService.execute(id, newTitle)
            response.status(202).json(updatedBook)
        } catch(err) {
            response.status(400).json({error: err.message})
        }
    }
}
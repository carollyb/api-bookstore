const deleteBookService = require("../services/DeleteBookService")

module.exports = {
    async handle(request, response) {
        const id = request.params.id;

        const bookDeleted = await deleteBookService.execute(id)

        if (bookDeleted) {
            response.status(202).json(bookDeleted) //como passar o objeto do livro deletado aqui?
        } else {
            response.status(404).json({error: "This book was not found on our database and could not be deleted"})
        }
    }
}
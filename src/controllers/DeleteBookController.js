const deleteBookService = require("../services/DeleteBookService")

module.exports = {
    async handle(request, response) {
        
        try {
            const id = request.params.id;
            const bookDeleted = await deleteBookService.execute(id)
            response.status(202).json({deleted: bookDeleted.title})
        } catch(err) {
            response.status(404).json({error: err.message})
        }

    }
}

const sequelize = require("sequelize");
const Book = require("../models/bookModel");
const Op = sequelize.Op

module.exports = {
    async searchBook(title) {
        const titleSearch = await Book.findOne({where: {title: title}})
        
        if (titleSearch == null) {
            throw new Error("Book not found/Might be registered with a similar title")
        }

        return titleSearch
    },
    async searchLike(title) {
        const titleSearchLike = await Book.findAll({where: {
            title: {
                [Op.substring]: title}
            }})
        
        if (titleSearchLike == null) {
            throw new Error("Book not found")
        }
        
        return titleSearchLike

    },
}
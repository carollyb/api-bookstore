const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/index");

class Book extends Model{}

Book.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
    },
    author_id: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
    num_pages: {
        type: DataTypes.INTEGER
    },
    publication_date: {
        type: DataTypes.DATE,
    },
    publisher: {
        type: DataTypes.STRING,
    },
},{
    sequelize,
    modelName: "book",
    timestamps: false
});

//colocar um método para dropar a tabela
module.exports = Book;
require('dotenv').config({path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"})
const express = require("express");
const sequelize = require(process.env.DB)
const bookRoute = require("./routes")

const port = process.env.PORT;
const app = express();

sequelize.sync().then(() => {
    console.log("database is running");
})

app.use(express.json());

app.use(bookRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app
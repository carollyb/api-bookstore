require('dotenv').config({path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"})
const express = require("express");
const bookRoute = require("./routes");
const databaseSync = require(process.env.SYNC)

const port = process.env.PORT;
const app = express();

if (process.env.NODE_ENV === "dev") {
    databaseSync()
}

app.use(express.json());

app.use(bookRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app
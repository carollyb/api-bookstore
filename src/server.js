require('dotenv').config({path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"})
const express = require("express");
const bookRoute = require("./routes");
const databaseSync = require(process.env.SYNC)

const port = process.env.PORT;
const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== "test") {
    databaseSync()
}

app.use(bookRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

module.exports = app
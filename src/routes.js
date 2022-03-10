const express = require("express");
const bookController = require("./controllers/bookController");
const createBookController = require("./controllers/CreateBookController")

const router = express.Router();

router.get("/books", bookController.all);

router.post("/books", createBookController.handle);

module.exports = router;

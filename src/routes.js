const express = require("express");
const listAllController = require("./controllers/ListAllController");
const createBookController = require("./controllers/CreateBookController")
const listOneController = require("./controllers/ListOneController");
const deleteBookController = require("./controllers/DeleteBookController");
const updateBookController = require("./controllers/UpdateBookController");

const router = express.Router();

router.post("/books", createBookController.handle);

router.get("/books", listAllController.all);
router.get("/books/:title", listOneController.handle);

router.delete("/books/:id", deleteBookController.handle);

router.put("/books/:id", updateBookController.handle)

router.patch("/books/:id", updateBookController.handle)

module.exports = router;

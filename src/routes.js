const express = require("express");
const listAllController = require("./controllers/ListAllController");
const createBookController = require("./controllers/CreateBookController")
const listOneController = require("./controllers/ListOneController");
const deleteBookController = require("./controllers/DeleteBookController");
const caseSensitive = require("./middleware/caseSensitive");

const router = express.Router();

router.post("/books", caseSensitive.case, createBookController.handle);

router.get("/books", listAllController.all);
router.get("/books/:title", listOneController.handle);

router.delete("/books/:id", deleteBookController.handle)


module.exports = router;

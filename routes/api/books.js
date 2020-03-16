const router = require("express").Router();
const db = require("../models");

// Matches with "/api/books" to get all books
router.get("/", function (req, res) {
  db.Book
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Matches with "/api/books/:id" to get book by id
router.get("/:id", function (req, res) {
  db.Book
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Matches with /api/books to create new book
router.post("/", function (req, res) {
  db.Book
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})


module.exports = router;

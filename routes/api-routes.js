const router = require("express").Router();
const mongoose = require("mongoose");
const { Book } = require("../models");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ data: books });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post("/books", async (req, res) => {
  try {
    const result = await Book.findOneAndUpdate(
      {
        booksId: req.body.booksId,
      },
      req.body,
      { upsert: true }
    );
    const newBook = await Book.findOne({ booksId: req.body.booksId });
    res.status(201).json({ data: newBook });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const booksId = req.params.id;
    const result = await Book.deleteOne({ booksId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ err: "Book not found in database." });
    }
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;

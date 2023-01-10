const { Author, Book } = require("../models/model");
const bookController = {
  //add a book
  addABook: async (req, res) => {
    try {
      const aNewBook = new Book(req.body);
      const savedBook = await aNewBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get all book
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get an book
  getAnBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = bookController;

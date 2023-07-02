const { Book } = require("../../models/index.js");
const { showError } = require("../../lib/index.js");
const bcrypt = require("bcryptjs");
class BookController {
  index = async (req, res, next) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      showError(err, next);
    }
  };

  store = async (req, res, next) => {
    const { name, description, userId } = req.body;
    try {
      await Book.create({
        name,
        description,
        userId,
        images: req.file.filename,
      });
      res.json({
        message: "Book Added",
        status: 201,
      });
    } catch (err) {
      showError(err, next);
    }
  };

  show = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await Book.findById(id);
      res.json(user);
    } catch (err) {
      showError(err, data);
    }
  };

  update = async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      await User.findByIdAndUpdate(id, { name, description });
      res.json({
        message: "Book updated",
        status: 201,
      });
    } catch (err) {
      showError(err, next);
    }
  };

  delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      await User.findByIdAndDelete(id);
      res.json({
        message: "Book deleted",
        status: 200,
      });
    } catch (err) {
      showError(err, next);
    }
  };
}

module.exports = new BookController();

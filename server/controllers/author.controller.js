const Author = require("../models/author.model")

module.exports = {
  index: (request, response) => {
    response.json({
      message: "Hello World!",
    })
  },
  createAuthor: (request, response) => {
    Author.create({
      ...request.body,
    })
      .then((author) => response.json(author))
      .catch((err) => response.status(400).json(err))
  },
  getAllAuthors: (request, response) => {
    Author.find({}, null, { sort: "name" })
      .then((authors) => response.json(authors))
      .catch((err) => response.status(400).json(err))
  },
  getAuthor: (request, response) => {
    Author.findOne({ _id: request.params.id })
      .then((author) => response.json(author))
      .catch((err) => response.status(400).json(err))
  },
  updateAuthor: (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => response.json(updatedAuthor))
      .catch((err) => response.status(400).json(err))
  },
  deleteAuthor: (request, response) => {
    Author.deleteOne({ _id: request.params.id })
      .then((deleteConfirmation) => response.json(deleteConfirmation))
      .catch((err) => response.status(400).json(err))
  },
}

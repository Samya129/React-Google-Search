const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  volumeCount: integer,
  created: datetime,
  synopsis: String,
  image: String,
  selfLink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

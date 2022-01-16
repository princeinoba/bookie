const mongoose = require("mongoose");
const { Book } = require("../models");

const books = [
  {
    booksId: "fudhwue2",
    title: "Test 1",
    authors: ["Sample Name", "Sample Name2"],
    description: "A test book",
    image: "sample.png",
    link: "https://www.google.com",
  },
  {
    booksId: "frewrew",
    title: "Test 2",
    authors: ["Sample Name"],
    description: "A test book",
    image: "sample.png",
    link: "https://www.google.com",
  },
  {
    booksId: "6437hreew",
    title: "Test 3",
    authors: ["Sample Name", "Sample Name3"],
    description: "A test book",
    image: "sample.png",
    link: "https://www.google.com",
  },
];

mongoose
  .connect("mongodb://localhost:27017/googlebooks", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    Book.insertMany(books).then(result => {
      console.log(`${result.length} books inserted!`);
      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

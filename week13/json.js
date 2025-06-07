
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Sample data (replace with your actual book data)
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    isbn: "978-0743273565"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    isbn: "978-0141439518"
  }
];

// Define the route
app.get('/books', (req, res) => {
  res.json(books); // Send the books array as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

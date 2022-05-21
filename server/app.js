const Book = require('./models/book');
const express = require('express');

const mysql = require('mysql');
const app = express();
app.use(express.json())


app.post('/book', async(req, res) => {
    const book = new Book(null, req.body.title, req.body.total_pages, req.body.year, req.body.author_id, req.body.category_id, req.body.description)
    await book.save();
    res.send(book)
})
const port = 3000; 
app.listen(port, console.log('app listen in port 3000'))
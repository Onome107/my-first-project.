//To create an Express app that will responds with 'Hello, Express!'
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello, Express!');
});

app.get('/users/:id', (req, res) => {

  // const queryStringValues = req.query;
   
   const id = req.params.id;

   res.send ({
        id: id,
        name: 'onome sadjere',
        //queryStringValues,
    });
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;

    if (searchTerm) {
        res.send('You searched for: $ {searchTerm}');
    } else{
        res.send('Please provide a search term using the "q" query parameter.');
    }
});

app.listen(4000, () => {
    console.log('listening to port 4000');
});
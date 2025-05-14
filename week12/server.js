//To create an Express app that will responds with 'Hello, Express!'
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello, Express!');
});

app.listen(4000, () => {
    console.log('listening to port 4000');
});
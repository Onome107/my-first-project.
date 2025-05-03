//Assignment for week 10
const http = require('http');

// creating servers using http
http.createServer((request, response) =>{
    response.write('Welcome to My Server!');
    response.end();
}). listen(3000);

console.log ('Server started on port 3000');

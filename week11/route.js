
// Handling Routes Using req.url
const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the Home Page<h1>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the About Page<h1>');
    
    } 
    else if (req.url ==='/contact'){
        res.writeHead(200,{'Content-Type': 'application/json'} );
        res.end(
          JSON.stringify({
            firstName: 'Onome',
            lastName: 'Sadjere',
            email: 'onomecyril1998@gmail.com'
            
          })
          
        );
    }
    else {
        //Handling a 'not found' route
        res.writeHead(404, { 'Content-Type': 'text/html', 'my-header': 'hello-world'
        });
        res.end('<h1>4o4 - Page Not Found<h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
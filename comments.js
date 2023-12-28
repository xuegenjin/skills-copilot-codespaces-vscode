//create a simple web server that responds with "Hello World" to all requests, 
//and is listening on port 9999
// http://localhost:9999

const http = require('http');
const port = 9999;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); //text/html
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


//create a simple web server that responds with "Hello World" to all requests, and is listening on port 8888
const http = require('http');
const port = 8888;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

//create a simple web server that responds with "Hello World" to all requests, 
//and is listening on port 8088
var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<html><body>Hello World!</body></html>');
  res.end();
});
server.listen(8088);
console.log('Server is listening on port 8088');

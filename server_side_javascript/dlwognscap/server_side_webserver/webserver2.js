var http = require('http');

var  server = http.createServer((req, res) => {
  res.statusCode = 200;
 // res.writeHead(200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n 여윽시 영선 갓 ');
});

server.listen(8081);

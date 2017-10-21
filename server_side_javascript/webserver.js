const http = require('http');

const hostname = '127.0.0.1';
const port = 3006;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(123123);
	res.end('Hello World\n');
	
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
	console.log('지금은 로컬로 돌리는 중입니다.');
});
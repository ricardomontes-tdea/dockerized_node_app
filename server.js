const http = require('http');
const [port1, port2] = [4000, 4001];

const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello there!, I am SERVER 1')
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello there!, I am SERVER 2')
});

server1.listen(port1, () => {
  console.log(`SERVER 1 ---> I am running at port ${port1}`);
  console.log(server1);
});

server2.listen(port2, () => {
  console.log(`SERVER 2 ---> I am running at port ${port2}`);
});

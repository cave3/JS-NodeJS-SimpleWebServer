// Basic web-server
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200; // 200 = everything ok
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  });

  // @params: port
  // @params: hostname
  // @params: callbacl function
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});

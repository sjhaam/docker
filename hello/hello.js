var http = require('http');
var content = function (req, resp) {
  resp.end('Hello World!');
  resp.writeHead(200);
}
var w = http.createServer(content);
w.listen(3000);

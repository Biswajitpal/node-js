const http = require('http');


http.createServer((req,resp) => // function as a parameter
{
resp.write("<h1>hello world</h1>");
resp.end();
}).listen(4500);

/*
http module handel server request in nodejs
How to send function as a parameter
*/
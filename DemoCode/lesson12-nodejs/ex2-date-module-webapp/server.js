/**
 * server.js
 */
console.log(`Starting HttpServer on port 8080...`);
const http = require("http");
const dt = require("./myDateModule");

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(`The date and time are currently: ${dt.myDate()}`);
    res.end();
}).listen(8080);
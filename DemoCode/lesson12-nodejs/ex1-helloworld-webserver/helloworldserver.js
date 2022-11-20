/**
 * helloworldserver.js
 * 
 * @author okalu
 * @since 2022-6-10
 */
"use strict";

console.log("Hello World of Node.JS");

const http = require("http");
// Create and start an HttpServer
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    const pageContent = `
        <!doctype html>
        <html lang="en">
        <head>
            <title>My Hello World webpage from node.js</title>
        </head>
        <body>
            <h1>Hello World from Node.js version 18.3.0</h1>
            <div>
                <h2>Welcome to me first nodejs web server</h2>
                <p>Lorem ipsum</p>
            </div>
        </body>
        </html>
    `;
    res.end(pageContent);
}).listen(8080);
console.log(`HttpServer started... Listening on port 8080`);
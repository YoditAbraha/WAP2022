/**
 * helloworld.js
 * 
 * @author okalu
 * @since 2022-03-11
 */
"use strict";

console.log("Starting HTTPServer for HelloWorld...");

const http = require("http");
// Create and start an HTTPServer
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
                <h1>Hello World from Node.js version 17.7.1</h1>
            </body>
        </html>
    `;
    res.end(pageContent);
}).listen(8081);
console.log("Started HTTPServer successfully. Listening on port 8081");

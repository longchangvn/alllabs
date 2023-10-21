const http = require('http');
const fs = require('fs')
const url = require("url")
const server = http.createServer();

let routes = new Map()
routes.set("/image", function (req, response) {
    fs.readFile("./static/nodejslogo.webp", function (err, data) {
        response.writeHead(200, { 'Content-type': 'image/jpg' });
        response.end(data);
    })
});
routes.set("/pdf", function (req, response) {
    fs.readFile("./static/samplelab11.pdf", function (err, data) {
        response.writeHead(200, { 'Content-Type': 'application/pdf' });
        response.end(data);
    }
    )
});
routes.set("/home", function (req, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Welcome to my website");
});

server.on('request', function (req, res) {
    var urlParts = url.parse(req.url);
    let handler = routes.get(urlParts.pathname == "/" ? "/home" : urlParts.pathname);
    if (!handler) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
        return;
    }

    return handler(req, res);
});
server.listen(3000, () => console.log("server started"));

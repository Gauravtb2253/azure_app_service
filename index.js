const http = require('http')
const port = 5000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" })
    res.end("<html><body><h1>Hello Gaurav</h1></body></html>")
})

server.listen(port)

console.log("Server running")
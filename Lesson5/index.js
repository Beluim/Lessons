// http://localhost:3000

const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
    console.log("Someone join server");

    response.writeHead(200, { "Content-Type": "text/plain" });

    response.write("Hello, that is my first server");

    response.end();
})

server.listen(PORT);
console.log("Server is open");
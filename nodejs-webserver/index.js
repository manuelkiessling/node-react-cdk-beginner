const http = require("http");

const server = http.createServer((req, res) => {
    res.end("I have received a request, and this is my response.");
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

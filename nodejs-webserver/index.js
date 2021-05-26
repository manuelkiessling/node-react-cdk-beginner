const http = require("http");
const URL = require("url").URL;

const server = http.createServer((req, res) => {
    res.write("I have received a request, and this is my response.\n");
    res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

    console.log((new URL(`http://${req.headers.host}${req.url}`)));

    console.log(req.headers.host);
    console.log(req.headers["user-agent"]);
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

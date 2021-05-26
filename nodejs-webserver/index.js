const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    res.write("I have received a request, and this is my response.\n");
    res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

    const myUrl = new url.URL("http://localhost:8000" + req.url);
    console.log(myUrl);
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

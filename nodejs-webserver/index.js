const http = require("http");
const url = require("url");

const myUrl = new url.URL("https://user:pass@sub.host.com:80/p/a/t/h?query=string#hash");

console.log(myUrl);


const server = http.createServer((req, res) => {
    res.write("I have received a request, and this is my response.\n");
    res.end("The request method was " + req.method + ", and the requested resource was " + req.url);

    console.log(req.headers.host);
    console.log(req.headers["user-agent"]);
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

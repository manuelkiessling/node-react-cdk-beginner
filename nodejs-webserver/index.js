const http = require("http");
const url = require("url");
const calculator = require("./calculator");

const server = http.createServer((req, res) => {
    const myUrl = new url.URL("http://localhost:8000" + req.url);

    if (myUrl.pathname === '/duplicate') {
        res.end(
            "The duplicate of "
            + myUrl.searchParams.get("number")
            + " is "
            + calculator.duplicateNumber(myUrl.searchParams.get("number"))
        );
    }

});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

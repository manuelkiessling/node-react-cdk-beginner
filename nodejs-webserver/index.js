const http = require("http");
const url = require("url");
const calculator = require("./calculator");

const server = http.createServer((req, res) => {
    const myUrl = new url.URL("http://localhost:8000" + req.url);

    const number = myUrl.searchParams.get("number");

    if (isNaN(parseInt(number))) {
        res.end(
            "Value "
            + number
            + " cannot be interpreted as an integer value!"
        );
    }

    if (myUrl.pathname === "/duplicate") {
        res.end(
            "The duplicate of "
            + number
            + " is "
            + calculator.duplicateNumber(myUrl.searchParams.get("number"))
        );
    }

    if (myUrl.pathname === "/square") {
        res.end(
            "The square of "
            + number
            + " is "
            + calculator.squareNumber(myUrl.searchParams.get("number"))
        );
    }
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

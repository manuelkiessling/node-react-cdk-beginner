import http from "http";
import url from "url";
import calculator from "./calculator"

const server = http.createServer((req, res) => {
    const myUrl = new url.URL("http://localhost:8000" + req.url);

    const num = myUrl.searchParams.get("number");

    if (myUrl.pathname === "/duplicate") {
        res.end(
            "The duplicate of "
            + num
            + " is "
            + calculator.duplicateNumber(num)
        );
    }

    if (myUrl.pathname === "/square") {
        res.end(
            "The square of "
            + num
            + " is "
            + calculator.squareNumber(num)
        );
    }
});

server.listen(
    "8000",
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

import { createServer } from "http";
import { URL } from "url";
import calculator from "./calculator"

const server = createServer((req, res) => {
    const myUrl = new URL("http://localhost:8000" + req.url);

    const x = myUrl.searchParams.get("x");

    if (Number.isNaN(parseInt(x))) {
        res.end(
            "Value "
            + x
            + " cannot be interpreted as an integer value!"
        );
    } else {

        if (myUrl.pathname === "/duplicate") {
            res.end(
                "The duplicate of "
                + x
                + " is "
                + calculator.duplicateNumber(parseInt(x))
            );
        }

        if (myUrl.pathname === "/square") {
            res.end(
                "The square of "
                + x
                + " is "
                + calculator.squareNumber(parseInt(x))
            );
        }

    }
});

server.listen(
    8000,
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

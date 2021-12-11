"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url_1 = require("url");
const calculator_1 = require("./calculator");
const server = (0, http_1.createServer)((req, res) => {
    const myUrl = new url_1.URL("http://localhost:8000" + req.url);
    const x = myUrl.searchParams.get("x");
    if (Number.isNaN(parseInt(x))) {
        res.end("Value "
            + x
            + " cannot be interpreted as an integer value!");
    }
    else {
        if (myUrl.pathname === "/duplicate") {
            res.end("The duplicate of "
                + x
                + " is "
                + calculator_1.default.duplicateNumber(parseInt(x)));
        }
        if (myUrl.pathname === "/square") {
            res.end("The square of "
                + x
                + " is "
                + calculator_1.default.squareNumber(parseInt(x)));
        }
    }
});
server.listen(8000, "localhost", () => console.log("HTTP server started and available at http://localhost:8000."));

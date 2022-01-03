import { IncomingMessage, ServerResponse } from "http";

import http from "http";
import url from "url";
import greeter from "./greeter";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const myUrl = new url.URL("http://localhost:8000" + req.url);

    const name = myUrl.searchParams.get("name") || "John";
    const formally = myUrl.searchParams.get("formally") === "true";

    if (myUrl.pathname === "/welcome") {
        res.end(greeter.welcome(name, formally));
    }

    if (myUrl.pathname === "/seeOff") {
        res.end(greeter.seeOff(name));
    }
});

server.listen(
    8000,
    "localhost",
    () => console.log("HTTP server started and available at http://localhost:8000.")
);

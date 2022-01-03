"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
const greeter_1 = __importDefault(require("./greeter"));
const server = http_1.default.createServer((req, res) => {
    const myUrl = new url_1.default.URL("http://localhost:8000" + req.url);
    const name = myUrl.searchParams.get("name") || "John";
    const formally = myUrl.searchParams.get("formally") === "true";
    if (myUrl.pathname === "/welcome") {
        res.end(greeter_1.default.welcome(name, formally));
    }
    if (myUrl.pathname === "/seeOff") {
        res.end(greeter_1.default.seeOff(name));
    }
});
server.listen(8000, "localhost", () => console.log("HTTP server started and available at http://localhost:8000."));

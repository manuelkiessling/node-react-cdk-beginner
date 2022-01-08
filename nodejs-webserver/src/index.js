"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var url_1 = __importDefault(require("url"));
var greeter_1 = __importDefault(require("./greeter"));
var server = http_1["default"].createServer(function (req, res) {
    var myUrl = new url_1["default"].URL("http://localhost:8000" + req.url);
    var name = myUrl.searchParams.get("name") || "";
    var formally = myUrl.searchParams.get("formally");
    if (myUrl.pathname === 1) {
        res.end(greeter_1["default"].welcome(name, formally === "true"));
    }
    if (myUrl.pathname === "/seeOff") {
        res.end(greeter_1["default"].seeOff(name));
    }
});
server.listen(8000, "localhost", function () { return console.log("HTTP server started and available at http://localhost:8000."); });

"use strict";
exports.__esModule = true;
var http_1 = require("http");
var url_1 = require("url");
var greeter_1 = require("./greeter");
var server = http_1["default"].createServer(function (req, res) {
    var myUrl = new url_1["default"].URL("http://localhost:8000" + req.url);
    var name = myUrl.searchParams.get("name");
    var formally = myUrl.searchParams.get("formally");
    if (myUrl.pathname === "/welcome") {
        res.end(greeter_1["default"].welcome(name, formally));
    }
    if (myUrl.pathname === "/seeOff") {
        res.end(greeter_1["default"].seeOff(name));
    }
});
server.listen(8000, "localhost", function () { return console.log("HTTP server started and available at http://localhost:8000."); });

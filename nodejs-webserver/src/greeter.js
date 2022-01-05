"use strict";
exports.__esModule = true;
var welcome = function (name, formally) {
    if (formally) {
        return "Good day to you, " + name;
    }
    else {
        return "Hello " + name;
    }
};
var seeOff = function (name) { return "Goodbye " + name; };
exports["default"] = {
    welcome: welcome,
    seeOff: seeOff
};

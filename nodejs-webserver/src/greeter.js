"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcome = (name, formally) => {
    if (formally) {
        return "Good day to you, " + name;
    }
    else {
        return "Hello " + name;
    }
};
const seeOff = (name) => "Goodbye " + name;
exports.default = {
    welcome,
    seeOff
};

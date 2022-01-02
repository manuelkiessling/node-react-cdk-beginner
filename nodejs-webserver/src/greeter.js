const welcome = (name, formally) => {
    if (formally === true || formally === "true") {
        return "Good day to you, " + name
    } else {
        return "Hello " + name
    }
};

const seeOff = (name) => "Goodbye " + name;

module.exports = {
    welcome,
    seeOff
};

const welcome = (name, formally) => {
    if (formally) {
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

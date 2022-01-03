const welcome = (name: string, formally: boolean) => {
    if (formally) {
        return "Good day to you, " + name;
    } else {
        return "Hello " + name;
    }
};

const seeOff = (name: string) => "Goodbye " + name;

export default {
    welcome,
    seeOff
};

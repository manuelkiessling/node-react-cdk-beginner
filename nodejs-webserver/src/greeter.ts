const welcome = (name: string, formally: boolean): string => {
    if (formally) {
        return "Good day to you, " + name;
    } else {
        return "Hello " + name;
    }
};

const seeOff = (name: string): string => "Goodbye " + name;

export default {
    welcome,
    seeOff
};

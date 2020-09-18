
const greetFriendly = (name) => {
    console.log("Hello " + name);
};

const greetTwoPeople = (greetFunc, nameOne, nameTwo) => {
    greetFunc(nameOne);
    greetFunc(nameTwo);
};

greetTwoPeople(
    (name) => console.log("Hi " + name),
    "Jane",
    "John"
);

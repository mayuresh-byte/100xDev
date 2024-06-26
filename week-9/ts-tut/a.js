"use strict";
const isLegal = (user) => {
    return user.age >= 18;
};
console.log(isLegal({
    firstname: "Mayuresh",
    lastname: "Pitambare",
    email: "m@gmail.com",
    age: 20
}));

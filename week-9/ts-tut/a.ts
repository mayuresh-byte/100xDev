const isLegal = (user: User) => {
    return user.age >= 18;
}

interface User {
    firstname: string;
    lastname: string;
    email: string;
    age: number
}

console.log(isLegal({
    firstname: "Mayuresh",
    lastname: "Pitambare",
    email: "m@gmail.com",
    age: 20
}));

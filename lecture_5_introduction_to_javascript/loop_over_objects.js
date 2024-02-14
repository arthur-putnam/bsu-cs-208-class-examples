


let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log('------------------------')

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}


console.log('------------------------')

for (const key of Object.keys(person)) {
    console.log(`${key}`);
}
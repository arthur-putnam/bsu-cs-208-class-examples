var varExample = 10;
let letExample = 20;
const constExample = 30;

function myFunction(){
    var varExample = 100;
    let letExample = 200;
    const constExample = 300;

    console.log("Function", varExample);
    console.log("Function", letExample);
    console.log("Function", constExample);
}
myFunction();

console.log("Module", varExample);
console.log("Module", letExample);
console.log("Module", constExample);
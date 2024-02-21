
const a = [1,2,3]
const b = [2,1,3]
const c = [1,2,3]

console.log(`\n[${a}] === [${b}]`)
if (a === b){
    console.log("The same!")
} else {
    console.log("Not the same!")
}


console.log(`\n[${a}] === [${c}]`)
if (a === c){
    console.log("The same!")
} else {
    console.log("Not the same!")
}


console.log(`\n[${a}] == [${c}]`)
if (a == c){
    console.log("The same!")
} else {
    console.log("Not the same!")
}


var globalVariable = "I am a global variable";

function myFunction() {
    // Function scope variable
    var functionVariable = "I am a function variable";
    let localVariable = "I am a local variable";

    if (localVariable) {
        let localVariable = 10;
        var functionVariable = 42;
        console.log(localVariable);
        console.log(functionVariable);
    }

    console.log(localVariable);
    console.log(functionVariable);
}

myFunction();
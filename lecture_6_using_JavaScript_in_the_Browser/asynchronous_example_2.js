




console.log("Task 1");
new Promise((resolve, reject) => {
    // Perform asynchronous operation
    setTimeout(()=> {
        console.log("Task 2");
        resolve("Operation completed successfully");
    }, 2000)
});
console.log("Task 3");
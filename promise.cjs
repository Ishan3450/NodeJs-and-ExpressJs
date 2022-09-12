let a = 10, b = 0;


let processingData = new Promise(
    (resolve, reject) => {
        
        setTimeout(() => {
            resolve(b = 1);
            resolve(30);
        }, 2000);        

    }
)

processingData.then(
    (returnedData) => {
        b = returnedData; // or we can simply write a + b in this case only
        console.log("Promised Output : " + (a + b));
    }
);
// without code the log will be 10
// with code the log will be 11
console.log("First Output : " + (a + b));
// Below code is an exmple of asynchronous programming

// this will be executed 2nd
setTimeout(() => {

    console.log("1 !");
},3000);

// this will be executed first
setTimeout(() => {
    console.log("2 @");
    
},2000);

// this will be executed third
setTimeout(() => {

    console.log("3 #");
},5000);

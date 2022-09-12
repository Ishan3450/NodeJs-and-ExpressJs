// to use import instead of the const declaration first one have to add "type" : "module " in package.json file
// const chalk = require('chalk');
const http = require('http');
const fs = require('fs');
const path = require('path');



const dirPath = path.join(__dirname, 'files')

// below loop will creat 5 text files in the file folder
for (let i=1; i<=5; i++){
    fs.writeFileSync(`${dirPath}/test${i}.txt`, '');
}

// below part will read all the files in the files folder
fs.readdir(dirPath,
    (err, files) => {
        files.forEach(
            (singleFileItem) => {
                console.log(singleFileItem);
            }
        )
    }
)

// if (process.argv[2] == 'add') {
//     let commandLineInput = [];
//     for (let i = 4; i < process.argv.length; i++) {
//         commandLineInput.push(process.argv[i]);
//     }

//     fs.writeFileSync(process.argv[3] + '.txt', JSON.stringify(commandLineInput));
// } else if ((process.argv[2] == 'remove')) {
//     fs.unlinkSync(process.argv[3] + '.txt');
// } else {
//     console.log('Invalid Input');
// }
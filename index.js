// to use import instead of the const declaration first one have to add "type" : "module " in package.json file
// import chalk from 'chalk';
// import http from 'http';
// import fs from 'fs';
// import path from 'path';

// to print the current working directory
console.log(process.cwd());

const dirPath = path.join(__dirname, 'files')

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
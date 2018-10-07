const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
};

const test = async ()=>{

  const currentFile = await readFile(__filename);
  console.log(currentFile.toString())

  const packageJsonFile = path.join(__dirname, 'package.json');
  const packagejson = await readFile(packageJsonFile);
  console.log(packagejson.toString())

  const testFile = path.join(__dirname, 'test.js');
  const testFileContent = await readFile(testFile);
  console.log(testFileContent.toString())

};

test();
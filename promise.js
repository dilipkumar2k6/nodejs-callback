const fs = require('fs');
const path = require('path');

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

readFile(__filename)
  .then((data) => {
    console.log(data.toString());
    const packageJsonFile = path.join(__dirname, 'package.json');

    readFile(packageJsonFile)
      .then((data) => {
        console.log(data.toString());
        const testFile = path.join(__dirname, 'test.js');
        readFile(testFile)
          .then((data) => {
            console.log(data.toString());

          });
      });
  });
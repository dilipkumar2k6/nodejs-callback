const fs = require('fs');
const path = require('path');

fs.readFile(__filename, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());

  const packageJsonFile = path.join(__dirname, 'package.json');
  console.log(packageJsonFile)

  fs.readFile(packageJsonFile, (err2, data2) => {
    if (err2) {
      console.error(err);
      return;
    }
    console.log(data2.toString());

    const testFile = path.join(__dirname, 'test.js');
    console.log(packageJsonFile)

    fs.readFile(testFile, (err3, data3) => {
      if (err3) {
        console.error(err);
        return;
      }
      console.log(data3.toString());
    })
  })

});

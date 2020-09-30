const fs = require('fs') 

fs.readFile('data.txt', (err, data) => { 
    if (err) throw err; 
  
    // console.log(data.toString()); 
    const arr = data.toString().split("\r\n");
    // console.log(arr);

    const properties = arr[0].split(", ");
    // console.log(properties);

    arr.shift();
    let fileContent = [];

    for (let i = 0; i < arr.length; i++) {
        const currentInfoArr = arr[i].split(", "); //spliting each info line to array of strings
        const obj = {};

        for (let j = 0; j < properties.length; j++) { //adding each property to a new object, with it's corresponding value
            obj[properties[j]] = currentInfoArr[j];
        }
        fileContent.push(obj);
    }

    console.log(fileContent);
}) 


const fs = require('fs')

fs.writeFile('Textfile.txt', 'Hello, File System!', 'utf-8', (err, data) =>{
    if (err) throw error;
    console.log('write complete');
})

fs.readFile('Textfile.txt', 'utf-8', (err, data) =>{
    if (err) throw error;
    console.log(data);
})
const fs = require('fs');

//Create a read stream
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

//Create a write stream
const ws = fs.createWriteStream('./files/new-lorem.txt');

//Listen for the data coming in from the stream
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

//Improvded listen for data
rs.pipe(ws);
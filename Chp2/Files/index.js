const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt' ), 'utf8');
        console.log(data);
        //Delete the file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt' ), data);

        //Create new file promiseWrite.txt
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt' ), data);

        //Update file with new text "Nice to meet you"
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt' ), '\n\nNice to meet you.');

        //Rename the updated file to "promiseComplete.txt"
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt' ), path.join(__dirname, 'files', 'promiseComplete.txt' ));

        //Set the new data and console log to show results
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt' ), 'utf8');
        console.log(newData);
    } catch (err){
        console.error(err)
    }
}

fileOps();

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt' ), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt' ), '\n\n Yes it is', (err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newRepyly.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//         })
//     })
// })



// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
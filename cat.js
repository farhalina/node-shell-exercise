const fs = require('fs')

module.exports = function () {
    process.stdin.on('data', (data) => {
    data = data.toString().trim();
    if (data.slice(0,3) === 'cat'){
        const fileName = data.slice(4);
        // console.log(fileName);
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            process.stdout.write(data);
        });

    }
}
)}

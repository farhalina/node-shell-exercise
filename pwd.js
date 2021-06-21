process.stdout.write('prompt > ');

module.exports = function () {
    process.stdin.on('data', (data) => {
    data = data.toString().trim();
    if (data ==='pwd'){
        process.stdout.write(`Current directory: ${process.cwd()}`);
    }
    process.stdout.write('\nYou typed: ' + data);
    process.stdout.write('\nprompt > ');
})
}


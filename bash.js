process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    if (data ==='pwd'){
        process.stdout.write(`Current directory: ${process.cwd()}`);
        process.stdout.write('\nprompt > ');
    } else {
        const cmd = data.toString().trim();
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});


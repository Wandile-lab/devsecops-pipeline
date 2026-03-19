const fs = require('fs');

function readFile(filename) {
    // Vulnerable: directly uses user input
    return fs.readFileSync(filename, 'utf8');
}

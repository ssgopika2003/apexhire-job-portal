const fs = require('fs');
try {
    const content = fs.readFileSync('jobs_output.json', 'utf16le');
    console.log(content);
} catch (e) {
    console.error(e);
}

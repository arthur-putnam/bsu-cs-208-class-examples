

const fs = require('fs');

// Specify the file path
const filePath = 'lecture_5_introduction_to_javascript/example.txt';

// Read the contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

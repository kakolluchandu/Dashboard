const fs = require('fs');

// Read the contents of db.json
const rawData = fs.readFileSync('db.json');
const data = JSON.parse(rawData);

// Manipulate the data (example: add a timestamp)
data.timestamp = new Date().toISOString();

// Write the manipulated data back to db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

console.log('Data manipulation completed.');

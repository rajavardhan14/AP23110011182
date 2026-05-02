const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs.txt');

module.exports = function log(message) {
fs.appendFile(logFile, message + "\n", () => {});
};

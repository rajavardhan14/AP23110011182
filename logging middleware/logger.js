const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs.txt');

const logger = (req, res, next) => {
const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
fs.appendFile(logFile, log, () => {});
next();
};

module.exports = logger;

// Create connection to database.
sqlite3 = require('better-sqlite3')
exports.db = new sqlite3('models/testing.db', {verbose: console.log})
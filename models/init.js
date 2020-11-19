db = require('./base').db
fs = require('fs')
path = require('path')

exports.init_DB = async () => {
    const script = fs.readFileSync(path.join(__dirname, 'models/setup.sql'), 'utf8')
    try {
        await db.exec(script)
    } catch (err) {
        console.log(err.message)
        return false
    }
    return true
}
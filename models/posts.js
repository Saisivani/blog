db = require('./base').db


// Add post
exports.add_post = async (title, body) => {
    let stmn = db.prepare("INSERT INTO posts(title, body, created_on) VALUES (?, ?, ?)")
    let msg
    try {
        msg = await stmn.run(title, body, Date.now())
    } catch (e) {
        console.log(e.message)
        return null
    }
    return msg
}

// Get post by id


// Get all posts


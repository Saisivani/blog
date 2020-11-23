db = require('./base').db


// Add post
exports.add_post = async (title, body) => {
    let stmnt = db.prepare("INSERT INTO posts(title, body, created_on) VALUES (?, ?, ?)")
    let msg
    try {
        msg = await stmnt.run(title, body, Date.now())
    } catch (e) {
        console.error(e.message)
        return null
    }
    return msg
}

// Get post by id
exports.get_post_by_id = async (id) => {
    let stmnt = db.prepare('SELECT * FROM posts WHERE id=?')
    let result
    try {
        result = await stmnt.get(id)
    } catch (e) {
        console.error(e.message)
        return null
    }
    return result
}

// Get all posts
exports.get_all_posts = async () => {
    let stmnt = db.prepare('SELECT * FROM posts')
    let result
    try {
        result = await stmnt.all()
    } catch (e) {
        console.error(e.message)
        return null
    }
    return result
}


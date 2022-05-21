const db = require('../connection');
module.exports = class Book  {
    constructor(id, title, total_pages, year, author_id, category_id, description) {
        this.id = id;
        this.title = title;
        this.total_pages = total_pages;
        this.year = year;
        this.author_id = author_id;
        this.category_id = category_id;
        this.description = description
    }
    save() {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO book(title, total_pages, year, author_id, category_id, description) VALUES(?, ?, ?, ?, ?, ?)'
            var self = this
            db.query(sql, [this.title, this.total_pages, this.year, this.author_id, this.category_id, this.description], (err, result) => {
                if(err) reject(err)
                self.id = result.insertId
                resolve(self)
            })
        })
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM book WHERE id = ?`
            db.query(sql, [id], (err, result) => {
                if(err) return reject(err)
                if(result.length){
                    return resolve(result)
                }
                resolve({message: 'not found'})
            })
        })
    }
    
}
function find() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM book '
        db.query(sql, (err, result) => {
            if(err) reject(err)
            resolve(result)
        } )
    })
}
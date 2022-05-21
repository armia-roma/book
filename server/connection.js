const mysql = require('mysql');
const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'book_library'
});
function dbPromise() {
    return new Promise((resolve, reject) => {
        db.connect((err) => {
            if(err) return reject(err);
            resolve(console.log("connected"))
        });
    });
};

async () => await dbPromise();
module.exports = db;

const DBModel = require("./DB.model");

class BaseModel {
    conn;
    constructor() {
        let db = new DBModel();
        this.conn = db.connect();

    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, result) => {
                if (err) {
                    reject(err.message);
                }
                else {
                    resolve(result);
                }
            })
        })
    }
}

module.exports = BaseModel;
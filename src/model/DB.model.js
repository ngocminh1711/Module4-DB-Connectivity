const mysql = require("mysql");

class DBModel {

 host;
 port;
 database;
 user;
 password;
 charset;

 constructor() {
     this.host = 'localhost';
     this.port = 3306;
     this.user = 'root';
     this.password = '123456';
     this.database = 'quanly_nhanvien';
     this.charset = 'utf8_general_ci';
 }
 connect() {
    return mysql.createConnection({
        host: this.host,
        port: this.port,
        user: this.user,
        database: this.database,
        password: this.password
    })
 }

}
module.exports = DBModel;
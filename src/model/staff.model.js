const BaseModel = require('../model/base.model');

class StaffModel extends BaseModel {




    async getAllStaff() {
        const sql = `SELECT * FROM staff`
        return await this.querySQL(sql);
    }
    async createNewStaff(data) {
        const sql = `INSERT INTO staff (name, age, gender, birthday, phone) VALUES('${data.fullName}', ${data.age}, '${data.gender}', '${data.birthday}', ${data.phone})`
        return await this.querySQL(sql);
    }
    async delete(id) {
        const sql = `D`
    }

}
module.exports = StaffModel;
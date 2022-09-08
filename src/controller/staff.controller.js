
const StaffModel = require("../model/staff.model")
class Staff {
    staffModel;
    constructor() {
        this.staffModel = new StaffModel();
    }

    async showFormStaff(req, res) {
        let staffs = await this.staffModel.getAllStaff();
        res.render('index', {data: staffs});
    }
    async showCreateStaff(req, res) {
    res.render('createStaff')
    }
    async createStaff(req, res) {
        let data = req.body
        await this.staffModel.createNewStaff(data);
        res.render('index');
    }
    async deleteStaff(req, res) {
        let id = req.query;
        console.log(id);
        res.render('index')
    }
}
module.exports = Staff;
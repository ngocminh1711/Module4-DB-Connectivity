const Staff = require("../src/controller/staff.controller");
const router = require('express').Router();
const multer = require('multer')
const upload = multer();


let staff = new Staff();

router.get('/', (req, res,next) => {
    staff.showFormStaff(req, res, next)
});
router.get('/staff/create', (req, res, next) => {
    staff.showCreateStaff(req, res, next);
});
router.post('/staff/create',upload.none(), (req, res, next) => {
    staff.createStaff(req, res, next).catch((err) => {
        if (err) throw err.message;
    })
    ;
router.get('/deleteStaff', (req, res) => {
    console.log(1)
    // staff.deleteStaff(req, res).catch((err) => {
    //     if (err) console.log(err.message);
    // })
})
})

module.exports = router;
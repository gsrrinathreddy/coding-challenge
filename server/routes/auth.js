const express = require("express");
const router = express.Router();
const {registerController,loginController} = require('../controllers/auth');

router.get('/',(req,res)=>{
    res.json({
        data: "this is rest api endpoint"
    })
});

router.post('/register',registerController);
router.post('/login',loginController);

module.exports = router; 
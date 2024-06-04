const { authentication, restrictTo } = require('../controller/authController');
const { getAllUsers } = require('../controller/userController');

const router = require('express').Router();

router.route('/').get(authentication, restrictTo('0'), getAllUsers);

module.exports = router;
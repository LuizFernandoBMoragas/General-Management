const { authentication, restrictTo } = require('../controller/authController');
const { createProject, getAllProjects } = require('../controller/projectController');

const router = require('express').Router();

router.route('/').post(authentication, restrictTo('1'), createProject).get(authentication, getAllProjects);

module.exports = router;

const express = require('express');

const router = express.Router();

const UserManagementController = require('./controller');

const userManagementController = new UserManagementController();

router.route('/login')
.get(userManagementController.authenticateJWT, userManagementController.getUserDetails)

router.route('/register')
.post(userManagementController.addUserDetals)

router.route('/updateDetails')
.put(userManagementController.updateUserDetals)



module.exports = router 
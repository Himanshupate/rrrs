var express = require('express');
var router = express.Router();

var request_controller = require('../controllers/requestController');
var user_controller = require('../controllers/userController');

//Handle Generate Request POST
router.post('/generate', request_controller.user_generate_request_post);

//

module.exports = router;
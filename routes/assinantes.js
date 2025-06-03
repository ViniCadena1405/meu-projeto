const express = require("express");
const router = express.Router();
const userController = require("../controllers/personController");
const homeController = require("../controllers/home")
const login = require("../controllers/loginController")

router.get('/home', homeController.index);
router.post('/login', login.index);
router.post('/edit/:user_id', controller.update);
router.post('/delete/:user_id', controller.destroy);

module.exports = router;
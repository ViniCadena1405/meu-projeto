const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscribeController");

router.get('/', controller.index);
router.post('/', controller.store);
router.post('/edit/:user_id', controller.update);
router.post('/delete/:user_id', controller.destroy);

module.exports = router;
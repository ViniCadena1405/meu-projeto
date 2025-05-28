const express = require("express");
const router = express.Router();
const PessoasControle = require("../controllers/personController");
const sobre = require("../controllers/sobre");
const home = require("../controllers/home");
const login = require("../controllers/loginController")

router.get("/", home.index);

router.get("/sobre", sobre.index);

router.get("/login", login.index);

module.exports = router;
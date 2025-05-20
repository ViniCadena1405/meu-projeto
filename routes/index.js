const express = require("express");
const router = express.Router();
const PessoasControle = require("../controllers/HomeController");

router.post("/users", PessoasControle.criarPessoa);
router.get("/users", PessoasControle.listarPessoas);
router.put("/users/:id", PessoasControle.editarPessoas);
router.delete("/users/:id", PessoasControle.excluirPessoa);

module.exports = router;
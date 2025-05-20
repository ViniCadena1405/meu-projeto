const pool = require("../config/database");

exports.criarPessoa = async(req, res) => {
    const {id, nome, age, country, profession, phonenumber} = req.body;

    const query = "INSERT INTO users (id, nome, age, country, profession, phonenumber) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [id, nome, age, country, profession, phonenumber];

    try {
        const result = await pool.query(query, values);
        const pessoa = result.rows[0];
        res.status(201).json(pessoa);
    }

    catch(err) {
        res.status(500).json({error: err.message});
    }
};

exports.listarPessoas = async(req, res) => {
    const query = "SELECT * FROM users";

    try {
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    }

    catch(err) {
        res.status(500).json({error: err.message})
    }
};

exports.editarPessoas = async(req, res) => {

    const {id} = req.params;

    const {nome, age, country, profession, phonenumber} = req.body;

    const query = `UPDATE users SET nome = $1, age = $2, country = $3, profession = $4, phonenumber = $5 WHERE id = $6 RETURNING *`;

    const values = [nome, age, country, profession, phonenumber, id]

    try {
        const result = await pool.query(query, values);
        if(result.rows.length === 0) {
            return res.status(404).json({message: "Pessoa nao foi encontrada"})
        }
        res.status(200).json(result.rows[0]);
    }

    catch(err) {
        res.status(500).json({error: err.message})
    }
};

exports.excluirPessoa = async(req, res) => {
    const {id} = req.params;

    const query = "DELETE FROM users WHERE id = $1 RETURNING *";

    const values = [id]

    try {
        const result = await pool.query(query, values);
        if(result.rows.length === 0) {
            return res.status(404).json({message: "Pessoa nao foi encontrada"})
        }
        res.status(200).json({message: "Pessoa foi excluída"});
    }

    catch(err) {
        res.status(500).json({error: err.message})
    }
};
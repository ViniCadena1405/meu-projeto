const db = require("../config/database");


class User {
    static async getAll() {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    }

    static async getByID(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async create(data) {
        const result = await db.query('INSERT INTO users (nome, senha) VALUES ($1, $2) RETURNING *', [data.nome, data.senha]);
        return result.rows[0];
    }

    static async update(id, data) {
        const result = await db.query('UPDATE users SET nome = $1, senha = $2 WHERE id = $3', [data.nome, data.senha, id]);
        return result.rows[0];
    }

    static async delete(id) {
        const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rowCount > 0;
    }
}

module.exports = User;
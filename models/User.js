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
        const result = await db.query('INSERT INTO users (nome, age, country, profession, phonenumber) VALUES ($1, $2, $3, $4, $5) RETURNING *', [data.nome, data.age, data.country, data.profession, data.phonenumber]);
        return result.rows[0];
    }

    static async update(id, data) {
        const result = await db.query('UPDATE users SET nome = $1, age = $2, country = $3, profession = $4, phonenumber = $5 WHERE id = $6', [data.nome, data.age, data.country, data.profession, data.phonenumber, id]);
        return result.rows[0];
    }

    static async delete(id) {
        const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rowCount > 0;
    }
}

module.exports = User;
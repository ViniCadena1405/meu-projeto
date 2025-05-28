const db = require("../config/database")

module.exports = {
    async create(data) {
        const query = 'INSERT INTO assinatura (username, tipo) VALUES ($1, $2)';
        const values = [data.username, data.tipo];
        return db.query(query, values);
    },

    async findAll() {
        const result = await db.query('SELECT * FROM assinatura ORDER BY user_id ASC');
        return result.rows;
    },

    async update(user_id, data) {
        const query = 'UPDATE assinatura SET nome = $1, tipo = $2 WHERE user_id = $3';
        const values = [data.username, data.tipo, user_id];
        return db.query(query, values);
    },
    
    async delete(user_id) {
        const query = 'DELETE FROM assinatura WHERE user_id = $1';
        return db.query(query, [user_id]);
    }
}
const pool = require("../config/database");

async function migrate() {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER,
        country VARCHAR(255) NOT NULL,
        profession VARCHAR(255),
        phonenumber VARCHAR(255) UNIQUE
    );

    CREATE TABLE IF NOT EXISTS phone (
        nome INTEGER UNIQUE PRIMARY KEY,
        phonecountry VARCHAR(255),
        phonearea VARCHAR(255),
        phonecode VARCHAR(255)
    );

    ALTER TABLE phone ADD FOREIGN KEY (nome) REFERENCES users (nome);

    ALTER TABLE phone ADD FOREIGN KEY (phonecountry) REFERENCES users (phonenumber);

    ALTER TABLE phone ADD FOREIGN KEY (phonearea) REFERENCES users (phonenumber);

    ALTER TABLE phone ADD FOREIGN KEY (phonecode) REFERENCES users (phonenumber);
    `;

    try {
        await pool.query(query);
    }

    catch(err) {
        console.error(err.message)
    }

    finally {
        pool.end()
    }
}

migrate()
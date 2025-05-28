CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    country VARCHAR(255) NOT NULL,
    profession VARCHAR(255),
    phonenumber VARCHAR(255) UNIQUE
);

CREATE TABLE IF NOT EXISTS assinatura (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    tipo VARCHAR(255),
    comprado_em TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(nome, age, country, profession, phonenumber)
VALUES
    ('Balti Rusu', 74, 'Moldova', 'Retired', '+373(50) 74983-9380'),
    ('Gloria Hernandez', 45, 'El Salvador', 'Actor', '+503 83782-1037'),
    ('Bruno Barros', 83, 'Brazil', 'Retired', '+55(61) 38023-0385'),
    ('Helene Ngoyi', 58, 'Democratic Republic of Congo', 'Scientist', '+243 02838-2937'),
    ('Gus King', 69, 'New Zealand', 'Teacher', '+64(0) 30938-3944'),
    ('Lee Scholtes', 46, 'Luxembourg', 'Doctor', '+352 65982-6227');
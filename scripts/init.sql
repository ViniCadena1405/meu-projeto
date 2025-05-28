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
    ('Balti Rusu', 74, 'Moldávía', 'Aposentada', '+373(50) 74983-9380'),
    ('Gloria Hernandez', 45, 'El Salvador', 'Ator', '+503 83782-1037'),
    ('Bruno Barros', 83, 'Brasil', 'Aposentado', '+55(61) 38023-0385'),
    ('Helene Ngoyi', 58, 'República Democrática do Congo', 'Cientista', '+243 02838-2937'),
    ('Gus King', 69, 'Nova Zelândia', 'Professor', '+64(0) 30938-3944'),
    ('Lee Scholtes', 46, 'Luxemburgo', 'Médico', '+352 65982-6227');
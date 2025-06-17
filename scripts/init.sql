CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) UNIQUE,
    senha VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS assinatura (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    tipo VARCHAR(255),
    comprado_em TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(nome, senha)
VALUES
    ('Balti Rusu', 'ini444v4i'),
    ('Gloria Hernandez', 'i4tv4vun'),
    ('Bruno Barros', '8rn29nu'),
    ('Helene Ngoyi', 'Senha'),
    ('Gus King', '12344321'),
    ('Lee Scholtes', '74v84u');
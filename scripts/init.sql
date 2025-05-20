CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER,
    country VARCHAR(255) NOT NULL,
    profession VARCHAR(255),
    phonenumber VARCHAR(255) UNIQUE
);

CREATE TABLE IF NOT EXISTS phone (
    nome VARCHAR(255) UNIQUE PRIMARY KEY,
    phonecountry VARCHAR(255),
    phonearea VARCHAR(255),
    phonecode VARCHAR(255)
);

INSERT INTO users(id, nome, age, country, profession, phonenumber)
VALUES
    (1, 'Balti Rusu', 74, 'Moldova', 'Retired', '+373(50) 74983-9380'),
    (2, 'Gloria Hernandez', 45, 'El Salvador', 'Actor', '+503 83782-1037'),
    (3, 'Bruno Barros', 83, 'Brazil', 'Retired', '+55(61) 38023-0385'),
    (4, 'Helene Ngoyi', 58, 'Democratic Republic of Congo', 'Scientist', '+243 02838-2937'),
    (5, 'Gus King', 69, 'New Zealand', 'Teacher', '+64(0) 30938-3944'),
    (6, 'Lee Scholtes', 46, 'Luxembourg', 'Doctor', '+352 65982-6227');


ALTER TABLE phone ADD FOREIGN KEY (nome) REFERENCES users (nome);

ALTER TABLE phone ADD FOREIGN KEY (phonecountry) REFERENCES users (phonenumber);

ALTER TABLE phone ADD FOREIGN KEY (phonearea) REFERENCES users (phonenumber);

ALTER TABLE phone ADD FOREIGN KEY (phonecode) REFERENCES users (phonenumber);
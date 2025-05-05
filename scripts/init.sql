-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL
);

-- Inserir 20 usuários com nomes e countrys aleatórios
INSERT INTO users (name, country)
VALUES 
  ('Luzia Victor', 'East Timor'),
  ('Fatima Peters', 'Luxembourg'),
  ('Jorma Aalto', 'Finland'),
  ('Ira Ivanković', 'Croatia'),
  ('Mariann Teig', 'Norway'),
  ('Kamila Kalieva', 'Kazakhstan'),
  ('Pyotr Akhmyedova', 'Uzbekistan'),
  ('Didier Diallo', 'Gabon'),
  ('Enos Kama', 'Papua New Guinea'),
  ('Farag Abu', 'Egypt'),
  ('Juliana Anes', 'Cape Verde'),
  ('Grazia Zani', 'San Marino'),
  ('Elissa Abdul Aziz', 'Kuwait'),
  ('Kari Djibrine', 'Chad'),
  ('Eder Ack', 'Belize'),
  ('Jianxin Xie', 'Singapure'),
  ('Felipe De Souza', 'Uruguay'),
  ('Keyla Herrera', 'Venezuela'),
  ('Felina Bordelies', 'Puerto Rico'),
  ('Hermenegilda Guzman', 'Mexico');

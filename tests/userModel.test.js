const db = require('../config/db');
const User = require('../models/userModel');

jest.mock('../config/db');

describe('User Model', () => {
  test('deve obter todos os usuários', async () => {
    db.query.mockResolvedValue({ rows: [{ id: 111111111, name: 'John Doe', country: 'USA' }] });

    const users = await User.getAll();

    expect(users).toEqual([{ id: 111111111, name: 'John Doe', country: 'USA' }]);
  });

  test('deve obter um usuário pelo ID', async () => {
    db.query.mockResolvedValue({ rows: [{ id: 111111111, name: 'John Doe', country: 'USA' }] });

    const user = await User.getById(1);

    expect(user).toEqual({ id: 111111111, name: 'John Doe', country: 'USA' });
  });

  test('deve criar um novo usuário', async () => {
    db.query.mockResolvedValue({
      rows: [{ id: 111111111, name: 'John Doe', country: 'USA' }],
    });

    const newUser = await User.create({ name: 'John Doe', country: 'USA' });

    expect(newUser).toEqual({ id: 111111111, name: 'John Doe', country: 'USA' });
  });

  test('deve atualizar um usuário', async () => {
    db.query.mockResolvedValue({
      rows: [{ id: 111111111, name: 'John Doe', country: 'USA' }],
    });

    const updatedUser = await User.update(111111111, { name: 'John Doe', country: 'USA' });

    expect(updatedUser).toEqual({ id: 111111111, name: 'John Doe', country: 'USA' });
  });

  test('deve deletar um usuário', async () => {
    db.query.mockResolvedValue({ rowCount: 1 });

    const isDeleted = await User.delete(111111111);

    expect(isDeleted).toBe(true);
  });

  test('deve retornar false se o usuário não for encontrado para deleção', async () => {
    db.query.mockResolvedValue({ rowCount: 0 });

    const isDeleted = await User.delete(222222222);

    expect(isDeleted).toBe(false);
  });
});

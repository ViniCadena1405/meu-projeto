// tests/userService.test.js

const userService = require('../services/userService');
const db = require('../config/db');

jest.mock('../config/db');

describe('userService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllUsers deve retornar todos os usuários', async () => {
    const mockUsers = [
      { id: '111111111', name: 'John Doe', country: 'USA' },
      { id: '222222222', name: 'Jane Doe', country: 'USA' },
    ];
    db.query.mockResolvedValueOnce({ rows: mockUsers });

    const users = await userService.getAllUsers();
    expect(users).toEqual(mockUsers);
  });

  test('getUserById deve retornar o usuário correto', async () => {
    const mockUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    db.query.mockResolvedValueOnce({ rows: [mockUser] });

    const user = await userService.getUserById('111111111');
    expect(user).toEqual(mockUser);
  });

  test('createUser deve criar um novo usuário', async () => {
    const newUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    db.query.mockResolvedValueOnce({ rows: [newUser] });

    const createdUser = await userService.createUser('John Doe', 'USA');
    expect(createdUser).toEqual(newUser);
  });

  test('updateUser deve atualizar um usuário', async () => {
    const updatedUser = { id: '111111111', name: 'John Doe', country: 'Canada' };
    db.query.mockResolvedValueOnce({ rows: [updatedUser] });

    const result = await userService.updateUser('111111111', 'John Doe', 'Canada');
    expect(result).toEqual(updatedUser);
  });

  test('deleteUser deve deletar um usuário', async () => {
    const deletedUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    db.query.mockResolvedValueOnce({ rows: [deletedUser] });

    const result = await userService.deleteUser('111111111');
    expect(result).toEqual(deletedUser);
  });
});

// tests/userController.test.js

const userController = require('../controllers/userController');
const userService = require('../services/userService');

jest.mock('../services/userService');

describe('userController', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('getAllUsers deve retornar todos os usuários', async () => {
    const mockUsers = [
      { id: '111111111', name: 'John Doe', country: 'USA' },
      { id: '222222222', name: 'Jane Doe', country: 'USA' },
    ];
    userService.getAllUsers.mockResolvedValueOnce(mockUsers);

    await userController.getAllUsers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  test('getUserById deve retornar o usuário correto', async () => {
    const mockUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    req.params = { id: '111111111' };
    userService.getUserById.mockResolvedValueOnce(mockUser);

    await userController.getUserById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUser);
  });

  test('createUser deve criar um novo usuário', async () => {
    const newUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    req.body = { name: 'John Doe', country: 'USA' };
    userService.createUser.mockResolvedValueOnce(newUser);

    await userController.createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newUser);
  });

  test('updateUser deve atualizar um usuário', async () => {
    const updatedUser = { id: '111111111', name: 'John Doe', country: 'Canada' };
    req.params = { id: '111111111' };
    req.body = { name: 'John Doe', country: 'Canada' };
    userService.updateUser.mockResolvedValueOnce(updatedUser);

    await userController.updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedUser);
  });

  test('deleteUser deve deletar um usuário', async () => {
    const deletedUser = { id: '111111111', name: 'John Doe', country: 'USA' };
    req.params = { id: '111111111' };
    userService.deleteUser.mockResolvedValueOnce(deletedUser);

    await userController.deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(deletedUser);
  });
});

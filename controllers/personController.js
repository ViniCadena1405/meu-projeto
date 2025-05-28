const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }

    catch(error) {
        res.status(500).json({error: error.message});
    }
};

const getUserByID = async (req, res) => {
    try {
        const users = await userService.getUserByID(req.params.id);
        if(users) {
            res.status(200).json(users);
        }
        
        else {
            res.status(404).json({error: "Usuário não encontrado"});
        }
    }

    catch(error) {
        res.status(500).json({error: error.message});
    }
};

const createUser = async (req, res) => {
    try {
        const {nome, age, country, profession, phonenumber} = req.body;
        const novoUsuario = await userService.createUser(nome, age, country, profession, phonenumber);
        res.status(201).json(novoUsuario);
    }

    catch(error) {
        res.status(500).json({error: error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const {nome, age, country, profession, phonenumber} = req.body;
        const updatedUser = await userService.updateUser(req.params.id, nome, age, country, profession, phonenumber);
        if (updatedUser) {
            res.status(200).json(updatedUser);
        }
      
        else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    }
    
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        if (deletedUser) {
            res.status(200).json(deletedUser);
        }
        
        else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    }
    
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}
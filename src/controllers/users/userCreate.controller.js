const userService = require('../../services/users/userCreate.service');

const userController = {
  async register(req, res) {
    try {
      console.log("Corpo da requisição:", req.body);
      const { 
        username, 
        password, 
        confirmPassword, 
        email, 
        cpf, 
        cellphone, 
        is_adm = false 
      } = req.body;

      if (!username || !password || !email || !cpf || !cellphone) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

      const result = await userService.register(
        username,
        password,
        confirmPassword,
        email,
        cpf,
        cellphone,
        is_adm
      );

      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await userService.login(username, password);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = userController;

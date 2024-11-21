const { getRepository } = require('typeorm');
const UserSchema = require('../../entities/user.entity');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userUpdateService = {

  async updateUser(userId, username, password, email, cpf, cellphone) {
    const userRepository = getRepository(UserSchema);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (cpf) user.cpf = cpf;
    if (cellphone) user.cellphone = cellphone;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await userRepository.save(user);

    return { message: 'Dados do usuário atualizados com sucesso', user };
  }
};

module.exports = userUpdateService;

const { EntitySchema } = require('typeorm');

const UserSchema = new EntitySchema({
  name: 'User',
  tableName: 'user',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    username: {
      type: 'varchar',
      length: 50,
      unique: true,
    },
    email: {
      type: 'varchar',
      length: 100,
      unique: true,
    },
    cpf: {
      type: 'varchar',
      length: 14,
      unique: true,
    },
    cellphone: {
      type: 'varchar',
      length: 50,
    },
    password: {
      type: 'varchar',
      length: 150,
    },

    is_adm: {
      type: 'boolean',
      default: false,
    },
  },
});

module.exports = UserSchema;

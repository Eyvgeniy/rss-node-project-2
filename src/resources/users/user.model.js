const { v4: uuid } = require('uuid');

class User {
  constructor(
    params = {
      id: uuid(),
      name: 'USER',
      login: 'user',
      password: 'P@55w0rd',
    }
  ) {
    this.id = params.id;
    this.name = params.name;
    this.login = params.login;
    this.password = params.password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;

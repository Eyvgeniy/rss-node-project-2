const { v4: uuid } = require('uuid');

/**
 * Class to create User object
 */
class User {
  /**
   * Create a user
   * @param {Object} userData User data
   */
  constructor({
    /**
     * @property {string} id User id
     */
    id = uuid(),
    /**
     * @property {string} name User name
     */
    name = 'USER',
    /**
     * @property {string} login User id
     */
    login = 'user',
    /**
     * @property {string} password User id
     */
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Remove password from user object for safety
   * @param {UserModel} user - User
   * @returns {UserModel} user without password property
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;

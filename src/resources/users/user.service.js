// @ts-check
const usersRepo = require('./user.memory.repository');

/**
 * Users Services Module
 * @module UsersService
 */

/**
 * User object
 * @ignore
 * @typedef {Object} UserModel
 * @property {string} id - User id
 * @property {string} name - User name
 * @property {string} login - User login
 * @property {string} password - User password (optional)
 */

/**
 * Service function to get all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Servise function to create user
 * @param {UserModel} userCredentials
 */
const save = (userCredentials) => usersRepo.save(userCredentials);

/**
 * Service function for get current user
 * @param {string} id user id
 */
const get = (id) => usersRepo.get(id);

/**
 * Service function for update user
 * @param {string} id user id
 * @param {UserModel} userCredentials user data
 */
const update = (id, userCredentials) => usersRepo.update(id, userCredentials);

/**
 * Service function for delete user
 * @param {string} id User ID
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, save, get, update, remove };

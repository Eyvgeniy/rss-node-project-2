// @ts-check
const usersRepo = require('./user.memory.repository');

/**
 * Service function to get all users
 * @returns
 */
const getAll = () => usersRepo.getAll();

/**
 * Servise function to create user
 * @param {UserModel} userCredentials
 * @returns
 */
const save = (userCredentials) => usersRepo.save(userCredentials);

/**
 * Service function for get current user
 * @param {string} id user id
 * @returns
 */
const get = (id) => usersRepo.get(id);

/**
 * Service function for update user
 * @param {string} id user id
 * @param {UserModel} userCredentials user data
 * @returns
 */
const update = (id, userCredentials) => usersRepo.update(id, userCredentials);

/**
 * Service function for delete user
 * @param {string} id user id
 * @returns
 */
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, save, get, update, remove };

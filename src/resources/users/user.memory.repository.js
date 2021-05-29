// @ts-check

const User = require('./user.model');
const tasksRepo = require('../tasks/task.memory.repository');

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
 * Users database
 * @type {Array<UserModel>}
 */
let users = [];

/**
 * Return all users
 * @async
 * @returns {Promise<Array<UserModel>>}
 */
const getAll = async () => users;

/**
 * Add user to db
 * @async
 * @param {User} userCredentials
 * @returns {Promise<UserModel>} Returns new user
 */
const save = async (userCredentials) => {
  const newUser = await new User(userCredentials);
  users.push(newUser);
  return newUser;
};

/**
 * Returns user by id
 * @async
 * @param {string} id - user id
 * @returns {Promise<UserModel>} returns users with id
 */
const get = async (id) => {
  const currentUser = users.find((user) => user.id === id);
  if (currentUser === undefined) throw new Error('User not found');
  return currentUser;
};

/**
 * Update user`s params
 * @param {string} id - user id
 * @param {User} userCredentials - user to update
 * @returns {Promise<UserModel>} - returns updated user
 */
const update = async (id, userCredentials) => {
  users = users.map((user) => (user.id === id ? { ...userCredentials } : user));
  return userCredentials;
};

/**
 * Delete user
 * @param {string} id - user`s id
 * @returns {Promise<{message: string}>} return delete message
 */
const remove = async (id) => {
  users = users.filter((user) => user.id !== id);
  tasksRepo.updateUserTasks(id);
  return { message: 'User successfully removed.' };
};

module.exports = { getAll, save, get, update, remove };

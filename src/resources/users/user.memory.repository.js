// @ts-check

const User = require('./user.model');
const tasksRepo = require('../tasks/task.memory.repository');

let users = [];

const getAll = async () => users;

const save = async (userCredentials) => {
  const newUser = await new User(userCredentials);
  users.push(newUser);
  return newUser;
};

const get = async (id) => {
  const currentUser = users.find((user) => user.id === id);
  if (currentUser === undefined) throw new Error('User not found');
  return currentUser;
};

const update = async (id, userCredentials) => {
  users = users.map((user) => (user.id === id ? { ...userCredentials } : user));
  return userCredentials;
};

const remove = async (id) => {
  users = users.filter((user) => user.id !== id);
  tasksRepo.updateUserTasks(id);
  return { message: 'User successfully removed.' };
};

module.exports = { getAll, save, get, update, remove };

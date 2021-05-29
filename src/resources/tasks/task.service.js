const tasksRepo = require('./task.memory.repository');

/**
 * Task Model
 * @typedef {Object} TaskModel
 * @property {string} id - User id
 * @property {string} title - User title
 * @property {number} order - User order
 * @property {string} description - User description
 * @property {string} userId - User userId
 * @property {string} boardId - User boardId
 * @property {string} columnId - User columnId *
 */

/**
 * Service function for Returns all tasks
 * @returns {Promise<TaskModel[]>}
 */
const getAll = () => tasksRepo.getAll();

/**
 * Service function for Create new Task
 * @param {string} boardId Board ID
 * @param {TaskModel} taskCredentials Task
 * @returns {TaskModel} Returns new Task
 */
const save = (boardId, taskCredentials) =>
  tasksRepo.save(boardId, taskCredentials);

/**
 * Service function for Returns task by ID
 * @param {string} taskId Task ID
 * @returns {TaskModel}
 */
const get = (taskId) => tasksRepo.get(taskId);

/**
 * Service function for Update Task
 * @param {{boadId: string, taskId: string, userId: string}} params Task params
 * @param {TaskModel} taskCredentials Task data
 * @returns {TaskModel}
 */
const update = (params, taskCredentials) =>
  tasksRepo.update(params, taskCredentials);

/**
 * Service function for Delete task
 * @param {{boadId: string, taskId: string, userId: string}} params
 */
const remove = (params) => tasksRepo.remove(params);

module.exports = { getAll, save, get, update, remove };

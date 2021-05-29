// @ts-check
const Task = require('./task.model');

/**
 * Tasks Repository Module
 * @module TasksRepository
 */

/**
 * Task Model
 * @ignore
 * @typedef {Object} TaskModel
 * @property {string} id - User id
 * @property {string} title - User title
 * @property {number} order - User order
 * @property {string} description - User description
 * @property {string} userId - User userId
 * @property {string} boardId - User boardId
 * @property {string} columnId - User columnId *
 */

let tasks = [];

/**
 * Return all tasks
 * @returns {Promise<Array<TaskModel>>}
 */
const getAll = async () => tasks;

/**
 * Create new Task
 * @param {string} boardId Board Id
 * @param {TaskModel} taskCredentials Task
 * @returns {Promise<TaskModel>} Return new Task
 */
const save = async (boardId, taskCredentials) => {
  const newTask = await new Task({ ...taskCredentials, boardId });
  tasks.push(newTask);
  return newTask;
};

/**
 * Returns task by Id
 * @param {string} taskId Task Id
 * @returns {TaskModel}
 */
const get = (taskId) => {
  const task = tasks.find((el) => el.id === taskId);
  if (task === undefined) throw new Error('Task not found');
  return task;
};

/**
 * Update Task
 * @param {{ taskId: string, userId: string, boardId: string}} params
 * @param {TaskModel} taskCredentials
 * @returns {TaskModel} Updated Task
 */
const update = (params, taskCredentials) => {
  tasks = tasks.map((el) =>
    el.id === params.taskId
      ? new Task({ ...taskCredentials, ...params, id: params.taskId })
      : el
  );
  return tasks.find((el) => el.id === params.taskId);
};

/**
 * Delete Task
 * @param {{ taskId: string}} param
 * @returns {{ message: string }} Returns successfully message
 */
const remove = ({ taskId }) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return { message: 'Task successfully removed.' };
};

/**
 * Remove all tasks from board
 * @param {string} boardId
 */
const removeBoardTasks = (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

/**
 * Remove user from task
 * @param {string} userId
 */
const updateUserTasks = (userId) => {
  tasks = tasks.map((task) => {
    if (task.userId === userId) {
      const newTask = task;
      newTask.userId = null;
      return newTask;
    }
    return task;
  });
};

module.exports = {
  getAll,
  save,
  get,
  update,
  remove,
  removeBoardTasks,
  updateUserTasks,
};

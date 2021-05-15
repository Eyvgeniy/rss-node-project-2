const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const save = (boardId, taskCredentials) =>
  tasksRepo.save(boardId, taskCredentials);
const get = (taskId) => tasksRepo.get(taskId);
const update = (params, taskCredentials) =>
  tasksRepo.update(params, taskCredentials);
const remove = (params) => tasksRepo.remove(params);

module.exports = { getAll, save, get, update, remove };

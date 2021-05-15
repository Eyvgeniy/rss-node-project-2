const Task = require('./task.model');

let tasks = [];

const getAll = async () => tasks;

const save = async (boardId, taskCredentials) => {
  const newTask = await new Task({ ...taskCredentials, boardId });
  tasks.push(newTask);
  return newTask;
};
const get = (taskId) => {
  const task = tasks.find((el) => el.id === taskId);
  if (task === undefined) throw new Error('Task not found');
  return task;
};

const update = (params, taskCredentials) => {
  tasks = tasks.map((el) =>
    el.id === params.taskId
      ? new Task({ ...taskCredentials, ...params, id: params.taskId })
      : el
  );
  return tasks.find((el) => el.id === params.taskId);
};

const remove = ({ taskId }) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return { message: 'Task successfully removed.' };
};

const removeBoardTasks = (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

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

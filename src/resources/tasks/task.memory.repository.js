const Task =  require('./task.model')



// const tasks = new Array(10).fill(new Task)
let tasks = []

const getAll = async () => tasks;

const save = async (boardId, taskCredentials) => {
  const newTask = await new Task({ ...taskCredentials, boardId });
  tasks.push(newTask)
  return newTask
}
const get = (taskId) => {
  const task = tasks.find(el => el.id === taskId)
  if (task === undefined) throw new Error('Task not found')
  return task;
}

const update = (params, taskCredentials) => {
  tasks = tasks.map(el => el.id === params.taskId ? new Task({ ...taskCredentials, ...params, id: params.taskId }) : el);
  return tasks.find(el => el.id === params.taskId);
}

const remove = (taskId) => {
  tasks = tasks.filter(board => board.id !== taskId);
  return { message: 'Task successfully removed.'}
}


module.exports = { getAll, save, get, update, remove
  // , save, get, update, remove
 };

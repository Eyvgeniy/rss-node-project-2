// @ts-check
import Task from './task.model';
import { ITask } from '../../models/TaskModel';
import Errors from '../../common/errors/errors-list';

let tasks = [] as Task[];

const getAll = async (): Promise<Task[]> => tasks;

const save = async (boardId: string, taskCredentials: ITask): Promise<Task> => {
  const newTask = await new Task({ ...taskCredentials, boardId });
  tasks.push(newTask);
  return newTask;
};

const get = (taskId: string): Task => {
  const task = tasks.find((el) => el.id === taskId);
  if (task === undefined) throw new Errors.NotFoundError('Task');
  return task;
};

const update = (
  params: { taskId: string; boardId: string },
  taskCredentials: ITask
): Task => {
  const index = tasks.findIndex((task: Task) => task.id === params.taskId);
  const updatedTask = new Task({
    ...taskCredentials,
    ...params,
    id: params.taskId,
  });
  tasks[index] = updatedTask;
  return updatedTask;
};

const remove = ({ taskId }: { taskId: string }): { message: string } => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return { message: 'Task successfully removed.' };
};

const removeBoardTasks = (boardId: string): void => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

const updateUserTasks = (userId: string): void => {
  tasks = tasks.map((task) => {
    if (task.userId === userId) {
      const newTask = task;
      newTask.userId = null;
      return newTask;
    }
    return task;
  });
};

export default {
  getAll,
  save,
  get,
  update,
  remove,
  removeBoardTasks,
  updateUserTasks,
};

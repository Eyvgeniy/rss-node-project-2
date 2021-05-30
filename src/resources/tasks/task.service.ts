import tasksRepo from './task.memory.repository';
import { ITask } from '../../models/TaskModel';
import Task from './task.model';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const save = (boardId: string, taskCredentials: ITask): Promise<Task> =>
  tasksRepo.save(boardId, taskCredentials);

const get = (taskId: string): Task => tasksRepo.get(taskId);

const update = (
  params: { taskId: string; boardId: string },
  taskCredentials: ITask
): Task => tasksRepo.update(params, taskCredentials);

const remove = (params: {
  taskId: string;
  boardId: string;
}): { message: string } => tasksRepo.remove(params);

export default { getAll, save, get, update, remove };

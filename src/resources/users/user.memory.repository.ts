// @ts-check

import User from './user.model';
import { IUser } from '../../models/UserModel';
import tasksRepo from '../tasks/task.memory.repository';
import Errors from '../../common/errors/errors-list';

interface IMessage {
  message: string;
}

let users = [] as User[];

const getAll = async (): Promise<User[]> => users;

const save = async (userCredentials: IUser): Promise<User> => {
  const newUser = await new User(userCredentials);
  users.push(newUser);
  return newUser;
};

const get = async (id: string): Promise<User> => {
  const currentUser = users.find((user) => user.id === id);
  if (currentUser === undefined) throw new Errors.NotFoundError('User');
  return currentUser;
};

const update = async (id: string, userCredentials: IUser): Promise<User> => {
  users = users.map((user) =>
    user.id === id ? new User(userCredentials) : user
  );
  return new User(userCredentials);
};

const remove = async (id: string): Promise<IMessage> => {
  users = users.filter((user) => user.id !== id);
  tasksRepo.updateUserTasks(id);
  return { message: 'User successfully removed.' };
};

export default { getAll, save, get, update, remove };

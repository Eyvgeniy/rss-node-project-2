// @ts-check
import usersRepo from './user.memory.repository';
import { IUser } from '../../models/UserModel';
import User from './user.model';

interface IMessage {
  message: string;
}

const getAll = (): Promise<User[]> => usersRepo.getAll();

const save = (userCredentials: IUser): Promise<User> =>
  usersRepo.save(userCredentials);

const get = (id: string): Promise<User> => usersRepo.get(id);

const update = (id: string, userCredentials: IUser): Promise<User> =>
  usersRepo.update(id, userCredentials);

const remove = (id: string): Promise<IMessage> => usersRepo.remove(id);

export default { getAll, save, get, update, remove };

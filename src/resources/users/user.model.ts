import { v4 as uuid } from 'uuid';
import { IUser } from '../../models/UserModel';

export default class User {
  id: string;
  name: string;
  login: string;
  password?: string;

  constructor(
    params: IUser = {
      id: uuid(),
      name: 'USER',
      login: 'user',
      password: 'P@55w0rd',
    }
  ) {
    this.id = params.id;
    this.name = params.name;
    this.login = params.login;
    this.password = params.password;
  }

  static toResponse(user: User): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

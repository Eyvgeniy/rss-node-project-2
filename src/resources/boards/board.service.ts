import boardsRepo from './board.memory.repository';
import { IBoard } from '../../models/BoardModel';
import Board from './board.model';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const save = (boardCredentials: IBoard): Promise<Board> =>
  boardsRepo.save(boardCredentials);

const get = (id: string): Board => boardsRepo.get(id);

const update = (id: string, boardCredentials: IBoard): Board =>
  boardsRepo.update(id, boardCredentials);

const remove = (id: string): { message: string } => boardsRepo.remove(id);

export default { getAll, save, get, update, remove };

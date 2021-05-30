import Board from './board.model';
import tasksRepo from '../tasks/task.memory.repository';
import { IBoard } from '../../models/BoardModel';

let boards = [] as Board[];

const getAll = async (): Promise<Board[]> => boards;

const save = async (boardCredentials: IBoard): Promise<Board> => {
  const newBoard = await new Board(boardCredentials);
  boards.push(newBoard);
  return newBoard;
};

const get = (id: string): Board => {
  const board = boards.find((el) => el.id === id);
  if (board === undefined) throw new Error('Board not found');
  return board;
};

const update = (id: string, boardCredentials: IBoard): Board => {
  boards = boards.map((board) =>
    board.id === id ? { ...boardCredentials } : board
  );
  return boardCredentials;
};

const remove = (id: string): { message: string } => {
  boards = boards.filter((board) => board.id !== id);
  tasksRepo.removeBoardTasks(id);
  return { message: 'Board successfully removed.' };
};

export default {
  getAll,
  save,
  get,
  update,
  remove,
};
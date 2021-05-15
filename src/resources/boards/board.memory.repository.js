const Board = require('./board.model');
const tasksRepo = require('../tasks/task.memory.repository');

let boards = [];

const getAll = async () => boards;

const save = async (boardCredentials) => {
  const newBoard = await new Board(boardCredentials);
  boards.push(newBoard);
  return newBoard;
};
const get = (id) => {
  const board = boards.find((el) => el.id === id);
  if (board === undefined) throw new Error('Board not found');
  return board;
};

const update = (id, boardCredentials) => {
  boards = boards.map((board) =>
    board.id === id ? { ...boardCredentials } : board
  );
  return boardCredentials;
};

const remove = (id) => {
  boards = boards.filter((board) => board.id !== id);
  tasksRepo.removeBoardTasks(id);
  return { message: 'Board successfully removed.' };
};

module.exports = {
  getAll,
  save,
  get,
  update,
  remove,
  // , save, get, update, remove
};

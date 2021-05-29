const Board = require('./board.model');
const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Board Repository Module
 * @module BoardRepository
 */

/**
 * @ignore
 * @typedef {Object} ColumnModel
 * @property {string} id Column id
 * @property {string} title Column title
 * @property {number} order Column order
 */

/**
 * @ignore
 * @typedef {Object} BoardModel
 * @property {string} id Board id
 * @property {string} title Board title
 * @property {ColumnModel[]} columns Board columns
 */

let boards = [];

/**
 * Returns all boards
 * @returns {Promise<Board[]>}
 */
const getAll = async () => boards;

/**
 * Create new Board
 * @param {BoardModel} boardCredentials
 * @returns {Board}
 */
const save = async (boardCredentials) => {
  const newBoard = await new Board(boardCredentials);
  boards.push(newBoard);
  return newBoard;
};
/**
 * Find Board by ID
 * @param {string} id Board ID
 * @returns {Board}
 */
const get = (id) => {
  const board = boards.find((el) => el.id === id);
  if (board === undefined) throw new Error('Board not found');
  return board;
};

/**
 * Update Board by ID
 * @param {string} id Board ID
 * @param {BoardModel} boardCredentials
 * @returns {Board}
 */
const update = (id, boardCredentials) => {
  boards = boards.map((board) =>
    board.id === id ? { ...boardCredentials } : board
  );
  return boardCredentials;
};

/**
 * Delete Board by ID
 * @param {string} id Board ID
 * @returns {{ message: string }} Info message
 */
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
};

const boardsRepo = require('./board.memory.repository');

/**
 * Board Service Module
 * @module BoardService
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

/**
 * Service function to return all Boards
 * @returns Array of Boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Service function to create new Board
 * @param {BoardModel} boardCredentials
 * @returns new Board
 */
const save = (boardCredentials) => boardsRepo.save(boardCredentials);

/**
 *  Service function to Find Board by ID
 * @param {string} id
 * @returns Board by ID
 */
const get = (id) => boardsRepo.get(id);

/**
 * Service function to Update Board
 * @param {string} id
 * @param {BoardModel} boardCredentials
 * @returns Updated Board
 */
const update = (id, boardCredentials) =>
  boardsRepo.update(id, boardCredentials);

/**
 * Service function to delete Board by ID
 * @param {string} id
 * @returns Info message
 */
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, save, get, update, remove };

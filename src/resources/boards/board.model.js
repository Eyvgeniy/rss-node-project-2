// @ts-check

const { v4: uuid } = require('uuid');
const Column = require('./column.model');

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
 * Class Board
 */
class Board {
  /**
   *
   * @param {BoardModel} params Board data
   */
  constructor({ id = uuid(), title = 'title', columns = [new Column()] }) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Return Board data for responce
   * @param {Board} board
   * @returns {BoardModel}
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;

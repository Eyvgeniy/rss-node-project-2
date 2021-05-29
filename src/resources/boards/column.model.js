// @ts-check
const { v4: uuid } = require('uuid');

/**
 * @ignore
 * @typedef {Object} ColumnModel
 * @property {string} id Column id
 * @property {string} title Column title
 * @property {number} order Column order
 * @default
 */

/**
 * Class for Column model
 */
class Column {
  /**
   *
   * @param {ColumnModel} params Column params
   */
  constructor(
    params = {
      id: uuid(),
      title: 'title',
      order: 0,
    }
  ) {
    this.id = params.id;
    this.title = params.title;
    this.order = params.order;
  }

  /**
   *
   * @param {ColumnModel} column
   * @returns {{ id: string, title: string, order: number }}
   */
  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

module.exports = Column;

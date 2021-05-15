const { v4: uuid } = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({ id = uuid(), title = 'title', columns = [new Column()] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;

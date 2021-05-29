// @ts-check
const { v4: uuid } = require('uuid');

class Column {
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

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

module.exports = Column;

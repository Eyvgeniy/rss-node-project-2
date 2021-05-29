const { v4: uuid } = require('uuid');

class Task {
  constructor(
    params = {
      id: uuid(),
      title: 'title',
      order: 0,
      description: 'description',
      userId: null,
      boardId: null,
      columnId: null,
    }
  ) {
    this.id = params.id;
    this.title = params.title;
    this.order = params.order;
    this.description = params.description;
    this.userId = params.userId;
    this.boardId = params.boardId;
    this.columnId = params.columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return {
      id,
      title,
      order,
      description,
      userId, // assignee
      boardId,
      columnId,
    };
  }
}

module.exports = Task;

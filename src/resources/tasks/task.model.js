const { v4: uuid } = require('uuid');

/**
 * Class for create Task
 * @class
 */
class Task {
  /**
   *
   * @param {Object} task Task data
   */
  constructor({
    /**
     * @property {string} id Task id
     */
    id = uuid(),
    /**
     * @property {string} title Task title
     */
    title = 'title',
    /**
     * @property {number} order Task order
     */
    order = 0,
    /**
     * @property {string} description Task description
     */
    description = 'description',
    /**
     * @property {string|null} userId Task userId
     */
    userId = null,
    /**
     * @property {string|null} boardId Task boardId
     */
    boardId = null,
    /**
     * @property {string|null} columnId Task columnId
     */
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Return task params
   * @param {TaskModel} task
   * @returns {TaskModel} Task for responce
   */
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

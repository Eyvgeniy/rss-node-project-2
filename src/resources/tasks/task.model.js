const { v4: uuid } = require('uuid');

/**
 * Task Model
 * @typedef {Object} TaskModel
 * @property {string} id - User id
 * @property {string} title - User title
 * @property {number} order - User order
 * @property {string} description - User description
 * @property {string} userId - User userId
 * @property {string} boardId - User boardId
 * @property {string} columnId - User columnId *
 */

/**
 * Class for create Task
 */
class Task {
  /**
   *
   * @param {Object} task Task data
   */
  constructor({
    /**
     * @param {string} id Task id
     */
    id = uuid(),
    /**
     * @param {string} title Task title
     */
    title = 'title',
    /**
     * @param {number} order Task order
     */
    order = 0,
    /**
     * @param {string} description Task description
     */
    description = 'description',
    /**
     * @param {string|null} userId Task userId
     */
    userId = null,
    /**
     * @param {string|null} boardId Task boardId
     */
    boardId = null,
    /**
     * @param {string|null} columnId Task columnId
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

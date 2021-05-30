import { v4 as uuid } from 'uuid';
import { ITask } from '../../models/TaskModel';

export default class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor(
    params: ITask = {
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

  static toResponse(task: ITask): ITask {
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

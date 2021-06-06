// @ts-check
import { v4 as uuid } from 'uuid';
import { IColumn } from '../../models/ColumnModel';

export default class Column {
  id: string;
  title: string;
  order: number;

  constructor({ id = uuid(), title = 'title', order = 0 }: IColumn) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column: Column): IColumn {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

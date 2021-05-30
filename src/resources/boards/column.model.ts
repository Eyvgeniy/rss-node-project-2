// @ts-check
import { v4 as uuid } from 'uuid';
import { IColumn } from '../../models/ColumnModel';

export default class Column {
  id: string;
  title: string;
  order: number;

  constructor(
    params: IColumn = {
      id: uuid(),
      title: 'title',
      order: 0,
    }
  ) {
    this.id = params.id;
    this.title = params.title;
    this.order = params.order;
  }

  static toResponse(column: Column): IColumn {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

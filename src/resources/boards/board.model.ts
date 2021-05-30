// @ts-check

import { v4 as uuid } from 'uuid';
import Column from './column.model';
import { IBoard } from '../../models/BoardModel';

export default class Board {
  id: string;
  title: string;
  columns: Column[];

  constructor({
    id = uuid(),
    title = 'title',
    columns = [new Column()],
  }: IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board): IBoard {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

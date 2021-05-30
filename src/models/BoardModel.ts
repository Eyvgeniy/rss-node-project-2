import { IColumn } from './ColumnModel';

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Column } from '../model/column';
import { COLUMNS } from '../mock-data/mock-columns';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }

  getColumnsForBoard(boardId: number): Observable<Column[]> {
    const value: Column[] = COLUMNS.filter(c => c.boardId === boardId)[0].columns;
    return of(value);
  }
}

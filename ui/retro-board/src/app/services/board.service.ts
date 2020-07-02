import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Board } from '../model/board';
import { BOARDS } from '../mock-data/mock-boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getBoard(id: number): Observable<Board> {
    const value: Board = BOARDS.filter(b => b.id === id)[0];
    return of(value);
  }
}

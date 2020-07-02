import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Note } from '../model/note';
import { NOTES } from '../mock-data/mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotesForColumn(columnId: number): Observable<Note[]> {
    const value: Note[] = NOTES.filter(n => n.columnId === columnId)[0].notes;
    return of(value);
  }
}

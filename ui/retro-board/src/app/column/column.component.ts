import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../model/column';

import { NoteService } from '../services/note.service';
import { Note } from '../model/note';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotesForColumn(this.column.id);
  }

  private loadNotesForColumn(columnId: number): void {
    this.noteService.getNotesForColumn(columnId).subscribe(notes =>
      this.notes = notes.sort((a, b) => a.order - b.order));
  }

}

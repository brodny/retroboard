import { Component, OnInit } from '@angular/core';

import { BoardService } from '../services/board.service';
import { Board } from '../model/board';

import { ColumnService } from '../services/column.service';
import { Column } from '../model/column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  board: Board;
  columns: Column[];

  constructor(private boardService: BoardService,
              private columnService: ColumnService) { }

  ngOnInit(): void {
    this.loadBoardData(1);
  }

  private loadBoardData(boardId: number): void {
    this.loadBoard(boardId);
    this.loadBoardColumns(boardId);
  }

  private loadBoard(boardId: number): void {
    this.boardService.getBoard(boardId).subscribe(board => this.board = board);
  }

  private loadBoardColumns(boardId: number): void {
    this.columnService.getColumnsForBoard(boardId).subscribe(columns =>
      this.columns = columns.sort((a, b) => a.order - b.order));
  }

}

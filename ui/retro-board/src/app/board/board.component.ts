import { Component, OnInit } from '@angular/core';

import { BoardService } from '../services/board.service';
import { Board } from '../model/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.loadBoard(1);
  }

  private loadBoard(id: number): void {
    this.boardService.getBoard(id).subscribe(board => this.board = board);
  }

}

import { Component, Input } from '@angular/core';
import { Sudoku } from './sudoku';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent {

  @Input()
  data: string = `400000060,500032000,910004000,000600450,200015006,000000010,008000020,000800540,070000100`;
  sudoku: Sudoku = new Sudoku();

  constructor(public snackBar: MatSnackBar) {}

  hint() {
    let message: string = this.sudoku.hint();
    if (message == null) {
      message = "No hint available";
    }
    this.snackBar.open(message, "Dismiss", { duration: 5000 });
  }
}

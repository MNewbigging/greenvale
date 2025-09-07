import { GridCell } from "./grid-cell";

export class Grid {
  rows: GridCell[][] = [];

  constructor(public cells: GridCell[], public width: number) {
    this.rows = this.toRows();
  }

  toRows() {
    const rows: GridCell[][] = [];

    let row: GridCell[] = [];

    this.cells.forEach((cell) => {
      row.push(cell);

      if (row.length === this.width) {
        rows.push(row);
        row = [];
      }
    });

    return rows;
  }
}

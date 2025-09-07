import { GridCell } from "./grid-cell";

export class Grid {
  rows: GridCell[][] = [];

  constructor(public cells: GridCell[], public width: number) {
    // Display prefers rows
    this.rows = this.toRows();

    // Assign indices to cells
    cells.forEach((cell, index) => (cell.index = index));
  }

  getEntryCell() {
    return this.cells.find((cell) => cell.isEntry);
  }

  areNeighbours(a: GridCell, b: GridCell) {
    // Either their index is +- 1, or +=width
    const diff = Math.abs(a.index - b.index);

    return diff == 1 || diff == this.width;
  }

  private toRows() {
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

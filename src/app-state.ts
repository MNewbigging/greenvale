import { GridCell, GridCellType } from "./game/grid-cell";

class AppState {
  grid: GridCell[][] = [];

  constructor() {
    // Setup first mission grid
    this.grid = this.makeFirstMissionGrid();
  }

  private makeFirstMissionGrid() {
    const grid: GridCell[][] = [];

    const gridWidth = 5;

    // A row of unpassable cells
    const firstRow = this.makeCellRowOfType(gridWidth, GridCellType.Unpassable);
    const secondRow = this.makeCellRowOfType(gridWidth, GridCellType.Walkable);
    const thirdRow = this.makeCellRowOfType(gridWidth, GridCellType.Unpassable);

    grid.push(firstRow, secondRow, thirdRow);

    return grid;
  }

  private makeCellRowOfType(rowLength: number, gridCellType: GridCellType) {
    const row: GridCell[] = [];
    for (let i = 0; i < rowLength; i++) {
      row.push(new GridCell(gridCellType));
    }
    return row;
  }
}

export const appState = new AppState();

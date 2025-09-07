import { Grid } from "./game/grid";
import { GridCell, GridCellType } from "./game/grid-cell";

class AppState {
  grid: Grid;
  route: GridCell[] = [];

  constructor() {
    // Setup first mission grid
    this.grid = this.makeGrid();
  }

  addCellToRoute(cell: GridCell) {
    // Can ignore cells that are unpassable
    if (cell.type === GridCellType.Unpassable) {
      console.log("Cannot go here!");
      return;
    }

    // Cell must neighbour the previous cell
  }

  private makeGrid() {
    const cells = [
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Walkable, { isEntry: true }),
      new GridCell(GridCellType.Walkable),
      new GridCell(GridCellType.Walkable),
      new GridCell(GridCellType.Walkable),
      new GridCell(GridCellType.Walkable, { isExit: true }),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
      new GridCell(GridCellType.Unpassable),
    ];

    return new Grid(cells, 5);
  }

  private getNeighbours(grid: GridCell[][], cell: GridCell) {}

  private areNeighbours(grid: GridCell[][], a: GridCell, b: GridCell) {
    //
  }
}

export const appState = new AppState();

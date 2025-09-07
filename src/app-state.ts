import { eventListener } from "./events/event-listener";
import { Grid } from "./game/grid";
import { GridCell, GridCellType } from "./game/grid-cell";

class AppState {
  grid: Grid;
  route: GridCell[] = [];

  constructor() {
    // Setup first mission grid
    this.grid = this.makeGrid();

    // Setup new route
    this.newRoute();
  }

  isInRoute(cell: GridCell) {
    return this.route.find((c) => c.id === cell.id);
  }

  addCellToRoute(addCell: GridCell) {
    // Can ignore cells that are unpassable
    if (addCell.type === GridCellType.Unpassable) {
      console.log("Cannot go here!");
      return;
    }

    // This cell cannot already be in the route
    const atIndex = this.route.findIndex((cell) => cell.id === addCell.id);
    if (atIndex > 0) {
      console.log("Already in route, removing this and all after it");

      this.route.splice(atIndex);
      eventListener.fire("route-change", null);
      return;
    }

    // Cell must neighbour the previous cell
    const previousCell = this.route[this.route.length - 1];
    if (this.grid.areNeighbours(previousCell, addCell)) {
      this.route.push(addCell);
      eventListener.fire("route-change", null);
      console.log("Added neighbouring cell");
    } else {
      console.log("Must be next to previous cell");
    }

    // todo later - What if exit is already in the route? Should it always be the last thing?
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

  private newRoute() {
    const entry = this.grid.getEntryCell();
    if (entry) this.route.push(entry);
  }
}

export const appState = new AppState();

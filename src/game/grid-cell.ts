import { randomId } from "../utils/utils";

export enum GridCellType {
  Walkable = "Walkable",
  Unpassable = "Unpassable",
}

export class GridCell {
  id = randomId();
  index = -1; // to be set by grid when it receives the cells
  isEntry: boolean;
  isExit: boolean;

  constructor(
    public type: GridCellType,
    options?: { isEntry?: boolean; isExit?: boolean }
  ) {
    this.isEntry = options?.isEntry ?? false;
    this.isExit = options?.isExit ?? false;
  }
}

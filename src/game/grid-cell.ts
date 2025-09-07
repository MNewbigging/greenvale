import { randomId } from "../utils/utils";

export enum GridCellType {
  Walkable = "Walkable",
  Unpassable = "Unpassable",
}

export class GridCell {
  id = randomId();

  constructor(public type: GridCellType) {}
}

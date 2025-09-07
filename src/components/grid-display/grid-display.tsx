import { ReactElement } from "react";
import { GridCell } from "../../game/grid-cell";
import "./grid-display.scss";

interface GridDisplayProps {
  grid: GridCell[][];
}

/**
 * Should fit whatever space it is put inside.
 * Should divide that space by grid length/width
 */
export function GridDisplay({ grid }: GridDisplayProps) {
  const cells: ReactElement[] = [];

  grid.forEach((row) =>
    row.forEach((cell) => {
      cells.push(<GridCellDisplay cell={cell} />);
    })
  );

  const gridWidth = grid[0].length; // will always be square

  return (
    <div
      className="grid-display"
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
    >
      {cells}
    </div>
  );
}

interface GridCellDisplayProps {
  cell: GridCell;
}

function GridCellDisplay({ cell }: GridCellDisplayProps) {
  const classes = ["grid-cell-display", cell.type.toLowerCase()].join(" ");

  return <div className={classes}></div>;
}

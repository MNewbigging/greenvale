import { ReactElement } from "react";
import { appState } from "../../app-state";
import { Grid } from "../../game/grid";
import { GridCell } from "../../game/grid-cell";
import "./grid-display.scss";

interface GridDisplayProps {
  grid: Grid;
}

export function GridDisplay({ grid }: GridDisplayProps) {
  const rows = grid.rows.map((row) => <GridRowDisplay row={row} />);

  return <div className="grid-display">{rows}</div>;
}

interface GridRowDisplayProps {
  row: GridCell[];
}

function GridRowDisplay({ row }: GridRowDisplayProps) {
  const cells = row.map((cell) => <GridCellDisplay cell={cell} />);

  return <div className="grid-row-display">{cells}</div>;
}

interface GridCellDisplayProps {
  cell: GridCell;
}

function GridCellDisplay({ cell }: GridCellDisplayProps) {
  const classes = ["grid-cell-display", cell.type.toLowerCase()].join(" ");

  let displayText = "";

  if (cell.isEntry) displayText = "ENTRY";
  if (cell.isExit) displayText = "EXIT";

  return (
    <div className={classes} onClick={() => appState.addCellToRoute(cell)}>
      {displayText}
    </div>
  );
}

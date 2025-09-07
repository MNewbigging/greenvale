import { appState } from "../../app-state";
import { Grid } from "../../game/grid";
import { GridCell } from "../../game/grid-cell";
import "./grid-display.scss";
import { useEventUpdater } from "../hooks/use-event-updater";

interface GridDisplayProps {
  grid: Grid;
}

export function GridDisplay({ grid }: GridDisplayProps) {
  const rows = grid.rows.map((row, index) => (
    <GridRowDisplay key={`row-${index}`} row={row} />
  ));

  return <div className="grid-display">{rows}</div>;
}

interface GridRowDisplayProps {
  row: GridCell[];
}

function GridRowDisplay({ row }: GridRowDisplayProps) {
  const cells = row.map((cell) => (
    <GridCellDisplay key={`cell-${cell.id}`} cell={cell} />
  ));

  return <div className="grid-row-display">{cells}</div>;
}

interface GridCellDisplayProps {
  cell: GridCell;
}

function GridCellDisplay({ cell }: GridCellDisplayProps) {
  useEventUpdater("route-change");

  const inRouteClass = appState.isInRoute(cell) ? "in-route" : "";

  const classes = [
    "grid-cell-display",
    cell.type.toLowerCase(),
    inRouteClass,
  ].join(" ");

  let displayText = "";
  if (cell.isEntry) displayText = "ENTRY";
  if (cell.isExit) displayText = "EXIT";

  return (
    <div className={classes} onClick={() => appState.addCellToRoute(cell)}>
      {displayText}
    </div>
  );
}

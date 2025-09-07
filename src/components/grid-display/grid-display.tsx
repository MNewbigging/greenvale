import { GridCell } from "../../game/grid-cell";
import "./grid-display.scss";

interface GridDisplayProps {
  grid: GridCell[][];
}

export function GridDisplay({ grid }: GridDisplayProps) {
  const rows = grid.map((row) => <GridRowDisplay row={row} />);

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

  return <div className={classes}></div>;
}

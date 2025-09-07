import "./app.scss";

import { appState } from "../app-state";
import { useEventUpdater } from "./hooks/use-event-updater";
import { GridDisplay } from "./grid-display/grid-display";

export function App() {
  useEventUpdater("game-started");

  return (
    <div className="app-root">
      <GridDisplay grid={appState.grid} />
    </div>
  );
}

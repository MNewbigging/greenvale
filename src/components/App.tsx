import "./app.scss";

import { appState } from "../app-state/app-state";
import { useEventUpdater } from "./hooks/use-event-updater";

export function App() {
  useEventUpdater("game-started");

  return <>Welcome to Greenvale!</>;
}

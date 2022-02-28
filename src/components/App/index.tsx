import { HashRouter } from "react-router-dom";
import { Routex } from "../Routes/Routes";

export function App() {
  return (
    <HashRouter basename="/">
      <Routex />
    </HashRouter>
  );
}

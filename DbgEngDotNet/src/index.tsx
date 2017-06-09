import "normalize.css";
import "@blueprintjs/core/dist/blueprint.css";

import { App } from "./components/app";
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <App />,
    document.querySelector(".dbgengdotnet-app")
);
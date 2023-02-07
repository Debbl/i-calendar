import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import App from "./App";
import "antd/dist/reset.css";
import "normalize.css";

dayjs.extend(dayOfYear);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

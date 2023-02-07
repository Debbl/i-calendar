import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import weekday from "dayjs/plugin/weekday";
import App from "./App";
import "antd/dist/reset.css";
import "normalize.css";
import "./index.css";

dayjs.extend(dayOfYear);
dayjs.extend(weekday);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

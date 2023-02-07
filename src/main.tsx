import React from "react";
import { createRoot } from "react-dom/client";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import App from "./App";
import "./index.css";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
dayjs.extend(weekday);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

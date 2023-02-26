import { format, getDay, parseISO } from "date-fns";

function getWeekDay(date: number | Date) {
  let time = date;
  if (typeof time === "string") {
    time = parseISO(time);
  }
  const day = getDay(time);
  return day === 0 ? 6 : day - 1;
}

export { getWeekDay, format as dateFormat, parseISO as dateParseISO };

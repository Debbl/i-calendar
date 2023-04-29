import ICalParser from "ical-js-parser";
import useSWR from "swr";
import type { ICSData, WeekData } from "../types";
import { dateFormat, dateParseISO, getWeekDay } from "../utils/dateUtils";

const WEEK_DAY = [
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
  "星期日",
];

const useWeekData = (url: string) => {
  const { data: iscData, isLoading } = useSWR(
    url,
    async () => {
      const response = await fetch(url);
      const data = await response.text();
      return ICalParser.toJSON(data) as any as ICSData;
    },
    {
      refreshInterval: 1000 * 60 * 10,
    }
  );

  const date = new Date();

  const weekday = getWeekDay(date);
  const timeValue = date.valueOf();

  const weekData: WeekData = Array.from({ length: 7 }, (_, i) => ({
    isToday: weekday === i,
    weekDay: WEEK_DAY[i],
    day: "",
    content: [],
  }));

  iscData?.events.forEach((e) => {
    const time = dateParseISO(e.dtstart.value);
    const timeUnix = time.valueOf();

    const index = getWeekDay(time);

    weekData[index].day = dateFormat(time, "MM-dd");
    weekData[index].content.push({
      startTimeValue: timeUnix,
      startTime: dateFormat(time, "HH:mm:ss"),
      dayStarted: index === weekday && timeValue > timeUnix,
      name: e.location.split(" ")[0],
      liveURL: e.description.split("\\n")[0],
      summary: e.summary,
    });
  });

  weekData.forEach((d) => {
    d.content.sort((a, b) => +a.startTimeValue - +b.startTimeValue);
  });

  const calenderInfo = iscData?.calendar;

  return { weekData, calenderInfo, isLoading };
};

export default useWeekData;

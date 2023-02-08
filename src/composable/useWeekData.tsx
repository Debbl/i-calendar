import dayjs from "dayjs";
import ICalParser from "ical-js-parser";
import { useEffect, useState } from "react";
import type { ICSData, WeekData } from "../types";

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
  const [iscData, setIscData] = useState<ICSData>();
  const weekday = dayjs().weekday();
  const timeValue = dayjs().valueOf();

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const icsData = ICalParser.toJSON(data) as any as ICSData;
        setIscData(icsData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weekData: WeekData = Array.from({ length: 7 }, (_, i) => ({
    isToday: weekday === i,
    weekDay: WEEK_DAY[i],
    day: "",
    content: [],
  }));

  iscData?.events.forEach((e) => {
    const dtsart = dayjs(e.dtstart.value);
    const index = dtsart.weekday();

    weekData[index].day = dtsart.format("MM-DD");
    weekData[index].content.push({
      startTimeValue: dtsart.valueOf(),
      startTime: dtsart.format("HH:mm:ss"),
      dayStarted: index === weekday && timeValue > dtsart.valueOf(),
      name: e.location.split(" ")[0],
      liveURL: e.description.split("\\n")[0],
      summary: e.summary,
    });
  });

  weekData.forEach((d) => {
    d.content.sort((a, b) => +a.startTimeValue - +b.startTimeValue);
  });

  const calenderInfo = iscData?.calendar;

  return { weekData, calenderInfo };
};

export default useWeekData;

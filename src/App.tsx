import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ICalParser from "ical-js-parser";

interface ICSData {
  calendar: {};
  events: Array<{
    location: string;
    description: string;
    url: string;
    dtstamp: {
      timezone: string;
      value: string;
    };
    dtstart: {
      timezone: string;
      value: string;
    };
  }>;
}
type WeekData = Array<{
  content: Array<{
    name: string;
    liveURL: string;
  }>;
}>;
const url = "https://nebula-beat.github.io/xld.ics";

const App: React.FC = () => {
  const [iscData, setIscData] = useState<ICSData>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const icsData = ICalParser.toJSON(data) as any as ICSData;
        setIscData(icsData);
      });
  }, []);

  const weekData: WeekData = Array.from({ length: 7 }, () => ({
    content: [],
  }));

  iscData?.events.forEach((e) => {
    const dtsart = dayjs(e.dtstart.value);
    const dayOffset = dtsart.day() - 1;
    const index = dayOffset === -1 ? 6 : dayOffset;

    weekData[index].content.push({
      name: e.location.split(" ")[0],
      liveURL: e.description.split("\\n")[0],
    });
  });
  console.log(weekData);

  return <div></div>;
};

export default App;

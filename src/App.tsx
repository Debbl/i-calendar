import { Badge, Calendar } from "antd";
import type { BadgeProps } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import ICalParser from "ical-js-parser";

const url = "https://nebula-beat.github.io/xld.ics";

const monthCellRender = (value: Dayjs) => {
  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
};

const App: React.FC = () => {
  const [iscData, setIscData] = useState<{
    calendar: {};
    events: Array<{
      location: string;
      description: string;
      dtstamp: {
        timezone: string;
        value: string;
      };
    }>;
  }>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setIscData(ICalParser.toJSON(data) as any);
      });
  }, []);
  const dataCellRender = (value: Dayjs) => {
    const getListData = (value: Dayjs) => {
      const listData: Array<{
        type: string;
        content: string;
      }> = [];
      iscData?.events.forEach((e) => {
        if (dayjs(e.dtstamp.value).dayOfYear() === value.dayOfYear()) {
          console.log(e);
          listData.push({ type: "success", content: e.location.trim() });
        }
      });

      return listData || [];
    };
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <div>
        <Calendar
          dateCellRender={dataCellRender}
          monthCellRender={monthCellRender}
        />
      </div>
    </div>
  );
};

export default App;

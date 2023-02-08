import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimeClick: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <div className={className}>{time}</div>;
};

export default TimeClick;

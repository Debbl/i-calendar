import { useEffect, useState } from "react";
import { dateFormat } from "../utils/dateUtils";

const TimeClick: React.FC<{ className?: string }> = ({ className }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setTime(dateFormat(new Date(), "HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <div className={className}>{time}</div>;
};

export default TimeClick;

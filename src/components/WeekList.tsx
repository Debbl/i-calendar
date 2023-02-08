import type { DayInfo } from "../types";
import DayItem from "./DayItem";

const WeekList: React.FC<{ d: DayInfo }> = ({ d }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div
        className={`flex flex-col text-center font-bold ${
          d.isToday ? "bg-blue-300" : ""
        }`}
      >
        <span className="text-xs">{d.day}</span>
        <span className="text-sm">{d.weekDay}</span>
      </div>
      {d.content.map((v, j) => (
        <DayItem key={j} v={v} />
      ))}
    </div>
  );
};

export default WeekList;

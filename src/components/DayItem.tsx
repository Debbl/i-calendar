import type { ItemInfo } from "../types";

const DayItem: React.FC<{ v: ItemInfo }> = ({ v }) => {
  return (
    <div className={`w-40 border p-2 ${v.dayStarted ? "bg-blue-300" : ""}`}>
      <div className="bg-blue-200 text-center  text-xs font-semibold">
        {v.startTime}
      </div>
      <div title={v.summary} className="truncate">
        {v.summary}
      </div>
      <a
        href={v.liveURL}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-700"
      >
        {v.name}
      </a>
    </div>
  );
};

export default DayItem;

import useWeekData from "./composable/useWeekData";

const url = "https://nebula-beat.github.io/xld.ics";

const App: React.FC = () => {
  const { weekData, calenderInfo } = useWeekData(url);

  return (
    <div className="flex flex-col items-center gap-y-1">
      <span className="text-gray-500">{url}</span>
      <span>{calenderInfo?.xWrCalname}</span>
      <div className="flex mt-2 justify-center gap-x-1">
        {weekData.map((d, i) => (
          <div key={i} className="flex flex-col gap-y-2">
            <div
              className={`flex flex-col text-center font-bold ${
                d.isToday ? "bg-blue-300" : ""
              }`}
            >
              <span className="text-xs">{d.day}</span>
              <span className="text-sm">{d.weekDay}</span>
            </div>
            {d.content.map((v, j) => (
              <div
                key={j}
                className={`border p-2 w-40 ${
                  v.dayStarted ? "bg-blue-300" : ""
                }`}
              >
                <div className="font-medium text-xs bg-blue-200 text-center">
                  {v.startTime}
                </div>
                <div title={v.summary} className="truncate">
                  {v.summary}
                </div>
                <a
                  href={v.liveURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 text-sm"
                >
                  {v.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

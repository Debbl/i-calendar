import TimeClick from "./components/TimeClick";
import useWeekData from "./composable/useWeekData";

const url = "https://nebula-beat.github.io/xld.ics";

const App: React.FC = () => {
  const { weekData, calenderInfo } = useWeekData(url);

  return (
    <div className="flex flex-col items-center gap-y-1">
      <span className="text-gray-500">{url}</span>
      <span>{calenderInfo?.xWrCalname}</span>
      <TimeClick className="fixed right-6 top-6 text-lg font-medium" />
      <div className="mt-2 flex justify-center gap-x-1">
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
                className={`w-40 border p-2 ${
                  v.dayStarted ? "bg-blue-300" : ""
                }`}
              >
                <div className="bg-blue-200 text-center text-xs font-medium">
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

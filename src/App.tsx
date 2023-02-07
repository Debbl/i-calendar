import useWeekData from "./composable/useWeekData";

const url = "https://nebula-beat.github.io/xld.ics";

const App: React.FC = () => {
  const weekData = useWeekData(url);

  return (
    <div className="flex mt-2 justify-center gap-x-1">
      {weekData.map((d, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <div
            className={`text-center font-bold ${
              d.isToday ? "bg-blue-400" : ""
            }`}
          >
            {d.weekDay}
          </div>
          {d.content.map((v, j) => (
            <div
              key={j}
              className={`border p-2 ${v.dayStarted ? "bg-blue-300" : ""}`}
            >
              <div>{v.startTime}</div>
              <a
                href={v.liveURL}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                {v.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;

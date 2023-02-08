import TimeClick from "./components/TimeClick";
import WeekList from "./components/WeekList";
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
          <WeekList key={i} d={d} />
        ))}
      </div>
    </div>
  );
};

export default App;

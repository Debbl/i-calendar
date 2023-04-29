import Footer from "./components/Footer";
import TimeClick from "./components/TimeClick";
import WeekList from "./components/WeekList";
import useWeekData from "./hooks/useWeekData";

const url = "https://nebula-beat.github.io/xld.ics";

const App: React.FC = () => {
  const { weekData, calenderInfo } = useWeekData(url);

  return (
    <div>
      <div className="text-center text-gray-500">{url}</div>
      <div className="text-center">{calenderInfo?.xWrCalname}</div>

      <TimeClick className="fixed right-6 top-6 text-lg font-medium" />

      <div className="text-center">
        <div className="mt-2 inline-flex justify-center gap-x-1">
          {weekData.map((d, i) => (
            <WeekList key={i} d={d} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;

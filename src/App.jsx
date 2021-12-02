import "./App.css";
import Statistics from "./componets/statistics/statistics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Statistics
          step={1}
          good={0}
          neutral={0}
          bad={0}
          total={0}
          percentage={0}
        />
      </header>
    </div>
  );
}

export default App;

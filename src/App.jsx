import { useState } from "react";
import ScenarioForm from "./components/ScenarioForm";
import SimulationRoom from "./components/SimulationRoom";
import "./App.css";
import Recorder from "./components/Recorder";
import InterviewChat from "./components/InterviewChat";


function App() {
  const [client, setClient] = useState(null);

  return (
    <div className="app">
      {!client ? (
        <ScenarioForm setClient={setClient} />
      ) : (
        <SimulationRoom client={client} />
      )}
    </div>
  );
}

export default App;
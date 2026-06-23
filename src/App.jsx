import { useState } from "react";
import ScenarioForm from "./components/ScenarioForm";
import SimulationRoom from "./components/SimulationRoom";

function App() {
  const [client, setClient] = useState(null);

  return (
    <div>
      {!client ? (
        <ScenarioForm setClient={setClient} />
      ) : (
        <SimulationRoom client={client} />
      )}
    </div>
  );
}

export default App;
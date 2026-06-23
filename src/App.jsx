import { useState } from "react";
import ScenarioForm from "./components/ScenarioForm";
import SimulationRoom from "./components/SimulationRoom";
import "./App.css";

function App() {
  const [client, setClient] = useState(null);

  return (
    <main className="app">
      <section className="app-header">
        <p className="eyebrow">ACU IT Hackathon Prototype</p>
        <h1>Persona</h1>
        <p className="subtitle">
          A virtual interview simulator for practising real-world client and professional conversations.
        </p>
      </section>

      {!client ? (
        <ScenarioForm setClient={setClient} />
      ) : (
        <SimulationRoom client={client} />
      )}
    </main>
  );
}

export default App;
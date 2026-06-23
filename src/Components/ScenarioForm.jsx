import { useState } from "react";

function ScenarioForm({ setClient }) {
  const [scenario, setScenario] = useState("");

  const generateClient = () => {
    const client = {
      name: "Sarah Johnson",
      age: 42,
      mood: "Concerned",
      problem: scenario,
      openingLine:
        "I've been experiencing symptoms and I'm not sure what to do."
    };

    setClient(client);
  };

  return (
    <div>
      <h1>Persona</h1>

      <textarea
        placeholder="Enter scenario..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
      />

      <br />

      <button onClick={generateClient}>
        Generate Persona
      </button>
    </div>
  );
}

export default ScenarioForm;
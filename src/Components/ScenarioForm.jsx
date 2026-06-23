import { useState } from "react";

function ScenarioForm({ setClient }) {
  const [scenario, setScenario] = useState("");

  const generateClient = () => {
    const lowerScenario = scenario.toLowerCase();

    let client = {
      name: "Priya Sharma",
      age: 34,
      mood: "Professional",
      role: "Hiring Manager",
      scenario,
      openingLine: "Thanks for joining today. Could you start by telling me about yourself?"
    };

    if (lowerScenario.includes("cyber")) {
      client = {
        name: "Daniel Brooks",
        age: 41,
        mood: "Direct",
        role: "Cybersecurity Lead",
        scenario,
        openingLine: "Let's start with the basics. How would you explain phishing to a non-technical user?"
      };
    } else if (lowerScenario.includes("software") || lowerScenario.includes("developer")) {
      client = {
        name: "Anika Rao",
        age: 36,
        mood: "Curious",
        role: "Senior Software Engineer",
        scenario,
        openingLine: "Can you walk me through a project you've built and the technical decisions you made?"
      };
    }

    setClient(client);
  };

  return (
    <div className="setup-card">
      <h1>Persona</h1>
      <p>AI-powered interview simulation for student practice.</p>

      <textarea
        placeholder="Enter scenario e.g. Cybersecurity Internship Interview..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
      />

      <button onClick={generateClient}>Start Simulation</button>
    </div>
  );
}

export default ScenarioForm;
import { useState } from "react";

function ScenarioForm({ setClient }) {
  const [scenario, setScenario] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const generateClient = async () => {
    if (!scenario.trim()) return;

    const lowerScenario = scenario.toLowerCase();

    // Keep the same persona-picking logic as before — this part is unchanged.
    let client = {
      name: "Priya Sharma",
      age: 34,
      mood: "Professional",
      role: "Hiring Manager",
      scenario,
    };

    if (lowerScenario.includes("cyber")) {
      client = {
        name: "Daniel Brooks",
        age: 41,
        mood: "Direct",
        role: "Cybersecurity Lead",
        scenario,
      };
    } else if (lowerScenario.includes("software") || lowerScenario.includes("developer")) {
      client = {
        name: "Anika Rao",
        age: 36,
        mood: "Curious",
        role: "Senior Software Engineer",
        scenario,
      };
    }

    // NEW: instead of a hardcoded openingLine, ask the backend (Claude)
    // to generate one based on the scenario and persona.
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/client-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client, history: [] }),
      });
      const data = await res.json();

      if (data.error) {
        setErrorMsg(`Backend error: ${data.error}`);
        setIsLoading(false);
        return;
      }

      client.openingLine = data.reply;
      setClient(client);
    } catch (err) {
      setErrorMsg(
        "Could not reach the backend. Make sure it's running (cd server && node index.js)."
      );
    } finally {
      setIsLoading(false);
    }
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

      <button onClick={generateClient} disabled={isLoading}>
        {isLoading ? "Setting up..." : "Start Simulation"}
      </button>

      {errorMsg && <p style={{ color: "#b91c1c", marginTop: "10px" }}>{errorMsg}</p>}
    </div>
  );
}

export default ScenarioForm;

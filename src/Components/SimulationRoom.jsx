import InterviewChat from "./InterviewChat";
import Recorder from "./Recorder";

function SimulationRoom({ client }) {
  return (
    <div className="simulation">
      <h1>Simulation Room</h1>

      <div className="client-card">
        <h2>{client.name}</h2>
        <p>Age: {client.age}</p>
        <p>Mood: {client.mood}</p>
        <p>Role: {client.role}</p>
        <p><strong>Scenario:</strong> {client.scenario}</p>
        <p><strong>Opening Line:</strong> {client.openingLine}</p>
      </div>

      <InterviewChat />

      <Recorder />
    </div>
  );
}

export default SimulationRoom;
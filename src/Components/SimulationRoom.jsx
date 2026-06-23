import CameraRecorder from "./CameraRecorder";
import InterviewChat from "./InterviewChat";
import SessionTimer from "./SessionTimer";

function SimulationRoom({ client }) {
  return (
    <div className="simulation">
      <h1>Simulation Room</h1>

      <SessionTimer />

      <div className="simulation-layout">
        <div className="client-card">
          <h2>{client.name}</h2>
          <p>Age: {client.age}</p>
          <p>Mood: {client.mood}</p>
          <p>Role: {client.role}</p>
          <p>
            <strong>Scenario:</strong> {client.scenario}
          </p>
          <p>
            <strong>First Question:</strong> {client.openingLine}
          </p>

          <div className="avatar">👩‍💼</div>
        </div>

        <CameraRecorder />
      </div>

      <InterviewChat />
    </div>
  );
}

export default SimulationRoom;
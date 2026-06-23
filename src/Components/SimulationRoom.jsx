function SimulationRoom({ client }) {
  return (
    <div>
      <h1>Simulation Room</h1>

      <h2>{client.name}</h2>

      <p>Age: {client.age}</p>

      <p>Mood: {client.mood}</p>

      <p>
        <strong>Opening Statement:</strong>
      </p>

      <p>{client.openingLine}</p>
    </div>
  );
}

export default SimulationRoom;
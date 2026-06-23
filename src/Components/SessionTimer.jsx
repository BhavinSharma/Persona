import { useEffect, useState } from "react";

function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="session-timer">
      Session Time: {String(minutes).padStart(2, "0")}:
      {String(remainingSeconds).padStart(2, "0")}
    </div>
  );
}

export default SessionTimer;
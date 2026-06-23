import { useRef, useState } from "react";

function CameraRecorder() {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsCameraOn(true);
    } catch (error) {
      alert("Camera/microphone permission denied or not available.");
      console.error(error);
    }
  };

  const startRecording = () => {
    if (!streamRef.current) {
      alert("Start the camera first.");
      return;
    }

    chunksRef.current = [];

    const recorder = new MediaRecorder(streamRef.current);

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
    };

    mediaRecorderRef.current = recorder;
    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setIsCameraOn(false);
    }
  };

  return (
    <div className="camera-recorder">
      <h2> Student Camera Feed</h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px",
          background: "#000",
        }}
      />

      <div style={{ marginTop: "16px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {!isCameraOn && <button onClick={startCamera}>Start Camera</button>}

        {isCameraOn && !isRecording && (
          <button onClick={startRecording}>Start Recording</button>
        )}

        {isRecording && <button onClick={stopRecording}>Stop Recording</button>}

        {isCameraOn && <button onClick={stopCamera}>Stop Camera</button>}
      </div>

      {videoURL && (
        <div style={{ marginTop: "20px" }}>
          <h3>Recorded Session</h3>

          <video
            src={videoURL}
            controls
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              background: "#000",
            }}
          />

          <br />

          <a href={videoURL} download="persona-session-recording.webm">
            <button style={{ marginTop: "10px" }}>Download Recording</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default CameraRecorder;
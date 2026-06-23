import { useState } from "react";

function InterviewChat({ scenario }) {
  const lowerScenario = scenario?.toLowerCase() || "";

  let questions = [
    "Tell me about yourself.",
    "What project are you most proud of?",
    "What challenges did you face?",
    "How did you solve them?",
    "Why do you want this role?"
  ];

  if (lowerScenario.includes("cyber")) {
    questions = [
      "What is phishing and how would you explain it to a non-technical user?",
      "How would you secure a login system?",
      "What steps would you take after detecting suspicious network activity?",
      "What is multi-factor authentication and why is it important?",
      "Tell me about a cybersecurity concept or tool you have worked with."
    ];
  } else if (
    lowerScenario.includes("software") ||
    lowerScenario.includes("developer")
  ) {
    questions = [
      "Can you walk me through a software project you built?",
      "What technical challenges did you face during development?",
      "How do you debug an application when something breaks?",
      "How do you work with a team using GitHub?",
      "Why do you want this software engineering role?"
    ];
  } else if (
    lowerScenario.includes("patient") ||
    lowerScenario.includes("health")
  ) {
    questions = [
      "Can you describe the symptoms you are experiencing?",
      "How long have you had these symptoms?",
      "Are you currently taking any medication?",
      "Have the symptoms become better or worse over time?",
      "Is there anything else about your health history I should know?"
    ];
  }

  const [messages, setMessages] = useState([
    {
      sender: "interviewer",
      text: questions[0]
    }
  ]);

  const [answer, setAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(1);

  const sendAnswer = () => {
    if (answer.trim() === "") return;

    const newMessages = [
      ...messages,
      {
        sender: "student",
        text: answer
      }
    ];

    if (questionIndex < questions.length) {
      newMessages.push({
        sender: "interviewer",
        text: questions[questionIndex]
      });

      setQuestionIndex(questionIndex + 1);
    } else {
      newMessages.push({
        sender: "interviewer",
        text: "Thank you. That concludes the interview simulation."
      });
    }

    setMessages(newMessages);
    setAnswer("");
  };

  return (
    <div className="chat-box">
      <h2>Interview Chat</h2>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            <strong>
              {message.sender === "interviewer" ? "Interviewer" : "You"}:
            </strong>{" "}
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={sendAnswer}>Send</button>
      </div>
    </div>
  );
}

export default InterviewChat;
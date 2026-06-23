import { useState } from "react";

function InterviewChat() {
  const questions = [
    "Tell me about yourself.",
    "What project are you most proud of?",
    "What challenges did you face?",
    "How did you solve them?",
    "Why do you want this role?"
  ];

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
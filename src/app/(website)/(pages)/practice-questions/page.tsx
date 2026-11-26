
"use client";

import { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Management Language",
    ],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language. It structures content on web pages.",
    topic: "Web Development",
  },
  {
    question: "Which keyword declares a block-scoped variable that can be reassigned in JavaScript?",
    options: ["const", "let", "static", "define"],
    answer: 1,
    explanation: "let declares a block-scoped variable whose value can be reassigned.",
    topic: "JavaScript",
  },
  {
    question: "Which data structure follows the FIFO principle?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: 2,
    explanation: "FIFO means First In, First Out. A queue removes items in the order they were added.",
    topic: "Data Structures",
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["font-style", "background", "text-size", "color"],
    answer: 3,
    explanation: "The CSS color property sets the foreground color of text.",
    topic: "CSS",
  },
  {
    question: "Which HTTP method is commonly used to retrieve a resource?",
    options: ["GET", "DELETE", "PATCH", "POST"],
    answer: 0,
    explanation: "GET is commonly used to request a representation of a resource from a server.",
    topic: "Web Development",
  },
];

export default function PracticeQuestionsPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function checkAnswer() {
    if (selected === null) return;

    if (selected === question.answer) {
      setScore((previous) => previous + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Practice Questions</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Test your knowledge of programming, web development, and Computer Science.
      </p>

      <section
        style={{
          marginTop: "30px",
          padding: "28px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        {finished ? (
          <>
            <h2>Practice Completed!</h2>
            <p>
              Your score: <strong>{score} / {questions.length}</strong>
            </p>
            <p>
              Percentage: {Math.round((score / questions.length) * 100)}%
            </p>
            <button
              onClick={restartQuiz}
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "#2563eb", fontWeight: "bold" }}>
              Question {current + 1} of {questions.length} · {question.topic}
            </p>

            <h2 style={{ fontSize: "23px", lineHeight: 1.5 }}>
              {question.question}
            </h2>

            <div style={{ display: "grid", gap: "12px", marginTop: "24px" }}>
              {question.options.map((option, index) => (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    padding: "14px",
                    border: selected === index
                      ? "2px solid #2563eb"
                      : "1px solid #d1d5db",
                    borderRadius: "9px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${current}`}
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={checkAnswer}
              disabled={selected === null}
              style={{
                marginTop: "24px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: selected === null ? "#9ca3af" : "#2563eb",
                color: "white",
                cursor: selected === null ? "not-allowed" : "pointer",
              }}
            >
              {current === questions.length - 1 ? "Finish Practice" : "Next Question"}
            </button>
          </>
        )}
      </section>
    </main>
  );
}
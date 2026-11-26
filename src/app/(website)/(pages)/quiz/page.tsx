
"use client";

import { useState } from "react";
import Link from "next/link";

const quizQuestions = [
  {
    question: "Which language is primarily used to structure web pages?",
    options: ["CSS", "HTML", "Python", "SQL"],
    answer: 1,
    explanation: "HTML defines the structure and content of web pages.",
  },
  {
    question: "Which data structure follows Last In, First Out (LIFO)?",
    options: ["Queue", "Array", "Stack", "Graph"],
    answer: 2,
    explanation: "A stack removes the most recently added item first.",
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: 2,
    explanation: "const declares a block-scoped binding that cannot be reassigned.",
  },
  {
    question: "Which CSS property changes an element's background color?",
    options: ["color", "background-color", "font-size", "border-style"],
    answer: 1,
    explanation: "The background-color property sets the background color.",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Utility",
      "Central Program User",
      "Control Processing User",
    ],
    answer: 0,
    explanation: "CPU stands for Central Processing Unit.",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const score = quizQuestions.reduce(
    (total, item, index) =>
      total + (answers[index] === item.answer ? 1 : 0),
    0
  );

  function nextQuestion() {
    if (answers[current] === undefined) return;

    if (current === quizQuestions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setAnswers({});
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
      <h1 style={{ fontSize: "36px" }}>Edu2Skill Knowledge Quiz</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Test your Computer Science and web-development knowledge.
      </p>

      <section
        style={{
          marginTop: "25px",
          padding: "28px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        {finished ? (
          <>
            <h2>Quiz Completed!</h2>

            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Your Score: {score} / {quizQuestions.length}
            </p>

            <p>
              Percentage:{" "}
              {Math.round((score / quizQuestions.length) * 100)}%
            </p>

            <p style={{ color: "#6b7280" }}>
              {score === quizQuestions.length
                ? "Excellent work! You answered every question correctly."
                : "Good effort! Review the concepts and try again."}
            </p>

            <button
              type="button"
              onClick={restartQuiz}
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                flexWrap: "wrap",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              <span>Question {current + 1} of {quizQuestions.length}</span>
              <span>Answered: {Object.keys(answers).length}</span>
            </div>

            <div
              style={{
                height: "7px",
                backgroundColor: "#e5e7eb",
                borderRadius: "10px",
                marginTop: "14px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${((current + 1) / quizQuestions.length) * 100}%`,
                  backgroundColor: "#2563eb",
                  transition: "width 0.2s",
                }}
              />
            </div>

            <h2 style={{ fontSize: "23px", lineHeight: 1.6, marginTop: "25px" }}>
              {question.question}
            </h2>

            <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
              {question.options.map((option, index) => (
                <label
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "15px",
                    border: answers[current] === index
                      ? "2px solid #2563eb"
                      : "1px solid #d1d5db",
                    borderRadius: "9px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name={`quiz-${current}`}
                    checked={answers[current] === index}
                    onChange={() =>
                      setAnswers((previous) => ({
                        ...previous,
                        [current]: index,
                      }))
                    }
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={nextQuestion}
              disabled={answers[current] === undefined}
              style={{
                marginTop: "25px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor:
                  answers[current] === undefined ? "#9ca3af" : "#2563eb",
                color: "#ffffff",
                cursor:
                  answers[current] === undefined ? "not-allowed" : "pointer",
              }}
            >
              {current === quizQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </>
        )}
      </section>

      <p style={{ marginTop: "25px" }}>
        Need help understanding a topic?{" "}
        <Link href="/ai-chat" style={{ color: "#2563eb" }}>
          Ask Edu2Skill AI
        </Link>
      </p>
    </main>
  );
}
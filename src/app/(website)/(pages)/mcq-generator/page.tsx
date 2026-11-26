
"use client";

import { useState } from "react";

const questionBank: Record<string, {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}[]> = {
  JavaScript: [
    {
      question: "Which keyword declares a variable that can be reassigned?",
      options: ["const", "let", "static", "final"],
      answer: 1,
      explanation: "let declares a block-scoped variable that can be reassigned.",
    },
    {
      question: "Which method converts JSON text into a JavaScript value?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"],
      answer: 1,
      explanation: "JSON.parse() parses a JSON string into a JavaScript value.",
    },
    {
      question: "Which operator checks strict equality?",
      options: ["=", "==", "===", "!="],
      answer: 2,
      explanation: "The === operator compares values without type coercion.",
    },
  ],
  HTML: [
    {
      question: "Which tag creates a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: 1,
      explanation: "The a element creates a hyperlink using its href attribute.",
    },
    {
      question: "Which tag represents the largest standard heading?",
      options: ["<heading>", "<h6>", "<head>", "<h1>"],
      answer: 3,
      explanation: "The h1 element represents the highest-level heading.",
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["title", "src", "alt", "name"],
      answer: 2,
      explanation: "The alt attribute provides a text alternative for an image.",
    },
  ],
  CSS: [
    {
      question: "Which property changes text color?",
      options: ["font-style", "color", "background-image", "text-align"],
      answer: 1,
      explanation: "The color property sets the foreground color of text.",
    },
    {
      question: "Which CSS layout system is useful for two-dimensional layouts?",
      options: ["Grid", "Float only", "Inline text", "Clear"],
      answer: 0,
      explanation: "CSS Grid is designed for layouts organized into rows and columns.",
    },
    {
      question: "Which selector targets an element with id='header'?",
      options: [".header", "#header", "header()", "*header"],
      answer: 1,
      explanation: "The # symbol selects an element by its ID.",
    },
  ],
};

export default function MCQGeneratorPage() {
  const [topic, setTopic] = useState("JavaScript");
  const [count, setCount] = useState("3");
  const [generated, setGenerated] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>([]);
  const [submitted, setSubmitted] = useState(false);

  const availableQuestions = questionBank[topic];
  const questions = availableQuestions.slice(0, Number(count));

  function generateQuestions() {
    setGenerated(true);
    setAnswers({});
    setSubmitted(false);
  }

  function resetGenerator() {
    setGenerated(false);
    setAnswers({});
    setSubmitted(false);
  }

  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>MCQ Generator</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Create a practice set by choosing a programming topic and the
        number of questions.
      </p>

      <section
        style={{
          marginTop: "25px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        <label htmlFor="topic"><strong>Select Topic</strong></label>

        <select
          id="topic"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
            setGenerated(false);
          }}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
          }}
        >
          <option>JavaScript</option>
          <option>HTML</option>
          <option>CSS</option>
        </select>

        <label htmlFor="count"><strong>Number of Questions</strong></label>

        <select
          id="count"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
            setGenerated(false);
          }}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
          }}
        >
          <option value="1">1 question</option>
          <option value="2">2 questions</option>
          <option value="3">3 questions</option>
        </select>

        <button
          type="button"
          onClick={generateQuestions}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Generate MCQs
        </button>
      </section>

      {generated && (
        <section style={{ marginTop: "30px" }}>
          <h2>{topic} Practice Set</h2>

          {questions.map((question, index) => (
            <article
              key={`${topic}-${index}`}
              style={{
                marginTop: "20px",
                padding: "22px",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
              }}
            >
              <h3>{index + 1}. {question.question}</h3>

              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                    cursor: submitted ? "default" : "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name={`mcq-${index}`}
                    disabled={submitted}
                    checked={answers[index] === optionIndex}
                    onChange={() =>
                      setAnswers((previous) => ({
                        ...previous,
                        [index]: optionIndex,
                      }))
                    }
                  />
                  {option}
                </label>
              ))}

              {submitted && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#f0fdf4",
                    lineHeight: 1.7,
                  }}
                >
                  <p>
                    <strong>Correct answer:</strong>{" "}
                    {question.options[question.answer]}
                  </p>
                  <p>{question.explanation}</p>
                </div>
              )}
            </article>
          ))}

          {!submitted ? (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length !== questions.length}
              style={{
                marginTop: "22px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor:
                  Object.keys(answers).length !== questions.length
                    ? "#9ca3af"
                    : "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Check Answers
            </button>
          ) : (
            <div style={{ marginTop: "24px" }}>
              <h3>Your Score: {score} / {questions.length}</h3>
              <button
                type="button"
                onClick={resetGenerator}
                style={{
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Create Another Set
              </button>
            </div>
          )}

          <p style={{ marginTop: "16px", color: "#6b7280", fontSize: "13px" }}>
            This version uses predefined questions. AI-generated MCQs can
            be added in a later development step.
          </p>
        </section>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";

export default function AIChatPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: "Hello! I am Edu2Skill AI. Ask me a Computer Science or programming question.",
    },
  ]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmedQuestion },
      {
        role: "assistant",
        text: "Thanks for your question! The AI service will be connected in a later development step. For now, the chat interface is ready.",
      },
    ]);

    setQuestion("");
  }

  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "32px" }}>Edu2Skill AI Chat</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.7 }}>
        Ask questions about Computer Science, programming, and coding concepts.
      </p>

      <section
        style={{
          marginTop: "25px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          aria-live="polite"
          style={{
            padding: "20px",
            minHeight: "300px",
            maxHeight: "450px",
            overflowY: "auto",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  message.role === "user" ? "flex-end" : "flex-start",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  maxWidth: "85%",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor:
                    message.role === "user" ? "#2563eb" : "#f3f4f6",
                  color: message.role === "user" ? "#ffffff" : "#172033",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            padding: "15px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask a programming question..."
            aria-label="Your question"
            style={{
              flex: 1,
              minWidth: 0,
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send
          </button>
        </form>
      </section>

      <p style={{ marginTop: "15px", color: "#6b7280", fontSize: "13px" }}>
        Prototype: replies are placeholders, not AI-generated answers yet.
      </p>
    </main>
  );
}
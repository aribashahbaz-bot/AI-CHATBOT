
"use client";

import { useState } from "react";
import Link from "next/link";

export default function TutorialSummarizerPage() {
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");

  function handleSummarize(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = content.trim();

    if (!text) {
      setSummary("Please paste some tutorial content first.");
      return;
    }

    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];
    const selected = sentences.slice(0, 3).join(" ").trim();

    setSummary(
      selected.length > 0
        ? selected
        : "Please enter readable tutorial content."
    );
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Tutorial Summarizer</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Turn lengthy educational material into a shorter overview
        to help you revise important concepts.
      </p>

      <form
        onSubmit={handleSummarize}
        style={{
          marginTop: "28px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        <label htmlFor="tutorial-content">
          <strong>Paste your tutorial content</strong>
        </label>

        <textarea
          id="tutorial-content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Paste your HTML, CSS, JavaScript, or Computer Science notes here..."
          rows={10}
          style={{
            display: "block",
            boxSizing: "border-box",
            width: "100%",
            padding: "14px",
            marginTop: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "15px",
            lineHeight: 1.7,
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "18px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Create Summary
        </button>
      </form>

      {summary && (
        <section
          aria-live="polite"
          style={{
            marginTop: "25px",
            padding: "24px",
            border: "1px solid #bfdbfe",
            borderRadius: "12px",
            backgroundColor: "#eff6ff",
          }}
        >
          <h2>Short Summary</h2>
          <p style={{ lineHeight: 1.9, whiteSpace: "pre-wrap" }}>
            {summary}
          </p>
          <p style={{ color: "#6b7280", fontSize: "13px" }}>
            Prototype: this currently selects the first three sentences;
            AI-powered summarization will be added later.
          </p>
        </section>
      )}

      <p style={{ marginTop: "25px" }}>
        Need help understanding your notes?{" "}
        <Link href="/ai-chat" style={{ color: "#2563eb" }}>
          Ask Edu2Skill AI
        </Link>
      </p>
    </main>
  );
}
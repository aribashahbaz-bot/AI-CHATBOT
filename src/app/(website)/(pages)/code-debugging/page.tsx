
"use client";

import { useState } from "react";
import Link from "next/link";

const examples = [
  {
    title: "Missing Variable Declaration",
    code: "name = 'Ali';",
    error: "In JavaScript strict mode, assigning to an undeclared variable can cause a ReferenceError.",
    solution: "const name = 'Ali';",
  },
  {
    title: "Incorrect Comparison",
    code: "if (age = 18) {\n  console.log('Adult');\n}",
    error: "A single equals sign assigns a value instead of comparing values.",
    solution: "if (age === 18) {\n  console.log('Adult');\n}",
  },
  {
    title: "Missing Closing Bracket",
    code: "function greet() {\n  console.log('Hello');",
    error: "The function body is missing its closing curly brace.",
    solution: "function greet() {\n  console.log('Hello');\n}",
  },
];

export default function CodeDebuggingPage() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [result, setResult] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!code.trim()) {
      setResult("Please enter your code before requesting help.");
      return;
    }

    setResult(
      `Your ${language} code has been received. This prototype does not run or analyse code yet. Compare your code with the examples below, or connect an AI service in a later step.`
    );
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Code Debugging Assistant</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Learn to identify common programming mistakes and understand
        how to correct them.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "25px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        <label htmlFor="language">
          <strong>Programming Language</strong>
        </label>

        <select
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
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
          <option>TypeScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
        </select>

        <label htmlFor="code">
          <strong>Paste your code</strong>
        </label>

        <textarea
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Paste your code here..."
          rows={8}
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            marginTop: "10px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "16px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Get Debugging Help
        </button>

        {result && (
          <p
            role="status"
            style={{
              marginTop: "18px",
              padding: "14px",
              borderRadius: "8px",
              backgroundColor: "#eff6ff",
              lineHeight: 1.7,
              overflowWrap: "anywhere",
            }}
          >
            {result}
          </p>
        )}
      </form>

      <section style={{ marginTop: "45px" }}>
        <h2 style={{ fontSize: "27px" }}>Common Errors and Solutions</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {examples.map((example) => (
            <article
              key={example.title}
              style={{
                padding: "22px",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
              }}
            >
              <h3>{example.title}</h3>

              <p><strong>Problematic example:</strong></p>

              <pre style={{ padding: "14px", backgroundColor: "#f3f4f6", overflowX: "auto" }}>
                <code>{example.code}</code>
              </pre>

              <p style={{ lineHeight: 1.7 }}>{example.error}</p>

              <p><strong>Possible correction:</strong></p>

              <pre style={{ padding: "14px", backgroundColor: "#ecfdf5", overflowX: "auto" }}>
                <code>{example.solution}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <p style={{ marginTop: "30px" }}>
        Need help understanding code?{" "}
        <Link href="/ai-chat" style={{ color: "#2563eb" }}>
          Ask Edu2Skill AI
        </Link>
      </p>
    </main>
  );
}

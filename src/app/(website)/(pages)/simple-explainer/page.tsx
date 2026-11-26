
"use client";

import { useState } from "react";
import Link from "next/link";

const topics: Record<string, { simple: string; example: string }> = {
  HTML: {
    simple:
      "HTML is the language used to create the structure of a web page. It tells the browser where headings, paragraphs, images, and links belong.",
    example:
      "<h1>My Website</h1>\n<p>Welcome to my website!</p>",
  },
  CSS: {
    simple:
      "CSS controls how a web page looks. You can use it to change colors, fonts, spacing, layouts, and how a website appears on different screen sizes.",
    example:
      "h1 {\n  color: blue;\n  font-size: 32px;\n}",
  },
  JavaScript: {
    simple:
      "JavaScript makes websites interactive. It can respond to button clicks, update content, validate forms, and perform calculations.",
    example:
      "const name = 'Ali';\nconsole.log('Hello ' + name);",
  },
  React: {
    simple:
      "React is a JavaScript library for building user interfaces. It lets developers split a page into reusable pieces called components.",
    example:
      "function Welcome() {\n  return <h1>Hello, student!</h1>;\n}",
  },
  "Artificial Intelligence": {
    simple:
      "Artificial Intelligence (AI) is a field of computing focused on creating systems that can perform tasks such as understanding language, recognizing patterns, and generating content.",
    example:
      "An educational AI assistant can explain a programming concept and suggest practice questions.",
  },
};

export default function SimpleExplainerPage() {
  const [topic, setTopic] = useState("HTML");
  const [level, setLevel] = useState("Beginner");
  const [customTopic, setCustomTopic] = useState("");
  const [result, setResult] = useState<{
    title: string;
    simple: string;
    example: string;
  } | null>(null);

  function explainTopic(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedTopic = topic === "Other" ? customTopic.trim() : topic;

    if (!selectedTopic) {
      setResult(null);
      return;
    }

    const predefined = topics[selectedTopic];

    if (predefined) {
      setResult({
        title: selectedTopic,
        simple:
          level === "Beginner"
            ? predefined.simple
            : level === "Intermediate"
              ? `${predefined.simple} To use this concept effectively, understand its role in an application and how it works with related technologies.`
              : `${predefined.simple} At an advanced level, examine implementation details, design trade-offs, performance, and maintainability.`,
        example: predefined.example,
      });
    } else {
      setResult({
        title: selectedTopic,
        simple:
          `You selected "${selectedTopic}". This prototype has ready-made explanations for HTML, CSS, JavaScript, React, and Artificial Intelligence. An AI API can be connected later to explain other topics at the ${level.toLowerCase()} level.`,
        example: "Ask Edu2Skill AI for further guidance.",
      });
    }
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
      <h1 style={{ fontSize: "36px" }}>Explain Topics in Simple Words</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Learn difficult Computer Science and programming concepts
        through easy explanations and practical examples.
      </p>

      <form
        onSubmit={explainTopic}
        style={{
          marginTop: "25px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
        }}
      >
        <label htmlFor="topic">
          <strong>Select a topic</strong>
        </label>

        <select
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
          }}
        >
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>Artificial Intelligence</option>
          <option>Other</option>
        </select>

        {topic === "Other" && (
          <input
            value={customTopic}
            onChange={(event) => setCustomTopic(event.target.value)}
            placeholder="Enter a Computer Science topic"
            aria-label="Custom topic"
            style={{
              boxSizing: "border-box",
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
            }}
          />
        )}

        <label htmlFor="level">
          <strong>Explanation level</strong>
        </label>

        <select
          id="level"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
          }}
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Explain Topic
        </button>
      </form>

      {result && (
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
          <h2>{result.title}: {level} Explanation</h2>
          <p style={{ lineHeight: 1.9 }}>{result.simple}</p>

          <h3>Example</h3>
          <pre
            style={{
              padding: "16px",
              overflowX: "auto",
              borderRadius: "8px",
              backgroundColor: "#111827",
              color: "#f9fafb",
              lineHeight: 1.7,
            }}
          >
            <code>{result.example}</code>
          </pre>
        </section>
      )}

      <p style={{ marginTop: "25px" }}>
        Have another question?{" "}
        <Link href="/ai-chat" style={{ color: "#2563eb" }}>
          Ask Edu2Skill AI
        </Link>
      </p>

      <p style={{ color: "#6b7280", fontSize: "13px" }}>
        This is a frontend prototype with predefined explanations.
        Live AI explanations will be integrated in a later phase.
      </p>
    </main>
  );
}
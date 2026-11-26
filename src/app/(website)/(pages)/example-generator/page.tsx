
"use client";

import { useState } from "react";
import Link from "next/link";

const examples: Record<string, { title: string; code: string; explanation: string }[]> = {
  JavaScript: [
    {
      title: "Variables",
      code: "const student = 'Ali';\nlet marks = 85;\n\nconsole.log(student, marks);",
      explanation: "const declares a binding that cannot be reassigned, while let allows reassignment.",
    },
    {
      title: "Function",
      code: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('Ali'));",
      explanation: "This function receives a name and returns a greeting.",
    },
    {
      title: "Array Loop",
      code: "const subjects = ['HTML', 'CSS', 'JavaScript'];\n\nfor (const subject of subjects) {\n  console.log(subject);\n}",
      explanation: "The for...of loop visits each value in the array.",
    },
  ],
  Python: [
    {
      title: "Variables",
      code: "student = 'Ali'\nmarks = 85\n\nprint(student, marks)",
      explanation: "Python variables store values without requiring explicit type declarations.",
    },
    {
      title: "Function",
      code: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Ali'))",
      explanation: "The def keyword defines a function, and return sends a value back to its caller.",
    },
    {
      title: "For Loop",
      code: "subjects = ['HTML', 'CSS', 'Python']\n\nfor subject in subjects:\n    print(subject)",
      explanation: "The loop visits each item in the subjects list.",
    },
  ],
  TypeScript: [
    {
      title: "Typed Variable",
      code: "const student: string = 'Ali';\nlet marks: number = 85;\n\nconsole.log(student, marks);",
      explanation: "Type annotations specify the expected types of these variables.",
    },
    {
      title: "Typed Function",
      code: "function add(a: number, b: number): number {\n  return a + b;\n}\n\nconsole.log(add(4, 6));",
      explanation: "The parameters and return value are declared as numbers.",
    },
    {
      title: "Interface",
      code: "interface Student {\n  name: string;\n  marks: number;\n}\n\nconst student: Student = {\n  name: 'Ali',\n  marks: 85,\n};",
      explanation: "An interface describes the expected structure of an object.",
    },
  ],
};

export default function ExampleGeneratorPage() {
  const [language, setLanguage] = useState("JavaScript");
  const [topic, setTopic] = useState("All");
  const [showExamples, setShowExamples] = useState(false);

  const selectedExamples = examples[language].filter(
    (example) => topic === "All" || example.title === topic
  );

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Programming Example Generator</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Explore beginner-friendly programming examples and understand how
        the code works.
      </p>

      <section
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
          onChange={(event) => {
            setLanguage(event.target.value);
            setTopic("All");
            setShowExamples(false);
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
          <option>Python</option>
          <option>TypeScript</option>
        </select>

        <label htmlFor="topic">
          <strong>Example Type</strong>
        </label>

        <select
          id="topic"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
            setShowExamples(false);
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
          <option>All</option>
          <option>Variables</option>
          <option>Function</option>
          <option>Array Loop</option>
          {language === "TypeScript" && <option>Interface</option>}
          {language === "Python" && <option>For Loop</option>}
        </select>

        <button
          type="button"
          onClick={() => setShowExamples(true)}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Generate Examples
        </button>
      </section>

      {showExamples && (
        <section style={{ marginTop: "30px" }}>
          <h2>{language} Examples</h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {selectedExamples.map((example) => (
              <article
                key={example.title}
                style={{
                  padding: "22px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                }}
              >
                <h3>{example.title}</h3>

                <pre
                  style={{
                    padding: "18px",
                    backgroundColor: "#111827",
                    color: "#f9fafb",
                    borderRadius: "8px",
                    overflowX: "auto",
                    lineHeight: 1.7,
                  }}
                >
                  <code>{example.code}</code>
                </pre>

                <h4>Explanation</h4>
                <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
                  {example.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <p style={{ marginTop: "30px" }}>
        Need an example for a specific problem?{" "}
        <Link href="/ai-chat" style={{ color: "#2563eb" }}>
          Ask Edu2Skill AI
        </Link>
      </p>

      <p style={{ color: "#6b7280", fontSize: "13px" }}>
        These examples are predefined. AI-generated examples will be added
        in a later development phase.
      </p>
    </main>
  );
}
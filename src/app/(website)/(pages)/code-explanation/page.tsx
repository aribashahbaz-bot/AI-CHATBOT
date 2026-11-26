
import Link from "next/link";

const examples = [
  {
    title: "JavaScript Variables",
    code: "const name = 'Ali';\nconst age = 20;",
    explanation:
      "The const keyword declares variables that cannot be reassigned. Here, name stores text and age stores a number.",
  },
  {
    title: "If-Else Statement",
    code: "const marks = 75;\n\nif (marks >= 50) {\n  console.log('Pass');\n} else {\n  console.log('Fail');\n}",
    explanation:
      "The if statement checks whether marks are at least 50. If the condition is true, Pass is printed; otherwise, Fail is printed.",
  },
  {
    title: "For Loop",
    code: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
    explanation:
      "The loop starts at 1, runs while i is at most 5, and increases i by one after each iteration. It prints numbers from 1 to 5.",
  },
  {
    title: "Function",
    code: "function add(a: number, b: number) {\n  return a + b;\n}\n\nconsole.log(add(3, 4));",
    explanation:
      "The function receives two numbers and returns their sum. Calling add(3, 4) produces 7. This example uses TypeScript parameter types.",
  },
];

export default function CodeExplanationPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Code Explanation</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Learn how programming code works through simple examples and
        beginner-friendly explanations.
      </p>

      <Link
        href="/ai-chat"
        style={{
          display: "inline-block",
          margin: "12px 0 30px",
          padding: "12px 18px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Ask a Coding Question
      </Link>

      <div style={{ display: "grid", gap: "24px" }}>
        {examples.map((example) => (
          <article
            key={example.title}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <h2 style={{ fontSize: "23px" }}>{example.title}</h2>

            <pre
              style={{
                padding: "18px",
                borderRadius: "10px",
                backgroundColor: "#111827",
                color: "#f9fafb",
                overflowX: "auto",
                lineHeight: 1.7,
              }}
            >
              <code>{example.code}</code>
            </pre>

            <h3>Explanation</h3>

            <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
              {example.explanation}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
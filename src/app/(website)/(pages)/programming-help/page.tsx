
import Link from "next/link";

const topics = [
  {
    title: "HTML",
    description: "Learn how to structure web pages using HTML elements.",
    example: "<h1>Hello World</h1>",
  },
  {
    title: "CSS",
    description: "Learn how to style websites with colors, spacing, and layouts.",
    example: "h1 { color: blue; }",
  },
  {
    title: "JavaScript",
    description: "Understand variables, functions, conditions, and loops.",
    example: 'console.log("Hello World");',
  },
  {
    title: "TypeScript",
    description: "Learn JavaScript with static types for safer development.",
    example: "const score: number = 100;",
  },
  {
    title: "Python",
    description: "Explore beginner-friendly programming concepts.",
    example: 'print("Hello World")',
  },
  {
    title: "React",
    description: "Learn components, props, state, and interactive interfaces.",
    example: "function App() { return <h1>Hello</h1>; }",
  },
];

export default function ProgrammingHelpPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Programming Help</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Explore popular programming languages and web-development
        technologies with beginner-friendly examples.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {topics.map((topic) => (
          <article
            key={topic.title}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "22px",
              backgroundColor: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: "22px" }}>{topic.title}</h2>

            <p style={{ color: "#6b7280", lineHeight: 1.7 }}>
              {topic.description}
            </p>

            <pre
              style={{
                padding: "12px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
              }}
            >
              <code>{topic.example}</code>
            </pre>

            <Link
              href="/ai-chat"
              style={{
                display: "inline-block",
                marginTop: "12px",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              Ask AI about this →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

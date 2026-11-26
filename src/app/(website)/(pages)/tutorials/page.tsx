
import Link from "next/link";

const tutorials = [
  {
    title: "HTML Fundamentals",
    level: "Beginner",
    category: "Web Development",
    description: "Learn HTML elements, headings, links, images, and forms.",
    topics: ["HTML structure", "Elements", "Forms"],
  },
  {
    title: "CSS Styling",
    level: "Beginner",
    category: "Web Development",
    description: "Understand colors, typography, layouts, and responsive design.",
    topics: ["Selectors", "Flexbox", "Grid"],
  },
  {
    title: "JavaScript Programming",
    level: "Beginner",
    category: "Programming",
    description: "Explore variables, functions, loops, arrays, and objects.",
    topics: ["Variables", "Functions", "Arrays"],
  },
  {
    title: "TypeScript Essentials",
    level: "Intermediate",
    category: "Programming",
    description: "Learn types, interfaces, functions, and safer JavaScript.",
    topics: ["Types", "Interfaces", "Generics"],
  },
  {
    title: "React Fundamentals",
    level: "Intermediate",
    category: "Frontend Development",
    description: "Understand components, props, state, and hooks.",
    topics: ["Components", "Props", "State"],
  },
  {
    title: "Next.js Introduction",
    level: "Intermediate",
    category: "Frontend Development",
    description: "Learn routing, pages, layouts, and server-side features.",
    topics: ["App Router", "Layouts", "Routes"],
  },
  {
    title: "Data Structures",
    level: "Intermediate",
    category: "Computer Science",
    description: "Study arrays, stacks, queues, linked lists, and trees.",
    topics: ["Arrays", "Stacks", "Queues"],
  },
  {
    title: "Database Fundamentals",
    level: "Beginner",
    category: "Computer Science",
    description: "Explore databases, collections, records, and queries.",
    topics: ["Database basics", "Documents", "Queries"],
  },
];

export default function TutorialsPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#172033",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Edu2Skill Tutorials</h1>

      <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
        Explore educational tutorials designed to help you learn
        programming, web development, and Computer Science step by step.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "25px 0",
        }}
      >
        {["Programming", "Web Development", "Frontend Development", "Computer Science"].map(
          (category) => (
            <span
              key={category}
              style={{
                padding: "8px 12px",
                backgroundColor: "#eff6ff",
                color: "#1d4ed8",
                borderRadius: "20px",
                fontSize: "13px",
              }}
            >
              {category}
            </span>
          )
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {tutorials.map((tutorial) => (
          <article
            key={tutorial.title}
            style={{
              padding: "22px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            >
              {tutorial.category}
            </span>

            <h2 style={{ fontSize: "21px", marginTop: "12px" }}>
              {tutorial.title}
            </h2>

            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Level: {tutorial.level}
            </p>

            <p style={{ lineHeight: 1.7 }}>{tutorial.description}</p>

            <h3 style={{ fontSize: "15px" }}>Topics covered</h3>

            <ul style={{ paddingLeft: "20px", lineHeight: 1.9 }}>
              {tutorial.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            <Link
              href="/ai-chat"
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Ask AI about this topic →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
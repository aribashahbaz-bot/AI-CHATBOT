
import Link from "next/link";

const features = [
  {
    title: "AI Teaching Assistant",
    description:
      "Ask Computer Science and programming questions and learn step by step.",
    href: "/ai-chat",
    icon: "🤖",
  },
  {
    title: "Programming Help",
    description:
      "Understand programming concepts, logic, and code examples.",
    href: "/programming-help",
    icon: "💻",
  },
  {
    title: "Code Explanation",
    description:
      "Explore what a code snippet does and how its logic works.",
    href: "/code-explanation",
    icon: "📘",
  },
  {
    title: "Debugging Assistant",
    description:
      "Learn how to identify programming errors and possible solutions.",
    href: "/code-debugging",
    icon: "🛠️",
  },
  {
    title: "Practice Questions",
    description:
      "Prepare for exams with Computer Science practice questions.",
    href: "/practice-questions",
    icon: "📝",
  },
  {
    title: "MCQ Generator",
    description:
      "Explore multiple-choice questions for your learning topics.",
    href: "/mcq-generator",
    icon: "✅",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "1150px",
        margin: "0 auto",
        padding: "50px 24px",
        color: "#172033",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "55px 20px",
          backgroundColor: "#eff6ff",
          borderRadius: "20px",
        }}
      >
        <p style={{ color: "#2563eb", fontWeight: "bold" }}>
          WELCOME TO EDU2SKILL AI
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.2,
            margin: "16px 0",
          }}
        >
          Learn Smarter with Your AI Teaching Assistant
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: 1.8,
            color: "#4b5563",
          }}
        >
          Understand Computer Science, improve your programming skills,
          explore code examples, and practise new concepts at your own pace.
        </p>

        <Link
          href="/ai-chat"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "14px 24px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Start Learning
        </Link>
      </section>

      <section style={{ marginTop: "55px" }}>
        <h2 style={{ fontSize: "30px", textAlign: "center" }}>
          Explore Learning Tools
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Choose a tool to support your learning journey.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {features.map((feature) => (
            <article
              key={feature.href}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "24px",
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ fontSize: "32px" }}>{feature.icon}</div>

              <h3 style={{ fontSize: "20px", margin: "16px 0 10px" }}>
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  minHeight: "75px",
                }}
              >
                {feature.description}
              </p>

              <Link
                href={feature.href}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "#2563eb",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Explore tool →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "55px",
          padding: "30px",
          borderRadius: "14px",
          backgroundColor: "#f9fafb",
          textAlign: "center",
        }}
      >
        <h2>Learning Made Easier</h2>
        <p style={{ color: "#4b5563", lineHeight: 1.8 }}>
          Edu2Skill AI is designed to help students understand concepts,
          learn programming, and build confidence through practice.
        </p>
        <Link href="/tutorials" style={{ color: "#2563eb" }}>
          Explore Tutorials →
        </Link>
      </section>
    </main>
  );
}
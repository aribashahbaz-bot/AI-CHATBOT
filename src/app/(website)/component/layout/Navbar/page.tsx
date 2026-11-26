
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programming Help", href: "/programming-help" },
  { label: "AI Chat", href: "/ai-chat" },
  { label: "Code Explanation", href: "/code-explanation" },
  { label: "Code Debugging", href: "/code-debugging" },
  { label: "Practice Questions", href: "/practice-questions" },
  { label: "MCQ Generator", href: "/mcq-generator" },
  { label: "Quiz", href: "/quiz" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Example Generator", href: "/example-generator" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
  { label: "Tutorial Summarizer", href: "/tutorial-summarizer" },
  { label: "Simple Explainer", href: "/simple-explainer" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
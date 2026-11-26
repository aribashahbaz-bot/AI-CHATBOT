

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "30px 20px",
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#f9fafb",
        color: "#4b5563",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Edu2Skill AI Teaching Assistant
      </p>

      <p>
        Learn programming, understand concepts, and improve your skills.
      </p>

      <p>
        <Link href="/about" style={{ color: "#2563eb" }}>
          About Edu2Skill
        </Link>
      </p>

      <p style={{ fontSize: "13px" }}>
        © {new Date().getFullYear()} Edu2Skill. All rights reserved.
      </p>
    </footer>
  );
}
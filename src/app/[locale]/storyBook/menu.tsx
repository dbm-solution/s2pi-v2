"use client"

import Link from "next/link"

const groups = [
  { label: "Actions Buttons", href: "/storyBook/actions" },
  { label: "Social Buttons", href: "/storyBook/socials" },
  { label: "Navigation Bar", href: "/storyBook/navigation-bar" },
  { label: "Button Groups", href: "/storyBook/button-groups" },
  { label: "Share Buttons", href: "/storyBook/share-buttons" },
  { label: "Typography", href: "/storyBook/typography" },
  { label: "Info Card", href: "/storyBook/info-card" },
  { label: "Other Components", href: "#other" },
]

export default function StoryBookMenu() {
  return (
    <aside
      style={{
        width: 220,
        background: "#fff",
        borderRight: "1px solid #eee",
        minHeight: "100vh",
        padding: "32px 0",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 20, padding: "0 24px 24px 24px" }}>
        StoryBook Menu
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {groups.map((group) => (
          <Link
            key={group.href}
            href={group.href}
            style={{
              padding: "10px 24px",
              color: "#232323",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: 500,
              transition: "background 0.15s",
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#f5f5f5")}
            onMouseOut={e => (e.currentTarget.style.background = "transparent")}
          >
            {group.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

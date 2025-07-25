"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/cards/card"

const groups = [
  { label: "Actions Buttons", href: "/storyBook/actions" },
  { label: "Social Buttons", href: "/storyBook/socials" },
  { label: "Button Groups", href: "/storyBook/button-groups" },
  { label: "Share Buttons", href: "/storyBook/share-buttons" },
  { label: "Other Components", href: "#" },
]

export default function StoryBookHome() {
  return (
    <div>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>S2PI Component StoryBook</h1>
      <p style={{ fontSize: 18, color: "#555", marginBottom: 32 }}>
        Welcome to the S2PI StoryBook! Browse and interact with all reusable UI components used in the project.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
        {groups.map((group) => (
          <Card key={group.href} style={{ minWidth: 260, flex: "1 1 260px" }}>
            <CardHeader>
              <CardTitle>{group.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={group.href}
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "var(--s2pi-blue-dark-card)",
                  color: "#fff",
                  borderRadius: 6,
                  fontWeight: 500,
                  textDecoration: "none",
                  marginTop: 8,
                  transition: "background 0.15s",
                }}
              >
                Explore
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
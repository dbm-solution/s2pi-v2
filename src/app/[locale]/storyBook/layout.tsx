"use client"

import StoryBookMenu from "./menu"

export default function StoryBookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f9f9f9" }}>
      {/* Sidebar */}
      <StoryBookMenu />

      {/* Main Content */}
      <main
        style={{
          marginLeft: 220, // width of sidebar
          width: "100%",
          padding: "32px 0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          {children}
        </div>
      </main>
    </div>
  )
}
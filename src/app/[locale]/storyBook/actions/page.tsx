"use client"

import { useState } from "react"
import { ActionsButton } from "@/components/ui/buttons/actions-button/actions-button"
import { ActionsButtonGroup } from "./actions-button-group"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/cards/card"
import { ArrowUpRightIcon, DownloadIcon, ExternalLinkIcon, PlusIcon } from "lucide-react"
import PDFIcon from "@/components/ui/icons/actions/PDFIcon"
import DocumentIcon from "@/components/ui/icons/actions/DocumentIcon"

export default function ActionsButtonsStoryBook() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleAction = async (actionId: string, action: () => void) => {
    setLoading(actionId)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    action()
    setLoading(null)
  }

  // Grouped button examples
  const learnMoreButtons = [
    {
      id: "learn-more-1",
      label: "En savoir +",
      variant: "primary" as const,
      icon: <ArrowUpRightIcon />,
      onClick: () => console.log("Learn more 1 clicked"),
    },
  ]

  const pdfButtons = [
    {
      id: "pdf-1",
      label: "Téléchargez le PDF",
      variant: "primary" as const,
      icon: <PDFIcon />,
      onClick: () => handleAction("pdf-download", () => console.log("PDF download clicked")),
    },
    {
      id: "pdf-2",
      label: "Document ATEX",
      variant: "secondary" as const,
      icon: <DocumentIcon />,
      onClick: () => handleAction("atex-doc", () => console.log("ATEX document clicked")),
    },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>ActionsButton Storybook</h1>

      {/* Grouped Buttons Example */}
      <Card id="actions-buttons-group">
        <CardHeader>
          <CardTitle>Grouped "En savoir +" Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <ActionsButtonGroup  buttons={learnMoreButtons} orientation="horizontal" />
        </CardContent>
      </Card>

      {/* PDF/Document Buttons Group */}
      <Card id="actions-pdf-buttons" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>PDF & Document Buttons (Group)</CardTitle>
        </CardHeader>
        <CardContent>
          <ActionsButtonGroup buttons={pdfButtons} orientation="vertical" />
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card id="actions-size-variations" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>Size Variations</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ActionsButton variant="primary" size="sm" icon={<ArrowUpRightIcon />}>
              Small
            </ActionsButton>
            <ActionsButton variant="primary" size="md" icon={<ArrowUpRightIcon />}>
              Medium
            </ActionsButton>
            <ActionsButton variant="primary" size="lg" icon={<ArrowUpRightIcon />}>
              Large
            </ActionsButton>
          </div>
        </CardContent>
      </Card>

      {/* Color Variants */}
      <Card id="actions-color-variants" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>Color Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ActionsButton variant="primary" icon={<ArrowUpRightIcon />}>
              Primary
            </ActionsButton>
            <ActionsButton variant="secondary" icon={<DocumentIcon />}>
              Secondary
            </ActionsButton>
            <ActionsButton variant="success" icon={<PlusIcon />}>
              Success
            </ActionsButton>
            <ActionsButton variant="warning" icon={<ExternalLinkIcon />}>
              Warning
            </ActionsButton>
            <ActionsButton variant="danger" icon={<DownloadIcon />}>
              Danger
            </ActionsButton>
            <ActionsButton variant="info" icon={<DocumentIcon />}>
              Info
            </ActionsButton>
          </div>
        </CardContent>
      </Card>

      {/* Shape Variations */}
      <Card id="actions-shape-variations" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>Shape Variations</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ActionsButton variant="primary" shape="rectangle" icon={<ArrowUpRightIcon />}>
              Rectangle
            </ActionsButton>
            <ActionsButton variant="primary" shape="rounded" icon={<ArrowUpRightIcon />}>
              Rounded
            </ActionsButton>
            <ActionsButton variant="primary" shape="pill" icon={<ArrowUpRightIcon />}>
              Pill
            </ActionsButton>
          </div>
        </CardContent>
      </Card>

      {/* Icon Positions */}
      <Card id="actions-icon-positions" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>Icon Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ActionsButton variant="primary" icon={<ArrowUpRightIcon />} iconPosition="left">
              Icon Left
            </ActionsButton>
            <ActionsButton variant="primary" icon={<ArrowUpRightIcon />} iconPosition="right">
              Icon Right
            </ActionsButton>
          </div>
        </CardContent>
      </Card>

      {/* Full Width and Loading States */}
      <Card id="actions-fullwidth-loading" style={{ marginTop: 32 }}>
        <CardHeader>
          <CardTitle>Full Width & Loading States</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            <ActionsButton
              variant="primary"
              fullWidth
              icon={<DownloadIcon />}
              onClick={() => handleAction("full-width", () => console.log("Full width clicked"))}
              loading={loading === "full-width"}
            >
              {loading === "full-width" ? "Downloading..." : "Full Width Button"}
            </ActionsButton>
            <ActionsButton variant="secondary" fullWidth disabled icon={<DocumentIcon />}>
              Disabled Button
            </ActionsButton>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
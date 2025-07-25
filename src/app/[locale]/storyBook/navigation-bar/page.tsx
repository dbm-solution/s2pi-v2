"use client"

import { useState } from "react"
import { MenuButton } from "@/components/ui/buttons/menu-button/menu-button"
import { MenuItem } from "@/components/ui/buttons/menu-item/menu-item"
import { NavigationBar } from "./navigation-bar"

export default function MenuButtonsDemo() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Navigation data matching the images
  const mainNavigation = [
    {
      id: "accueil",
      label: "ACCUEIL",
      href: "/",
      variant: "default" as const,
    },
    {
      id: "a-propos",
      label: "À PROPOS",
      href: "/about",
      variant: "active" as const,
    },
    {
      id: "nouveaute",
      label: "NOUVEAUTÉ",
      href: "/news",
      variant: "highlight" as const,
    },
    {
      id: "nos-produits",
      label: "NOS PRODUITS",
      variant: "secondary" as const,
      hasDropdown: true,
      megaMenu: true,
      items: [
        {
          id: "itarn",
          label: "ITARN – ISOLATION THERMIQUE PAR L'EXTÉRIEUR",
          href: "/products/itarn",
          description: "Solutions d'isolation thermique extérieure",
        },
        {
          id: "fibreux",
          label: "PRODUITS FIBREUX DE PROJECTION & PANNEAUX RIGIDES",
          href: "/products/fibreux",
          description: "Matériaux de projection et panneaux",
        },
        {
          id: "pateux",
          label: "PRODUITS PÂTEUX DE PROJECTION",
          href: "/products/pateux",
          description: "Solutions de projection pâteuse",
        },
        {
          id: "peintures",
          label: "PEINTURES INTUMESCENTES PROMAPAINT®-SC4 ET PROMAPAINT®-SC3",
          href: "/products/peintures",
          description: "Peintures de protection incendie",
        },
        {
          id: "primaires",
          label: "PRIMAIRES D'ACCROCHAGE",
          href: "/products/primaires",
          description: "Solutions d'accrochage",
        },
        {
          id: "enduits",
          label: "ENDUITS DE FINITION",
          href: "/products/enduits",
          description: "Finitions et revêtements",
        },
        {
          id: "materiels",
          label: "MATÉRIELS ET ACCESSOIRES",
          href: "/products/materiels",
          description: "Équipements et accessoires",
        },
      ],
    },
    {
      id: "solutions-techniques",
      label: "SOLUTIONS TECHNIQUES",
      variant: "secondary" as const,
      hasDropdown: true,
      items: [
        {
          id: "isolation-thermique",
          label: "Isolation Thermique",
          href: "/solutions/isolation",
        },
        {
          id: "protection-incendie",
          label: "Protection Incendie",
          href: "/solutions/incendie",
        },
        {
          id: "acoustique",
          label: "Solutions Acoustiques",
          href: "/solutions/acoustique",
        },
      ],
    },
  ]

  const qualityNavigation = [
    {
      id: "charte-qualite",
      label: "CHARTE QUALITÉ",
      variant: "secondary" as const,
      hasDropdown: true,
      items: [
        {
          id: "service-client",
          label: "SERVICE CLIENT S2PI",
          href: "/quality/service-client",
        },
        {
          id: "zero-casse",
          label: "ZÉRO CASSE MACHINE",
          href: "/quality/zero-casse",
        },
        {
          id: "politique-qualite",
          label: "POLITIQUE QUALITÉ",
          href: "/quality/politique",
        },
        {
          id: "certification-iso",
          label: "CERTIFICATION ISO 9001:2015",
          href: "/quality/iso-9001",
          active: true,
        },
        {
          id: "enquete-satisfaction",
          label: "ENQUÊTE DE SATISFACTION",
          href: "/quality/satisfaction",
        },
      ],
    },
    {
      id: "nos-depots",
      label: "NOS DÉPÔTS",
      variant: "secondary" as const,
      hasDropdown: true,
      items: [
        {
          id: "depot-nord",
          label: "Dépôt Nord",
          href: "/depots/nord",
          description: "Lille, Valenciennes",
        },
        {
          id: "depot-est",
          label: "Dépôt Est",
          href: "/depots/est",
          description: "Strasbourg, Metz",
        },
        {
          id: "depot-sud",
          label: "Dépôt Sud",
          href: "/depots/sud",
          description: "Marseille, Nice",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Menu Button Component</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            Professional navigation menu buttons that match the exact design specifications with dropdown and mega menu
            support.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Original Design Recreation - Horizontal Navigation */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Horizontal Navigation Bar</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/menu-buttons-preview-3.png"
              alt="Original horizontal navigation design"
              className="rounded border max-w-full"
            />
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <NavigationBar items={mainNavigation} />
          </div>
        </section>

        {/* Vertical Menu Recreation */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Vertical Dropdown Menu</h2>
          <div className="flex justify-center mb-6">
            <img
              src="/menu-buttons-preview-1.png"
              alt="Original vertical menu design"
              className="rounded border max-w-full"
            />
          </div>
          <div className="max-w-sm mx-auto space-y-2">
            <NavigationBar items={qualityNavigation} className="flex-col items-stretch" />
          </div>
        </section>

        {/* Individual Menu Button Examples */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Individual Menu Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Default State</h3>
              <MenuButton variant="default">ACCUEIL</MenuButton>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Active State</h3>
              <MenuButton variant="active">À PROPOS</MenuButton>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Highlight State</h3>
              <MenuButton variant="highlight">NOUVEAUTÉ</MenuButton>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">With Dropdown</h3>
              <MenuButton
                variant="secondary"
                hasDropdown
                dropdownContent={
                  <div>
                    <MenuItem href="/item1">Menu Item 1</MenuItem>
                    <MenuItem href="/item2" active>
                      Active Item
                    </MenuItem>
                    <MenuItem href="/item3">Menu Item 3</MenuItem>
                  </div>
                }
              >
                NOS PRODUITS
              </MenuButton>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">With Badge</h3>
              <MenuButton variant="default" badge="3">
                NOTIFICATIONS
              </MenuButton>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Disabled State</h3>
              <MenuButton variant="default" disabled>
                DISABLED
              </MenuButton>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Size Variations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Small</h3>
              <div className="flex gap-3 flex-wrap">
                <MenuButton variant="default" size="sm">
                  SMALL
                </MenuButton>
                <MenuButton variant="active" size="sm">
                  ACTIVE SMALL
                </MenuButton>
                <MenuButton variant="secondary" size="sm" hasDropdown>
                  DROPDOWN SMALL
                </MenuButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Medium (Default)</h3>
              <div className="flex gap-3 flex-wrap">
                <MenuButton variant="default" size="md">
                  MEDIUM
                </MenuButton>
                <MenuButton variant="active" size="md">
                  ACTIVE MEDIUM
                </MenuButton>
                <MenuButton variant="secondary" size="md" hasDropdown>
                  DROPDOWN MEDIUM
                </MenuButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Large</h3>
              <div className="flex gap-3 flex-wrap">
                <MenuButton variant="default" size="lg">
                  LARGE
                </MenuButton>
                <MenuButton variant="active" size="lg">
                  ACTIVE LARGE
                </MenuButton>
                <MenuButton variant="secondary" size="lg" hasDropdown>
                  DROPDOWN LARGE
                </MenuButton>
              </div>
            </div>
          </div>
        </section>

        {/* Mega Menu Example */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Mega Menu Example</h2>
          <div className="flex justify-center">
            <MenuButton
              variant="secondary"
              hasDropdown
              megaMenu
              dropdownContent={
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Produits Principaux</h4>
                    <div className="space-y-1">
                      <MenuItem href="/products/itarn">ITARN – Isolation Thermique</MenuItem>
                      <MenuItem href="/products/fibreux">Produits Fibreux</MenuItem>
                      <MenuItem href="/products/pateux">Produits Pâteux</MenuItem>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Solutions Spécialisées</h4>
                    <div className="space-y-1">
                      <MenuItem href="/products/peintures">Peintures Intumescentes</MenuItem>
                      <MenuItem href="/products/primaires">Primaires d'Accrochage</MenuItem>
                      <MenuItem href="/products/enduits">Enduits de Finition</MenuItem>
                    </div>
                  </div>
                </div>
              }
            >
              MEGA MENU EXAMPLE
            </MenuButton>
          </div>
        </section>

        {/* Full Width Menu */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Full Width Menu Items</h2>
          <div className="max-w-md mx-auto space-y-2">
            <MenuButton variant="default" fullWidth>
              SERVICE CLIENT S2PI
            </MenuButton>
            <MenuButton variant="default" fullWidth>
              ZÉRO CASSE MACHINE
            </MenuButton>
            <MenuButton variant="default" fullWidth>
              POLITIQUE QUALITÉ
            </MenuButton>
            <MenuButton variant="secondary" fullWidth>
              CERTIFICATION ISO 9001:2015
            </MenuButton>
            <MenuButton variant="default" fullWidth>
              ENQUÊTE DE SATISFACTION
            </MenuButton>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enterprise Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">✅ Accessibility Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ARIA labels and roles</li>
                <li>• Keyboard navigation (Enter, Space, Escape)</li>
                <li>• Focus management</li>
                <li>• Screen reader support</li>
                <li>• High contrast mode</li>
                <li>• Reduced motion support</li>
                <li>• Proper semantic markup</li>
                <li>• WCAG 2.1 AA compliant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">🚀 Technical Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TypeScript with strict typing</li>
                <li>• CSS Modules for scoped styling</li>
                <li>• Controlled/uncontrolled modes</li>
                <li>• Click outside to close</li>
                <li>• Responsive design</li>
                <li>• Animation and transitions</li>
                <li>• Mega menu support</li>
                <li>• Badge and icon support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

"use client"

import React, { useState } from "react"
import { Card } from "./card"
import { RegularButton } from "../buttons/regular-button/regular-button"
import PDFIcon from "../icons/actions/PDFIcon"
import ExternalLinkIcon from "../icons/actions/ExternalLinkIcon"

interface ProductCardProps {
  name: string
  category: string
  description: string
  features: string[]
  applications: string[]
  technicalSpecs: {
    density?: string
    thermalConductivity?: string
    fireResistance?: string
    thickness?: string
  }
  pdfUrl?: string
  imageUrl?: string
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  description,
  features,
  applications,
  technicalSpecs,
  pdfUrl,
  imageUrl,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(imageUrl)

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true)
      setImageSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3EImage non disponible%3C/text%3E%3C/svg%3E")
    }
  }

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Product Image */}
      {imageUrl && (
        <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{category}</span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Product Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Caractéristiques principales</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specifications */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Spécifications techniques</h4>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {Object.entries(technicalSpecs).map(([key, value]) => {
              if (!value) return null
              const labels: Record<string, string> = {
                density: "Densité",
                thermalConductivity: "Conductivité thermique",
                fireResistance: "Résistance au feu",
                thickness: "Épaisseur",
              }
              return (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-600">{labels[key]}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Applications</h4>
          <div className="flex flex-wrap gap-2">
            {applications.map((application, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {application}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          {pdfUrl && (
            <RegularButton
              variant="default"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => window.open(pdfUrl, "_blank")}
            >
              <PDFIcon className="w-4 h-4" />
              Fiche technique
            </RegularButton>
          )}
          <RegularButton variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <ExternalLinkIcon className="w-4 h-4" />
            Plus d'infos
          </RegularButton>
        </div>
      </div>
    </Card>
  )
}

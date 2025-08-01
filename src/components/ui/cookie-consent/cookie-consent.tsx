"use client"

import type React from "react"
import { useState } from "react"

interface CookieConsentProps {
  isVisible?: boolean
  onAccept?: () => void
  onDecline?: () => void
  onSettings?: () => void
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ isVisible = true, onAccept, onDecline, onSettings }) => {
  const [visible, setVisible] = useState(isVisible)

  const handleAccept = () => {
    setVisible(false)
    onAccept?.()
  }

  const handleDecline = () => {
    setVisible(false)
    onDecline?.()
  }

  const handleSettings = () => {
    onSettings?.()
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            Nous utilisons des cookies sur notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant
            vos préférences et en répétant vos visites. En cliquant sur « J'ai compris. Merci », vous consentez à
            l'utilisation de TOUS les cookies. Cependant, vous pouvez visiter les « Paramètres des cookies » pour
            fournir un consentement contrôlé.{" "}
            <a href="/politique-cookies" className="text-blue-600 underline hover:text-blue-800">
              Politique des cookies
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={handleSettings}
            className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
          >
            Paramètres des cookies
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
          >
            Tout refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors text-sm font-medium"
          >
            J'ai compris. Merci
          </button>
        </div>
      </div>
    </div>
  )
}

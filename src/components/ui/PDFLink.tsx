import type React from "react"
import Link from "next/link"
import PDFIcon from "./icons/actions/PDFIcon"
import DownloadIcon from "./icons/actions/DownloadIcon"

interface PDFLinkProps {
  href: string
  title: string
  description?: string
  size?: string
  variant?: "default" | "card" | "inline"
  showIcon?: boolean
  showDownloadIcon?: boolean
  className?: string
}

export const PDFLink: React.FC<PDFLinkProps> = ({
  href,
  title,
  description,
  size,
  variant = "default",
  showIcon = true,
  showDownloadIcon = false,
  className = "",
}) => {
  const baseClasses = "inline-flex items-center gap-2 transition-colors duration-200"

  const variantClasses = {
    default: "text-blue-600 hover:text-blue-800 underline",
    card: "bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300",
    inline: "text-blue-600 hover:text-blue-800",
  }

  const content = (
    <>
      {showIcon && <PDFIcon className="w-5 h-5 text-red-600" />}
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        {description && <span className="text-sm text-gray-600">{description}</span>}
        {size && <span className="text-xs text-gray-500">({size})</span>}
      </div>
      {showDownloadIcon && <DownloadIcon className="w-4 h-4" />}
    </>
  )

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {content}
    </Link>
  )
}

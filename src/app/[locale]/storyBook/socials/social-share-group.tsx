"use client"

import type React from "react"
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button"
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon"
import { LinkedInIcon } from "@/components/ui/icons/socials/LinkedIn-icon"
import { EmailIcon } from "@/components/ui/icons/socials/Email-icon"
import { useSocialShare } from "@/hooks/use-social-share"

interface SocialShareGroupProps {
  url?: string
  title?: string
  text?: string
  hashtags?: string[]
  className?: string
  size?: "sm" | "md" | "lg"
  shape?: "rectangle" | "rounded" | "pill"
  showLabels?: boolean
}

export const SocialShareGroup: React.FC<SocialShareGroupProps> = ({
  url,
  title,
  text,
  hashtags,
  className = "",
  size = "md",
  shape = "rectangle",
  showLabels = false,
}) => {
  const { shareToFacebook, shareToLinkedIn, shareViaEmail, shareToTwitter } = useSocialShare()

  const shareOptions = { url, title, text, hashtags }

  return (
    <div className={`flex gap-3 ${className}`} role="group" aria-label="Share on social media">
      <SocialButton
        variant="facebook"
        size={size}
        shape={shape}
        onClick={() => shareToFacebook(shareOptions)}
        icon={<FacebookIcon />}
        ariaLabel="Share on Facebook"
      >
        {showLabels && "Facebook"}
      </SocialButton>

      <SocialButton
        variant="linkedin"
        size={size}
        shape={shape}
        onClick={() => shareToLinkedIn(shareOptions)}
        icon={<LinkedInIcon />}
        ariaLabel="Share on LinkedIn"
      >
        {showLabels && "LinkedIn"}
      </SocialButton>

      <SocialButton
        variant="email"
        size={size}
        shape={shape}
        onClick={() => shareViaEmail(shareOptions)}
        icon={<EmailIcon />}
        ariaLabel="Share via Email"
      >
        {showLabels && "Email"}
      </SocialButton>
    </div>
  )
}

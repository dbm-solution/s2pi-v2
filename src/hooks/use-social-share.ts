"use client"

import { useCallback } from "react"

interface ShareOptions {
  url?: string
  title?: string
  text?: string
  hashtags?: string[]
}

export const useSocialShare = () => {
  const shareToFacebook = useCallback((options: ShareOptions = {}) => {
    const { url = window.location.href } = options
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes")
  }, [])

  const shareToLinkedIn = useCallback((options: ShareOptions = {}) => {
    const { url = window.location.href, title = document.title } = options
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes")
  }, [])

  const shareToTwitter = useCallback((options: ShareOptions = {}) => {
    const { url = window.location.href, text = document.title, hashtags = [] } = options
    const hashtagString = hashtags.length > 0 ? `&hashtags=${hashtags.join(",")}` : ""
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}${hashtagString}`
    window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes")
  }, [])

  const shareViaEmail = useCallback((options: ShareOptions = {}) => {
    const { url = window.location.href, title = document.title, text = "" } = options
    const subject = encodeURIComponent(title)
    const body = encodeURIComponent(`${text}\n\n${url}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }, [])

  return {
    shareToFacebook,
    shareToLinkedIn,
    shareToTwitter,
    shareViaEmail,
  }
}

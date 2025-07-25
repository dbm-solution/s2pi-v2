import React from 'react';
import SocialIcon, { SocialPlatform } from './buttons/social/SocialIcon';
import styles from './SocialShare.module.css';

export interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
  platforms?: SocialPlatform[];
  variant?: 'rect' | 'circle' | 'square';
  position?: 'center' | 'left' | 'right';
  tracking?: boolean;
  trackingContainer?: string;
}

const defaultPlatforms: SocialPlatform[] = ['facebook', 'linkedin', 'email'];

export default function SocialShare({
  url,
  title,
  className = '',
  platforms = defaultPlatforms,
  variant = 'rect',
  position = 'center',
  tracking = true,
  trackingContainer = 'article-bar'
}: SocialShareProps) {
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const getShareUrl = (platform: SocialPlatform): string => {
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer.php?u=${encodedUrl}`;
      case 'linkedin':
        return `https://linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
      case 'email':
        return `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
      default:
        return '';
    }
  };

  const wrapperClasses = [
    styles.socialShare,
    styles[variant],
    styles[position],
    className
  ].filter(Boolean).join(' ');

  return (
    <ul 
      className={wrapperClasses}
      data-tracking={tracking}
      data-tracking-container={trackingContainer}
    >
      {platforms.map((platform) => (
        <SocialIcon
          key={platform}
          platform={platform}
          href={getShareUrl(platform)}
          variant="article-bar"
          target={platform === 'email' ? '_self' : '_blank'}
          rel="nofollow"
        />
      ))}
    </ul>
  );
}

// Predefined configurations for different use cases
export const StandardArticleShare = ({ url, title, ...props }: Omit<SocialShareProps, 'platforms'>) => (
  <SocialShare
    url={url}
    title={title}
    platforms={['facebook', 'linkedin', 'email']}
    {...props}
  />
);

export const ExtendedArticleShare = ({ url, title, ...props }: Omit<SocialShareProps, 'platforms'>) => (
  <SocialShare
    url={url}
    title={title}
    platforms={['facebook', 'linkedin', 'twitter', 'email']}
    {...props}
  />
); 
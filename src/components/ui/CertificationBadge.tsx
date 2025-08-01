"use client";

import React from 'react';

interface CertificationBadgeProps {
  type: 'thermal' | 'fire' | 'acoustic';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CertificationBadge({ 
  type, 
  size = 'md', 
  className = '' 
}: CertificationBadgeProps) {
  const sizeClasses = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-24 h-24 text-sm',
    lg: 'w-32 h-32 text-base'
  };

  const getBadgeConfig = () => {
    switch (type) {
      case 'thermal':
        return {
          color: '#2563eb',
          borderColor: 'border-[#2563eb]',
          textColor: 'text-[#2563eb]',
          topText: 'ISOLATION',
          bottomText: 'THERMIQUE',
          icon: (
            <svg className="w-8 h-8 text-[#2563eb]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L9.5 4.5L4 3L6 8L1 9L6 12L1 15L6 16L4 21L9.5 19.5L12 24L14.5 19.5L20 21L18 16L23 15L18 12L23 9L18 8L20 3L14.5 4.5L12 0ZM12 6L13.5 10.5L18 9L15 12L18 15L13.5 13.5L12 18L10.5 13.5L6 15L9 12L6 9L10.5 10.5L12 6Z"/>
            </svg>
          ),
          accent: '★'
        };
      case 'fire':
        return {
          color: '#dc2626',
          borderColor: 'border-[#dc2626]',
          textColor: 'text-[#dc2626]',
          topText: 'PROTECTION',
          bottomText: 'INCENDIE',
          icon: (
            <svg className="w-8 h-8 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 0.67C13.5 0.67 14.24 3.32 14.24 5.47C14.24 7.53 12.89 9.2 10.83 9.2C8.76 9.2 7.2 7.53 7.2 5.47L7.23 5.11C5.21 7.51 4 10.62 4 14C4 18.42 7.58 22 12 22S20 18.42 20 14C20 8.61 17.41 3.8 13.5 0.67ZM11.71 19C9.93 19 8.49 17.6 8.49 15.86C8.49 14.24 9.54 13.1 11.3 12.74C13.07 12.38 14.9 11.53 15.92 10.16C16.31 11.45 16.51 12.81 16.51 14.2C16.51 16.85 14.36 19 11.71 19Z"/>
            </svg>
          ),
          accent: '★'
        };
      case 'acoustic':
        return {
          color: '#8b5a3c',
          borderColor: 'border-[#8b5a3c]',
          textColor: 'text-[#8b5a3c]',
          topText: 'PROTECTION',
          bottomText: 'ACOUSTIQUE',
          icon: (
            <svg className="w-8 h-8 text-[#8b5a3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M8 6v12M16 6v12M4 10v4M20 10v4"/>
            </svg>
          ),
          accent: '•'
        };
      default:
        return {
          color: '#6b7280',
          borderColor: 'border-gray-500',
          textColor: 'text-gray-500',
          topText: 'PROTECTION',
          bottomText: 'STANDARD',
          icon: <div className="w-8 h-8 bg-gray-400 rounded"></div>,
          accent: '•'
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <div className={`text-center group cursor-pointer ${className}`}>
      <div className={`
        ${sizeClasses[size]} 
        rounded-full border-4 ${config.borderColor} 
        bg-white flex flex-col items-center justify-center 
        mx-auto relative shadow-lg hover:scale-105 
        transition-transform duration-200
        ${type === 'acoustic' ? 'border-dashed' : ''}
      `}>
        {/* Central Icon */}
        <div className="mb-1">
          {config.icon}
        </div>
        
        {/* Top arc text */}
        <div className={`
          absolute -top-2 left-1/2 transform -translate-x-1/2 
          ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs'} 
          font-bold ${config.textColor} whitespace-nowrap
        `}>
          {config.topText}
        </div>
        
        {/* Bottom arc text */}
        <div className={`
          absolute -bottom-2 left-1/2 transform -translate-x-1/2 
          ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs'} 
          font-bold ${config.textColor} whitespace-nowrap
        `}>
          {config.bottomText}
        </div>
        
        {/* Side accents */}
        <div className={`
          absolute left-2 top-1/2 transform -translate-y-1/2 
          ${config.textColor} 
          ${size === 'sm' ? 'text-xs' : 'text-sm'}
        `}>
          {config.accent}
        </div>
        <div className={`
          absolute right-2 top-1/2 transform -translate-y-1/2 
          ${config.textColor} 
          ${size === 'sm' ? 'text-xs' : 'text-sm'}
        `}>
          {config.accent}
        </div>
        
        {/* Distressed/weathered effect overlay */}
        <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none">
          <div className={`w-full h-full rounded-full border-2 ${config.borderColor} opacity-30`}></div>
        </div>
      </div>
    </div>
  );
} 
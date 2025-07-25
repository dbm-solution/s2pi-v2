import React from 'react';

interface ChevronDownProps {
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ className = "h-4 w-4" }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ChevronDown; 
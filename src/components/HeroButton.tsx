'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function HeroButton({ href, children }: HeroButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: 'inline-block',
        backgroundColor: isHovered ? '#3AAED8' : '#41BEF0',
        padding: '12px 28px',
        borderRadius: '6px',
        color: '#ffffff',
        fontWeight: 500,
        fontSize: '14px',
        textDecoration: 'none',
        letterSpacing: '0.03em',
        transition: 'background-color 0.2s',
        cursor: 'pointer'
      }}
    >
      {children}
    </Link>
  );
}

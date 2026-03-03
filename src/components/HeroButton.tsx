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
        backgroundColor: isHovered ? '#2A9AC4' : '#41BEF0',
        padding: '10px 32px',
        borderRadius: '10px',
        color: '#ffffff',
        fontWeight: 400,
        fontSize: '14px',
        textDecoration: 'none',
        letterSpacing: '0.08em',
        transition: 'background-color 0.2s',
        cursor: 'pointer'
      }}
    >
      <span style={{ 
        display: 'inline-block',
        transform: 'scaleY(1.2)',
        transformOrigin: 'center'
      }}>
        {children}
      </span>
    </Link>
  );
}


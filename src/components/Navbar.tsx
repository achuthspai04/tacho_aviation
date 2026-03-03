'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <nav style={{ 
        backgroundColor: '#00488C', 
        padding: '8px 24px',
        borderRadius: '14px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/tachologo.svg" 
              alt="Tacho Logo" 
              width={110} 
              height={32}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Navigation Links - Centered */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                style={{
                  color: pathname === link.href ? '#41BEF0' : '#ffffff',
                  fontWeight: 500,
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us Button */}
          <Link 
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              backgroundColor: isHovered ? '#3AAED8' : '#41BEF0',
              padding: '8px 20px',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div 
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/heroimg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.35)' 
      }} />
      
      {/* Floating Navbar */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingTop: '40px',
        paddingLeft: '48px',
        paddingRight: '48px'
      }}>
        <Navbar />
      </div>

      {/* Hero Content - Vertically Centered */}
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ paddingLeft: '200px' }}>
          <h1 style={{ 
            color: '#ffffff',
            fontSize: '3.5rem',
            fontWeight: 700,
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            Managing Assets<br />for you
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '1.125rem',
            marginBottom: '40px',
            lineHeight: 1.6,
            maxWidth: '450px'
          }}>
            Let us handle the logistics, so you can focus on<br />growing your business.
          </p>
          <div>
            <Link 
              href="/contact"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#41BEF0',
                padding: '14px 32px',
                borderRadius: '6px',
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '14px',
                textDecoration: 'none',
                letterSpacing: '0.05em'
              }}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

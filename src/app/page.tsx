import React from 'react';
import Navbar from '@/components/Navbar';
import HeroButton from '@/components/HeroButton';

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
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        pointerEvents: 'none'
      }} />
      
      {/* Floating Navbar */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        paddingTop: '40px',
        paddingLeft: '48px',
        paddingRight: '48px'
      }}>
        <Navbar />
      </div>

      {/* Hero Content - Vertically Centered, aligned with navbar */}
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          width: '100%',
          maxWidth: '1100px',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>
          <h1 style={{ 
            color: '#ffffff',
            fontSize: '3.25rem',
            fontWeight: 600,
            marginBottom: '20px',
            lineHeight: 1.15,
            letterSpacing: '-0.01em'
          }}>
            Managing Assets<br />for you
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1rem',
            marginBottom: '32px',
            lineHeight: 1.7,
            maxWidth: '400px'
          }}>
            Let us handle the logistics, so you can focus on<br />growing your business.
          </p>
          <div>
            <HeroButton href="/contact">
              Get a quote
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}

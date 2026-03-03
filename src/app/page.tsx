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
        overflow: 'hidden'
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/heroimg.png"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        pointerEvents: 'none',
        zIndex: 1
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

      {/* Hero Content - Positioned lower, aligned with navbar */}
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '260px'
      }}>
        <div
          className="lg:-translate-x-20"
          style={{ 
            width: '100%',
            maxWidth: '950px',
            paddingLeft: '24px',
            paddingRight: '24px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          }}
        >
          <h1 style={{ 
            color: '#ffffff',
            fontSize: '3.25rem',
            fontWeight: 600,
            marginBottom: '20px',
            lineHeight: 1.0,
            letterSpacing: '-0.01em',
            fontFamily: 'inherit'
          }}>
            Managing Assets<br />for you
          </h1>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1rem',
            marginBottom: '32px',
            lineHeight: 1.7,
            maxWidth: '400px',
            fontFamily: 'inherit'
          }}>
            Let us handle the logistics, so you can focus on<br className="hidden lg:block" /> growing your business.
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

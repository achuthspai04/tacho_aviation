import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/heroimg.png)' }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating Navbar */}
      <div className="relative z-10 pt-8 px-12">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center px-24 lg:px-32" style={{ height: 'calc(100vh - 140px)' }}>
        <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
          Managing Assets<br />for you
        </h1>
        <p className="text-white text-xl mb-8 leading-relaxed">
          Let us handle the logistics, so you can focus on<br />growing your business.
        </p>
        <div>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#41BEF0' }}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
}

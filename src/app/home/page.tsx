import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div 
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/heroimg.png)' }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating Navbar */}
      <div className="relative z-10 pt-4 px-4 sm:pt-6 sm:px-6 md:pt-8 md:px-12">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div 
        className="relative z-10 pt-12 sm:pt-0 sm:min-h-[calc(100vh-140px)] sm:flex sm:flex-col sm:justify-center"
      >
        <div style={{ marginLeft: '20px', marginRight: '20px' }} className="sm:ml-12 md:ml-24 lg:ml-32 sm:mr-12 md:mr-24 lg:mr-32">
          <h1 className="text-white text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 sm:leading-tight">
            Managing Assets<br />for you
          </h1>
          <p className="text-white text-[15px] leading-[1.6] sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-8 sm:leading-relaxed">
            Let us handle the logistics, so you can focus on<br className="hidden sm:block" />growing your business.
          </p>
          <div>
            <Link 
              href="/contact"
              className="inline-block px-5 py-2.5 sm:px-8 sm:py-3 rounded-md text-white font-medium text-[13px] sm:text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#41BEF0' }}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between" style={{ padding: '0 7.6923%' }}>
      <div className="flex-1 max-w-2xl fade-in">
        <div className="mb-8">
          <h1 className="display-huge mb-6">
            Digital Solutions That 
            <span style={{ color: 'var(--brand-primary)' }}> Transform</span> Your Business
          </h1>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            At 7EKMAWARE, we craft high-performance digital experiences that help businesses grow, 
            engage, and stand out in the modern world.
          </p>
          <div className="flex gap-4">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <div style={{ 
          width: "700px", 
          height: "700px", 
          overflow: "visible", 
          position: "relative"
        }}>
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2" style={{ borderColor: 'var(--brand-primary)' }}></div>
            </div>
          }>
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
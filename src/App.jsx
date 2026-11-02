import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Story from './components/Story.jsx';
import AnalyticsFeatures from './components/AnalyticsFeatures.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Skip to main content for accessibility */}
      <a 
        href="#dashboard" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-amber-500 text-black px-4 py-2 rounded-lg font-bold shadow-xl"
      >
        Skip to Interactive Dashboard
      </a>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>

      {/* Project Footer */}
      <Footer />
    </div>
  );
}

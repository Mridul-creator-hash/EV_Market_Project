import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  BarChart3, 
  BookOpen, 
  Layers, 
  Workflow, 
  Code2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Story', href: '#story', id: 'story' },
    { name: 'Analytics', href: '#analytics', id: 'analytics' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-amber-500/15 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            aria-label="EV Insights Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-5 h-5 text-black fill-black" />
              <div className="absolute inset-0 rounded-xl bg-amber-400/20 blur-[6px] -z-10 group-hover:blur-[10px] transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                EV <span className="text-amber-400">Insights</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Analytics
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                Market Performance &amp; Trends
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 relative ${
                    isActive 
                      ? 'text-amber-400 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#dashboard"
              onClick={(e) => handleLinkClick(e, '#dashboard')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Live Dashboard</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="#dashboard"
              onClick={(e) => handleLinkClick(e, '#dashboard')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-black bg-amber-500 hover:bg-amber-400"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Explore Dashboard</span>
            </a>
            <a
              href={TABLEAU_CONFIG.dashboard.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

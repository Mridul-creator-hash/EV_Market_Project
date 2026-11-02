import React from 'react';
import { 
  Zap, 
  ArrowUp, 
  ExternalLink, 
  BarChart3, 
  GitBranch, 
  ShieldCheck 
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Project Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500 text-black shadow-md shadow-amber-500/20">
                <Zap className="w-4 h-4 fill-black" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                EV <span className="text-amber-400">Insights</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-medium max-w-md">
              Electric Vehicle Market Performance &amp; Insights
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              An academic capstone analytics platform bridging interactive business intelligence 
              with modern web visualization. Powered by Tableau Public and React.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Tableau Workbook Author: {TABLEAU_CONFIG.dashboard.author}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home &amp; Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Project</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-amber-400 transition-colors">Executive Dashboard</a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">Tableau Market Story</a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-amber-400 transition-colors">Analytics Modules</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-amber-400 transition-colors">Methodology</a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-amber-400 transition-colors">Technologies Used</a>
              </li>
            </ul>
          </div>

          {/* External Links & Repository */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Project Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={TABLEAU_CONFIG.dashboard.directUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Tableau Public Dashboard</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            {/* Back to top button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-all"
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} EV Insights &bull; Electric Vehicle Market Performance &amp; Insights. All rights reserved.
          </div>
          <div>
            Built for GitHub Pages deployment with React &amp; Vite.
          </div>
        </div>

      </div>
    </footer>
  );
}

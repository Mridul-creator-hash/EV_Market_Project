import React from 'react';
import { 
  Zap, 
  BarChart3, 
  BookOpen, 
  ArrowRight, 
  BatteryCharging, 
  Gauge, 
  DollarSign, 
  Globe2, 
  Sparkles,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-grid-pattern bg-radial-glow"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-amber-600/15 via-orange-500/10 to-transparent blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-orange-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Project Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>College Capstone Project &bull; Data Analytics Showcase</span>
            </div>

            {/* Main Title & Full Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Electric Vehicle <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-400">
                  Market Performance
                </span>
                <span className="block text-slate-300 font-semibold text-2xl sm:text-3xl xl:text-4xl mt-1">
                  &amp; Insights
                </span>
              </h1>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              An executive-grade analytics platform dissecting global EV market dynamics. 
              Explore manufacturer competitiveness, battery chemistry advances, pricing-to-range 
              efficiency, and geographic adoption patterns through verified interactive Tableau visualizations.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#dashboard"
                onClick={(e) => scrollToSection(e, 'dashboard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#story"
                onClick={(e) => scrollToSection(e, 'story')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Explore Story</span>
              </a>
            </div>

            {/* Credibility / Technical Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  Tableau <span className="text-amber-400 text-sm">v3</span>
                </div>
                <div className="text-xs text-slate-400">Live Published Viz</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  100%
                </div>
                <div className="text-xs text-slate-400">Client-Side SPA</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  GitHub
                </div>
                <div className="text-xs text-slate-400">Pages Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: EV Analytics Telemetry UI Mockup (Pure CSS & SVG) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/30 to-orange-600/30 blur-lg -z-10" />

              {/* Main Analytics Telemetry Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6">
                
                {/* Header bar of simulated card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">ev_market_metrics.analytics</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Dataset Connected
                  </span>
                </div>

                {/* Simulated Telemetry Gauge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>SECTOR ADOPTION PULSE</span>
                    <span className="text-amber-400 font-semibold">SYNCHRONIZED</span>
                  </div>

                  {/* EV Schematic Illustration (Pure SVG) */}
                  <div className="relative bg-[#080d1a] border border-amber-500/20 rounded-xl p-4 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Focus Dimensions</span>
                        <h4 className="text-base font-bold text-white">Range, Battery &amp; Price Efficiency</h4>
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Gauge className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Stylized EV Vector Silhouette */}
                    <div className="my-3 flex justify-center">
                      <svg className="w-full max-w-[280px] h-24" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Underglow */}
                        <ellipse cx="160" cy="85" rx="130" ry="8" fill="url(#ev-glow)" />
                        {/* Car Body Outline */}
                        <path d="M30 72C30 72 45 68 70 68C90 68 110 50 140 40C170 30 210 32 240 45C260 54 280 62 290 70C295 74 290 76 280 76H40C32 76 30 72 30 72Z" fill="#131e33" stroke="#f59e0b" strokeWidth="2" />
                        {/* Cabin Glass */}
                        <path d="M125 43C145 35 175 35 200 45L228 58H100L125 43Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
                        {/* Wheels */}
                        <circle cx="80" cy="74" r="14" fill="#090d16" stroke="#f59e0b" strokeWidth="3" />
                        <circle cx="80" cy="74" r="5" fill="#f59e0b" />
                        <circle cx="240" cy="74" r="14" fill="#090d16" stroke="#f59e0b" strokeWidth="3" />
                        <circle cx="240" cy="74" r="5" fill="#f59e0b" />
                        {/* Energy Flow Lightning */}
                        <path d="M135 62L150 52H162L152 70H170" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <radialGradient id="ev-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 85) scale(130 8)">
                            <stop stopColor="#f59e0b" stopOpacity="0.4" />
                            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Progress bars inside card */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                          <span className="flex items-center gap-1">
                            <BatteryCharging className="w-3.5 h-3.5 text-amber-400" /> Battery
                          </span>
                          <span className="text-white font-mono">kWh / Pack</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1.5 rounded-full w-[78%]" />
                        </div>
                      </div>

                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Efficiency
                          </span>
                          <span className="text-white font-mono">Range vs Cost</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-1.5 rounded-full w-[85%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-features list */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Real-world Tableau Viz</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Multi-OEM Comparisons</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Cross-filtering Enabled</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Zero Backend Reliance</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

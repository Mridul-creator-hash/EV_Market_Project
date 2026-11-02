import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  AlertCircle, 
  CheckCircle, 
  Info,
  SlidersHorizontal,
  MousePointerClick
} from 'lucide-react';
import { TABLEAU_CONFIG, getTableauEmbedUrl } from '../config/tableau.js';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const containerRef = useRef(null);

  const directUrl = TABLEAU_CONFIG.dashboard.directUrl;
  const embedUrl = TABLEAU_CONFIG.dashboard.embedUrl;
  const canonicalEmbedUrl = getTableauEmbedUrl(embedUrl || directUrl);

  // Set timeout to clear loading indicator if iframe doesn't fire onLoad immediately
  useEffect(() => {
    setIsLoading(true);
    setLoadError(false);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, [refreshKey, useIframeFallback]);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (!isFullScreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section id="dashboard" className="py-24 relative bg-[#070b12] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Interactive BI Visualization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {TABLEAU_CONFIG.dashboard.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {TABLEAU_CONFIG.dashboard.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
              title="Refresh visualization"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Reload Viz</span>
            </button>

            <button
              onClick={toggleFullScreen}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
              title="Toggle Fullscreen"
            >
              {isFullScreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>

            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Dashboard Metadata & Helpful Navigation Tips */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Interactive Controls</div>
              <div className="text-xs font-semibold text-slate-200">Click headers &amp; legends to filter</div>
            </div>
          </div>

          <div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <MousePointerClick className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Granular Tooltips</div>
              <div className="text-xs font-semibold text-slate-200">Hover marks for exact specs &amp; stats</div>
            </div>
          </div>

          <div className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Source Verification</div>
              <div className="text-xs font-semibold text-slate-200">Tableau Public Verified Sheet</div>
            </div>
          </div>
        </div>

        {/* Embedded Dashboard Container */}
        <div 
          ref={containerRef}
          className={`relative rounded-2xl overflow-hidden border border-amber-500/30 bg-[#0d131f] shadow-2xl transition-all ${
            isFullScreen ? 'p-4 bg-black h-screen' : ''
          }`}
        >
          {/* Top subtle bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-slate-300">EVExecutiveDashboard (Tableau Public)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block">Author: {TABLEAU_CONFIG.dashboard.author}</span>
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
              >
                Direct Link <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0e17]/85 backdrop-blur-sm space-y-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
                <BarChart3 className="w-6 h-6 text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-semibold text-white">Connecting to Tableau Public...</p>
                <p className="text-xs text-slate-400">Loading interactive sheets and filters</p>
              </div>
            </div>
          )}

          {/* Error / Fallback Banner if sandbox or 3rd-party cookie blocks */}
          {loadError && (
            <div className="p-8 text-center space-y-4 bg-slate-900/95 border-b border-amber-500/30">
              <div className="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-400 mb-2">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">Browser Security Notice</h4>
              <p className="text-sm text-slate-300 max-w-xl mx-auto">
                Some privacy extensions or strict third-party cookie restrictions may prevent external Tableau iframes from rendering inline. You can open the live visualization directly on Tableau Public or switch to direct view mode.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href={directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-500 text-black font-semibold text-xs rounded-lg hover:bg-amber-400 inline-flex items-center gap-1.5"
                >
                  <span>Open on Tableau Public</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Tableau Web Component or iFrame */}
          <div className="w-full relative min-h-[640px] md:min-h-[820px] bg-[#0c121e]">
            <iframe
              key={`viz-${refreshKey}`}
              src={canonicalEmbedUrl}
              title="EV Executive Dashboard"
              className="w-full min-h-[640px] md:min-h-[820px] border-0"
              style={{ height: isFullScreen ? 'calc(100vh - 60px)' : TABLEAU_CONFIG.dashboard.defaultHeight }}
              allowFullScreen
              onLoad={() => {
                setIsLoading(false);
                setLoadError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
            />
          </div>

          {/* Footer inside viz container */}
          <div className="bg-[#090d16] border-t border-slate-800/80 px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Full interactive capabilities: tooltips, cross-filtering, and dynamic slicing enabled directly from Tableau Public.</span>
            </div>
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium shrink-0"
            >
              Open in new tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

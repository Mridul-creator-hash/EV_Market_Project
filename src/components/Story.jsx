import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Settings2, 
  Compass, 
  TrendingUp, 
  Cpu, 
  Battery, 
  DollarSign, 
  MapPin, 
  FileCode2, 
  Play, 
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { TABLEAU_CONFIG, getTableauEmbedUrl } from '../config/tableau.js';

export default function Story() {
  // Support both static configuration and interactive live URL override for demonstration
  const [customStoryUrl, setCustomStoryUrl] = useState('');
  const [activeStoryUrl, setActiveStoryUrl] = useState(TABLEAU_CONFIG.story.embedUrl || TABLEAU_CONFIG.story.directUrl || '');
  const [showConfigHelper, setShowConfigHelper] = useState(!activeStoryUrl);

  const isStoryConfigured = Boolean(activeStoryUrl && activeStoryUrl.trim().length > 0);
  const embedUrl = isStoryConfigured ? getTableauEmbedUrl(activeStoryUrl) : '';

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (customStoryUrl.trim()) {
      setActiveStoryUrl(customStoryUrl.trim());
    }
  };

  const handleResetUrl = () => {
    setActiveStoryUrl(TABLEAU_CONFIG.story.embedUrl || TABLEAU_CONFIG.story.directUrl || '');
    setCustomStoryUrl('');
  };

  // Structured Narrative Chapters:
  // Explicitly labeled as analytical storyline framework so users understand the conceptual narrative
  const storyChapters = [
    {
      chapter: '01',
      title: 'Accelerated Market Growth & Global Adoption',
      tag: 'Adoption Dynamics',
      icon: TrendingUp,
      overview: 'Analysis of year-over-year transition velocities across passenger and commercial segments.',
      insights: [
        'Shift from early-adopter niche to mainstream fleet volumes as infrastructure expands.',
        'Policy mandates, emission regulations, and purchase incentives propelling European and Asian markets.',
        'Exponential inflection points reached across key metropolitan geographic zones.'
      ],
      methodologyNote: 'Explanatory Storyline Dimension: Evaluates macro registration volume trajectory.'
    },
    {
      chapter: '02',
      title: 'Manufacturer Competitive Landscape & Share Transition',
      tag: 'OEM Rivalry',
      icon: Cpu,
      overview: 'Comparative positioning between dedicated EV pioneers and legacy automotive conglomerates.',
      insights: [
        'Pure EV specialists capitalising on software-defined architectures and dedicated ground-up platforms.',
        'Traditional OEMs accelerating multi-brand modular EV skateboard platform deployment.',
        'Supply chain integration strategies differentiating delivery lead times and profitability.'
      ],
      methodologyNote: 'Explanatory Storyline Dimension: Cross-examines manufacturer portfolio expansion.'
    },
    {
      chapter: '03',
      title: 'Battery Chemistry, Energy Density & Capacity Trends',
      tag: 'Powertrain Tech',
      icon: Battery,
      overview: 'Evolution of pack kilowatt-hours (kWh) and thermal management efficiency.',
      insights: [
        'Divergence between cost-effective LFP (Lithium Iron Phosphate) chemistry for standard ranges and NMC for premium high-density models.',
        'Gravimetric energy density gains allowing higher usable capacities with reduced vehicle curb weights.',
        'Thermal pre-conditioning optimizations lowering winter degradation penalties.'
      ],
      methodologyNote: 'Explanatory Storyline Dimension: Synthesizes battery capacity distributions.'
    },
    {
      chapter: '04',
      title: 'Price-to-Range Parity & Affordability Dynamics',
      tag: 'Economics & Value',
      icon: DollarSign,
      overview: 'The critical ratio of retail price (MSRP) to real-world certified driving range.',
      insights: [
        'Identification of the "sweet-spot" vehicle tier delivering over 250 miles of range under $40,000.',
        'Luxury segment diminishing returns: high incremental cost for marginal range extensions beyond 350 miles.',
        'Total Cost of Ownership (TCO) advantage widening over internal combustion equivalents despite higher upfront capital cost.'
      ],
      methodologyNote: 'Explanatory Storyline Dimension: Compares cost efficiency curves.'
    },
    {
      chapter: '05',
      title: 'Geographic Distribution & Charging Ecosystem Density',
      tag: 'Territorial Spread',
      icon: MapPin,
      overview: 'Regional adoption patterns correlated with fast-charging corridors and municipal policy.',
      insights: [
        'Pronounced clustering in regions with dense DC fast-charger deployment along highway arteries.',
        'Urban vs rural divide highlighting home-charging vs public depot dependency.',
        'Grid load distribution and smart time-of-use charging balancing localized grid strains.'
      ],
      methodologyNote: 'Explanatory Storyline Dimension: Examines territorial dispersion metrics.'
    }
  ];

  return (
    <section id="story" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tableau Story &amp; Market Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {TABLEAU_CONFIG.story.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A structured analytical narrative sequencing key chapters in the EV revolution: 
              from macroeconomic adoption tipping points to granular powertrain parity.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowConfigHelper(!showConfigHelper)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
            >
              <Settings2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{showConfigHelper ? 'Hide Story Config' : 'Configure Story URL'}</span>
            </button>

            {isStoryConfigured && (
              <a
                href={activeStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Open Story in Tableau</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Configuration Guide Banner (Visible when toggled or unconfigured) */}
        {showConfigHelper && (
          <div className="mb-10 glass-panel rounded-2xl p-6 border border-amber-500/30 bg-[#0e1626] space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Tableau Story URL Setup &amp; Preview</h4>
                  <p className="text-xs text-slate-300">
                    To embed your published Tableau Story, set <code className="text-amber-400 bg-slate-900 px-1.5 py-0.5 rounded font-mono">story.directUrl</code> in <code className="text-amber-300 font-mono">src/config/tableau.js</code>, or test any link live below.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Test Input Field */}
            <form onSubmit={handleApplyCustomUrl} className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <input
                type="url"
                value={customStoryUrl}
                onChange={(e) => setCustomStoryUrl(e.target.value)}
                placeholder="Paste Tableau Public Story URL (e.g. https://public.tableau.com/views/...)"
                className="flex-1 bg-slate-900/90 border border-slate-700 focus:border-amber-500 rounded-lg px-3.5 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Preview Story</span>
              </button>
              {activeStoryUrl !== TABLEAU_CONFIG.story.directUrl && (
                <button
                  type="button"
                  onClick={handleResetUrl}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                >
                  Reset
                </button>
              )}
            </form>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>We never guess or fabricate your Story URL. If empty, the storyline analysis below details the exact narrative sequence.</span>
            </div>
          </div>
        )}

        {/* Live Tableau Story Embed (If configured or previewed) */}
        {isStoryConfigured ? (
          <div className="mb-14 rounded-2xl overflow-hidden border border-amber-500/30 bg-[#0d131f] shadow-2xl">
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-slate-300">Live Tableau Story Embedded</span>
              </div>
              <a
                href={activeStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
              >
                Open in Full Window <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={embedUrl}
              title="Tableau Story Visualization"
              className="w-full min-h-[640px] md:min-h-[780px] border-0"
              allowFullScreen
            />
          </div>
        ) : (
          /* Notice banner explaining that story chapters are outlined below */
          <div className="mb-10 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Structured Narrative Framework:</strong> The 5 chapters below outline the core analytical trajectory of the EV market analysis.
              </div>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium shrink-0">
              Story Mode Active
            </span>
          </div>
        )}

        {/* Narrative Insight Chapters Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Key Analytical Storyline Chapters</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">5 Sequenced Perspectives</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyChapters.map((story, idx) => {
              const IconComp = story.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        CHAPTER {story.chapter}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {story.tag}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                        {story.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {story.overview}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Core Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {story.insights.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
                    {story.methodologyNote}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

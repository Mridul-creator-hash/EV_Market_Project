import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  PieChart, 
  Target, 
  TrendingUp, 
  Cpu, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'What the Project Analyzes',
      description: 'The platform evaluates multi-dimensional performance metrics across modern electric vehicles: retail pricing distributions, battery pack capacities (kWh), EPA/WLTP driving ranges, manufacturer output volumes, and territorial market penetration across segments.',
      highlights: ['Price vs. Range trade-offs', 'OEM market share dynamics', 'Powertrain efficiency tiers']
    },
    {
      icon: Lightbulb,
      title: 'Why EV Analysis Matters',
      description: 'The global automotive industry is undergoing an unprecedented transition from internal combustion engines to electrified mobility. Understanding consumer adoption drivers, battery cost per kilowatt-hour, and manufacturer competitive positions is critical for industry strategy, sustainability goals, and market forecasting.',
      highlights: ['Transition economics', 'Charging infrastructure demands', 'Supply chain & battery scaling']
    },
    {
      icon: PieChart,
      title: 'The Purpose of Data Visualization',
      description: 'Raw multidimensional vehicle specifications can be opaque and overwhelming. By transforming complex tabular datasets into synchronized Tableau visual models, trends, trade-offs, and cluster anomalies become immediately intuitive for executive and technical audiences alike.',
      highlights: ['Interactive dimensional filtering', 'Instant visual pattern detection', 'Cross-segment comparison']
    },
    {
      icon: Compass,
      title: 'How It Helps Stakeholders',
      description: 'Users can interactively interrogate the data: isolate budget vs luxury tiers, contrast legacy automaker trajectories against pure EV innovators, assess real-world range capability relative to vehicle weight, and discover untapped market segments.',
      highlights: ['Self-directed data exploration', 'Evidence-based market evaluation', 'Zero-friction web accessibility']
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic &amp; Research Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">EV Insights</span> Project
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Developed as a comprehensive college analytics study, this project bridges business intelligence, 
            data engineering, and modern web delivery to present clear, empirical market patterns.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="group glass-panel rounded-2xl p-7 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-highlights */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Key Dimensions:</span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.highlights.map((item, hIdx) => (
                      <span 
                        key={hIdx} 
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/70 px-2.5 py-1 rounded-md border border-slate-700/60"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology & Data Integrity Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20 bg-gradient-to-r from-amber-950/20 via-slate-900/60 to-slate-900/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" />
                Designed for Transparency and Rigor
              </h4>
              <p className="text-sm text-slate-300">
                To guarantee academic integrity, all visualizations are generated from verified datasets and hosted on official Tableau Public infrastructure. No arbitrary numbers or simulated mock charts are presented as factual market metrics.
              </p>
            </div>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-all shrink-0"
            >
              <span>View Executive Viz</span>
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

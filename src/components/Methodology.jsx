import React, { useState } from 'react';
import { 
  Workflow, 
  Database, 
  Sparkles, 
  Search, 
  BarChart, 
  LayoutDashboard, 
  BookOpen, 
  Globe, 
  CheckCircle,
  FileCheck,
  ChevronDown
} from 'lucide-react';

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Data Collection',
      icon: Database,
      tag: 'Ingestion Phase',
      summary: 'Aggregation of electric vehicle technical specifications, manufacturer registrations, and pricing registries.',
      details: 'Identified structured sources covering battery capacities (kWh), EPA/WLTP estimated ranges, model years, base MSRP figures, powertrain configurations (single/dual motor), and regional registration statistics.',
      deliverables: 'Raw consolidated dataset capturing multidimensional EV parameters.'
    },
    {
      number: '02',
      title: 'Data Preparation & Cleaning',
      icon: Sparkles,
      tag: 'Sanitization Phase',
      summary: 'Data hygiene, outlier detection, schema harmonization, and missing value imputation.',
      details: 'Filtered duplicate entries, converted disparate range units (miles vs kilometers) into standardized metrics, validated battery usable versus nominal capacity fields, and categorized vehicles into distinct market classes (Sedan, SUV, Truck, Commercial).',
      deliverables: 'Cleaned, structured data model with normalized numeric and categorical fields.'
    },
    {
      number: '03',
      title: 'Exploratory Data Analysis (EDA)',
      icon: Search,
      tag: 'Discovery Phase',
      summary: 'Statistical profiling, bivariate correlations, and trend identification.',
      details: 'Executed statistical distribution analyses to uncover correlation coefficients between battery size (kWh) and real-world range, mapped price elasticity across segments, and identified OEM distribution clusters.',
      deliverables: 'Statistical summaries, correlation matrices, and analytical hypothesis formulation.'
    },
    {
      number: '04',
      title: 'Data Visualization Design',
      icon: BarChart,
      tag: 'Visual Encoding',
      summary: 'Crafting expressive charts, intuitive color encodings, and accessible visual representations.',
      details: 'Selected scatter plots for price-to-range correlation, bar charts for manufacturer volume ranking, geographical heatmaps for territory distribution, and dual-axis plots for efficiency benchmarking. Enforced high-contrast dark themes for visual accessibility.',
      deliverables: 'Visual chart prototypes with consistent color scales and legible typography.'
    },
    {
      number: '05',
      title: 'Dashboard Development in Tableau',
      icon: LayoutDashboard,
      tag: 'BI Implementation',
      summary: 'Building the interactive Executive Dashboard published to Tableau Public.',
      details: 'Assembled synchronized visual sheets into a unified executive canvas. Added dynamic parameter controls, quick filters for manufacturer, model year, and price range, configured hover tooltips, and tested responsive layouts.',
      deliverables: 'Published and verified EV Executive Dashboard on Tableau Public.'
    },
    {
      number: '06',
      title: 'Story Creation & Narrative Sequencing',
      icon: BookOpen,
      tag: 'Storytelling Phase',
      summary: 'Drafting structured story points that guide stakeholders through findings in a logical sequence.',
      details: 'Organized findings into five distinct narrative arcs: global market adoption tipping points, manufacturer competitive dynamics, battery engineering advancements, price parity breakthroughs, and geographic infrastructure density.',
      deliverables: 'Tableau Story framework articulating key analytical milestones.'
    },
    {
      number: '07',
      title: 'Web Integration & Architecture',
      icon: Globe,
      tag: 'Full-Stack Delivery',
      summary: 'Engineering a high-performance, client-side React SPA with zero server dependencies.',
      details: 'Built with React 19 and Vite using Tailwind CSS. Integrated Tableau Embedding API v3 and responsive iframe fallback containers. Configured base path for GitHub Pages hosting without requiring paid third-party hosting.',
      deliverables: 'Production-ready React application ready for GitHub Pages deployment.'
    },
    {
      number: '08',
      title: 'Testing & Documentation',
      icon: FileCheck,
      tag: 'Verification Phase',
      summary: 'Rigorous cross-device testing, accessibility audits, and comprehensive GitHub documentation.',
      details: 'Verified desktop and mobile viewports, tested Tableau embed responsive resizing, created automated GitHub Actions CI/CD workflow, and authored end-to-end README documentation for reproducible evaluation.',
      deliverables: 'Automated GitHub Actions deploy workflow and clear deployment guide.'
    }
  ];

  return (
    <section id="methodology" className="py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Workflow className="w-3.5 h-3.5" />
            <span>Project Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Methodology &amp; Workflow
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            The project followed a disciplined eight-stage analytical engineering pipeline, 
            progressing systematically from initial raw data ingestion through to automated cloud deployment.
          </p>
        </div>

        {/* Step Selector & Details View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Steps List */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.number}
                    </span>
                    <div className="font-semibold text-sm truncate">
                      {step.title}
                    </div>
                  </div>
                  <IconComp className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card for Active Step */}
          <div className="lg:col-span-7">
            {(() => {
              const current = steps[activeStep];
              const IconComp = current.icon;
              return (
                <div className="glass-panel rounded-2xl p-7 border border-amber-500/30 shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-400">STAGE {current.number} OF 08</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="text-xs text-slate-400 font-medium">{current.tag}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="py-5 space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {current.title}
                    </h3>
                    <p className="text-sm font-medium text-amber-300/90 leading-relaxed">
                      {current.summary}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Operational Execution
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {current.details}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Key Deliverable</span>
                      </div>
                      <p className="text-xs text-slate-300 pl-6">
                        {current.deliverables}
                      </p>
                    </div>
                  </div>

                  {/* Navigation between steps */}
                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      &larr; Previous Stage
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      {activeStep + 1} / {steps.length}
                    </span>
                    <button
                      type="button"
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-black bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Next Stage &rarr;
                    </button>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}

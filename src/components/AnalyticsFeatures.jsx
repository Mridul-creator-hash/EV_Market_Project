import React from 'react';
import { 
  Building2, 
  DollarSign, 
  Globe2, 
  Battery, 
  Gauge, 
  Boxes, 
  Zap, 
  ArrowUpRight, 
  Filter, 
  HelpCircle,
  BarChart2
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function AnalyticsFeatures() {
  const features = [
    {
      id: 'mfg-sales',
      title: 'Manufacturer Sales Analysis',
      icon: Building2,
      tag: 'Volume & Share',
      purpose: 'Examines relative market share, adoption momentum, and delivery volumes across key automotive OEMs.',
      questions: [
        'Which manufacturers dominate unit sales across major regional corridors?',
        'How does legacy automaker transition speed compare with EV-native brands?',
        'What is the year-over-year production ramp rate across commercial vs passenger lines?'
      ],
      tableauAction: 'Filter by "Manufacturer" in the Executive Dashboard',
      metrics: ['Unit Deliveries', 'Market Penetration %', 'Segment Share']
    },
    {
      id: 'ev-pricing',
      title: 'EV Pricing Comparison',
      icon: DollarSign,
      tag: 'Cost & Valuation',
      purpose: 'Analyzes base MSRP distributions, trim-level step-ups, and sticker price brackets across vehicle classifications.',
      questions: [
        'What is the median retail price point across compact, SUV, and premium classes?',
        'Where does the consumer price threshold exist before range upgrades show diminishing returns?',
        'How do tax credits and government incentives shift effective transaction prices?'
      ],
      tableauAction: 'Examine the Price Distribution scatter plot and filter by MSRP bracket',
      metrics: ['MSRP ($)', 'Trim Delta', 'Incentive Adjusted Price']
    },
    {
      id: 'country-distribution',
      title: 'Country-wise EV Distribution',
      icon: Globe2,
      tag: 'Geographic Density',
      purpose: 'Visualizes geographic adoption density, regional registration concentrations, and territorial expansion.',
      questions: [
        'Which states and territories lead in total battery-electric vehicle density?',
        'What correlations exist between regional charging infrastructure density and adoption?',
        'Where are emerging secondary markets accelerating fastest?'
      ],
      tableauAction: 'Interact with the geographic map layer in Tableau Public',
      metrics: ['Registrations by Region', 'Per-Capita EV Density', 'Charging Point Ratio']
    },
    {
      id: 'battery-capacity',
      title: 'Battery Capacity Analysis',
      icon: Battery,
      tag: 'Energy Storage',
      purpose: 'Evaluates pack architectures, usable kilowatt-hours (kWh), and battery chemistry distributions.',
      questions: [
        'What is the prevailing battery capacity for modern long-range models (60-100 kWh)?',
        'How do chemistry selections (LFP vs NMC) impact weight and price tiers?',
        'What is the average pack degradation timeline under varying fast-charge duty cycles?'
      ],
      tableauAction: 'Slice by Battery Capacity (kWh) bin in the primary dashboard filter',
      metrics: ['Capacity (kWh)', 'Pack Density', 'Chemistry Type']
    },
    {
      id: 'driving-range',
      title: 'Driving Range Comparison',
      icon: Gauge,
      tag: 'Range Capability',
      purpose: 'Benchmarking EPA and WLTP certified driving range across model years, platforms, and drive types (AWD vs RWD).',
      questions: [
        'Which models achieve true 300+ mile interstate highway ranges?',
        'How does ambient temperature and aerodynamics affect advertised vs real-world range?',
        'How fast is the standard baseline range shifting upwards each model generation?'
      ],
      tableauAction: 'Inspect the Range vs Battery Capacity scatter matrix',
      metrics: ['Certified Miles / km', 'Real-world Efficiency', 'Drive Configuration']
    },
    {
      id: 'mfg-distribution',
      title: 'Manufacturer Distribution',
      icon: Boxes,
      tag: 'Portfolio Breadth',
      purpose: 'Studies the breadth of electric vehicle model lines offered by each automaker and platform reuse.',
      questions: [
        'How many unique EV models does each legacy OEM field versus dedicated startups?',
        'Which manufacturers deploy shared skateboard architectures across multiple nameplates?',
        'What is the diversification across sedan, crossover, pickup, and cargo segments?'
      ],
      tableauAction: 'Select individual OEMs to highlight model lineup distribution',
      metrics: ['Active Nameplates', 'Platform Sharing Rate', 'Segment Coverage']
    },
    {
      id: 'ev-efficiency',
      title: 'EV Efficiency Analysis',
      icon: Zap,
      tag: 'Powertrain Economy',
      purpose: 'Calculates energy economy in kWh consumed per 100 miles / MPGe relative to vehicle curb weight and frontal area.',
      questions: [
        'Which vehicles achieve maximum distance per kilowatt-hour of stored energy?',
        'How much does curb weight penalize highway driving efficiency?',
        'What powertrain inverter and motor topologies demonstrate superior thermal efficiency?'
      ],
      tableauAction: 'Review the Efficiency (mi/kWh) benchmarks on the dashboard summary',
      metrics: ['kWh / 100 mi', 'MPGe Equivalent', 'Aerodynamic Cd x Area']
    }
  ];

  const scrollToDashboard = (e) => {
    e.preventDefault();
    const el = document.getElementById('dashboard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="analytics" className="py-24 relative bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Analytical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Analytics Features
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            The study investigates seven critical facets of electric mobility. 
            Each analytical module is engineered to address key engineering, economic, and strategic questions.
          </p>
        </div>

        {/* Feature Cards Grid (7 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={feat.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title & Purpose */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {feat.purpose}
                    </p>
                  </div>

                  {/* Questions Answered */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-3 h-3 text-amber-400" /> Key Questions Evaluated:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {feat.questions.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">&bull;</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measured Metrics */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {feat.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {m}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Footer: Tableau Exploration Hint & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                    <Filter className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{feat.tableauAction}</span>
                  </div>
                  <a
                    href="#dashboard"
                    onClick={scrollToDashboard}
                    className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black transition-all shrink-0"
                    title="View in Dashboard"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Tableau Link Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Note: All quantitative correlations and slice-and-dice queries are calculated live via the interactive Tableau Public engine above.
          </p>
        </div>

      </div>
    </section>
  );
}

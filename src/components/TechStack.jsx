import React from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  FileCode, 
  Palette, 
  BarChart3, 
  GitBranch, 
  Globe, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: 'React 19',
      category: 'Frontend Framework',
      description: 'Declarative component-based UI architecture enabling reactive state management and modular page composition.',
      role: 'Core application structure and lifecycle management',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      name: 'Vite 8',
      category: 'Build Tooling & Bundler',
      description: 'Ultra-fast Next-Gen frontend tooling providing instant ESM development server and optimized rollup production bundles.',
      role: 'Sub-second dev server, asset optimization, and static build generation',
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Programming Language',
      description: 'Modern, clean JavaScript implementing asynchronous routines, DOM event handlers, and Tableau URL transformation helpers.',
      role: 'All component logic, responsive interactions, and client-side data filtering',
      badgeColor: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
    },
    {
      name: 'HTML5',
      category: 'Semantic Markup',
      description: 'Semantic structure, accessible landmarks, native responsive container elements, and social OpenGraph metadata.',
      role: 'Foundational accessibility (a11y) and SEO page layout',
      badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10'
    },
    {
      name: 'CSS3 & Tailwind CSS',
      category: 'Styling & Design System',
      description: 'Utility-first modern styling system powering the sleek dark theme, glassmorphic panels, and amber glow accents.',
      role: 'Responsive layouts, typography hierarchy, and smooth CSS transitions',
      badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10'
    },
    {
      name: 'Tableau Public',
      category: 'Business Intelligence & Viz',
      description: 'Industry-standard analytics platform rendering the interactive multi-sheet executive dashboard and story.',
      role: 'Interactive data visualization, cross-filtering, and dynamic tooltips',
      badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      name: 'GitHub',
      category: 'Version Control & CI/CD',
      description: 'Centralized git repository hosting source code, change tracking, and automated deployment pipelines.',
      role: 'Source management, collaboration, and continuous deployment triggers',
      badgeColor: 'border-slate-400/30 text-slate-300 bg-slate-500/10'
    },
    {
      name: 'GitHub Pages',
      category: 'Production Hosting',
      description: '100% serverless, zero-maintenance global static CDN hosting the complete compiled application with zero paid services.',
      role: 'Global public website distribution via GitHub Actions automation',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-[#070b12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>Architecture &amp; Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies Used
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Engineered exclusively with verified, lightweight modern web technologies. 
            No unnecessary server runtime, no third-party database bills, and zero external hosting dependencies.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${tech.badgeColor}`}>
                    {tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{tech.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Zero-Overhead Guarantee Card */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-emerald-500/20 bg-emerald-950/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Serverless &amp; Free Tier Sustainable</h4>
              <p className="text-xs text-slate-300">
                This architecture executes entirely client-side. It will remain permanently online on GitHub Pages without expiring trials, server sleep states, or compute costs.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
            Zero Backend Required
          </span>
        </div>

      </div>
    </section>
  );
}

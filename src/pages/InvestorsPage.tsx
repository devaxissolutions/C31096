import { motion } from 'framer-motion';
import { InvestorsSection } from '../components/common/InvestorsSection';
import { TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';

export function InvestorsPage() {
  const investorStats = [
    {
      icon: DollarSign,
      value: '₹2,450 Cr',
      label: 'Annual Revenue',
    },
    {
      icon: PieChart,
      value: '24.5%',
      label: 'EBITDA Margin',
    },
    {
      icon: TrendingUp,
      value: '+18%',
      label: 'YoY Growth',
    },
    {
      icon: BarChart3,
      value: '₹8,750 Cr',
      label: 'Market Cap',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="investors-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#investors-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Investor Relations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              For Investors
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Delivering sustainable growth through pharmaceutical excellence, operational efficiency, 
              and strategic market expansion with transparent financial reporting.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {investorStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Icon size={28} className="text-white mx-auto mb-3" />
                  <div className="text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Investor Relations Section */}
      <InvestorsSection />

      {/* Investment Highlights */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-6">
              Investment Highlights
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
              Key factors that make EDIF Pharma an attractive investment opportunity 
              in the pharmaceutical sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Strong Financial Performance',
                description: 'Consistent revenue growth with healthy EBITDA margins and strong cash generation',
              },
              {
                title: 'Diverse Product Portfolio',
                description: '150+ products across 8 therapeutic areas with balanced revenue mix',
              },
              {
                title: 'Global Market Presence',
                description: 'Export to 45+ countries with strategic focus on emerging markets',
              },
              {
                title: 'WHO-GMP Certified Facilities',
                description: '3 state-of-the-art manufacturing units with international regulatory approvals',
              },
              {
                title: 'Robust R&D Pipeline',
                description: '25+ projects in various stages with focus on biosimilars and novel formulations',
              },
              {
                title: 'Experienced Management',
                description: 'Proven leadership team with deep pharmaceutical industry expertise',
              },
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border-color)] hover:border-[var(--brand-blue)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{highlight.title}</h3>
                <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              ESG Commitment
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              We are committed to environmental sustainability, social responsibility, 
              and strong corporate governance practices.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Environmental',
                  points: ['Carbon-neutral operations', 'Sustainable manufacturing', 'Waste reduction programs'],
                },
                {
                  title: 'Social',
                  points: ['Employee welfare programs', 'Community healthcare initiatives', 'Patient access programs'],
                },
                {
                  title: 'Governance',
                  points: ['Transparent reporting', 'Ethical business practices', 'Board diversity & independence'],
                },
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-2xl mb-4">{pillar.title}</h3>
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="text-white/80 text-sm flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

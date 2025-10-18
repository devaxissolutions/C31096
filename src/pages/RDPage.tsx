import { motion } from 'framer-motion';
import { RDPipeline } from '../components/common/RDPipeline';
import { Microscope, FlaskConical, Users, Award, TrendingUp, Target } from 'lucide-react';

export function RDPage() {
  const rdStats = [
    {
      icon: FlaskConical,
      value: '25+',
      label: 'Active Projects',
    },
    {
      icon: Users,
      value: '80+',
      label: 'R&D Scientists',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Patents Filed',
    },
    {
      icon: TrendingUp,
      value: '12%',
      label: 'Revenue in R&D',
    },
  ];

  const focusAreas = [
    {
      icon: Target,
      title: 'Novel Drug Formulations',
      description: 'Developing innovative formulations for improved drug delivery and patient compliance',
    },
    {
      icon: Microscope,
      title: 'Biosimilars Development',
      description: 'Research and development of biosimilar products for oncology and autoimmune diseases',
    },
    {
      icon: FlaskConical,
      title: 'Process Optimization',
      description: 'Continuous improvement of manufacturing processes for efficiency and sustainability',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rd-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rd-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Innovation & Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Research & Development
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advancing pharmaceutical science through innovative research, clinical development, 
              and cutting-edge technology to improve patient outcomes globally.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {rdStats.map((stat, index) => {
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

      {/* Pipeline Section */}
      <RDPipeline />

      {/* Focus Areas */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-6">
              Research Focus Areas
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
              Our R&D initiatives target unmet medical needs and focus on therapeutic areas 
              with significant patient impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border-color)] hover:border-[var(--brand-blue)] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-14 h-14 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[var(--brand-blue)]" />
                  </div>
                  <h3 className="text-xl text-[var(--text-900)] mb-3">{area.title}</h3>
                  <p className="text-[var(--text-900)] opacity-70 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Collaborative Research
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              We partner with leading academic institutions, research organizations, and pharmaceutical 
              companies to accelerate innovation and bring new therapies to patients faster.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { number: '15+', label: 'Academic Partnerships' },
                { number: '8', label: 'Industry Collaborations' },
                { number: '20+', label: 'Clinical Trial Sites' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-4xl mb-2">{item.number}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

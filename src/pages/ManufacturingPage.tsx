import { motion } from 'framer-motion';
import { Facilities } from '../components/common/Facilities';
import { CertificationsShowcase } from '../components/common/CertificationsShowcase';
import { ManufacturingSnapshot } from '../components/common/ManufacturingSnapshot';
import { Factory, ShieldCheck, Zap, Award } from 'lucide-react';

export function ManufacturingPage() {
  const manufacturingStats = [
    {
      icon: Factory,
      value: '3',
      label: 'Manufacturing Units',
    },
    {
      icon: ShieldCheck,
      value: 'WHO-GMP',
      label: 'Certified Facilities',
    },
    {
      icon: Zap,
      value: '900M+',
      label: 'Units Annual Capacity',
    },
    {
      icon: Award,
      value: '10+',
      label: 'International Approvals',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="manufacturing-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#manufacturing-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Manufacturing Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Manufacturing & Quality
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art WHO-GMP certified facilities equipped with cutting-edge technology 
              and rigorous quality control systems ensuring pharmaceutical excellence.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {manufacturingStats.map((stat, index) => {
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

      {/* Manufacturing Snapshot */}
      <ManufacturingSnapshot />

      {/* Facilities Section */}
      <Facilities />

      {/* Certifications Section */}
      <CertificationsShowcase />

      {/* Quality Commitment */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-6">
              Quality Assurance System
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive quality management system ensures every product meets the highest 
              international pharmaceutical standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Raw Material Testing',
                description: 'Rigorous testing of all incoming materials against specifications',
              },
              {
                title: 'In-Process Controls',
                description: 'Continuous monitoring at critical manufacturing stages',
              },
              {
                title: 'Finished Product Testing',
                description: 'Comprehensive testing before product release',
              },
              {
                title: 'Stability Studies',
                description: 'Long-term stability monitoring per ICH guidelines',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[var(--surface)] p-6 rounded-xl border border-[var(--border-color)] hover:border-[var(--brand-blue)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck size={24} className="text-[var(--brand-blue)]" />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Advanced Manufacturing Technology
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              We leverage Industry 4.0 technologies and automation to ensure precision, 
              consistency, and efficiency in pharmaceutical manufacturing.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Automated Systems',
                  description: 'High-speed automated production lines with real-time monitoring',
                },
                {
                  title: 'Data Analytics',
                  description: 'Advanced analytics for process optimization and quality prediction',
                },
                {
                  title: 'Environmental Control',
                  description: 'Sophisticated HVAC and clean room systems maintaining GMP standards',
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-xl mb-3">{tech.title}</h3>
                  <p className="text-white/80 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { Shield, Award, CheckCircle2, FileCheck, Building2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function CertificationsShowcase() {
  const certifications = [
    {
      icon: Shield,
      name: 'WHO-GMP',
      issuer: 'World Health Organization',
      year: '2023',
      description: 'Good Manufacturing Practice certification',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      name: 'ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2023',
      description: 'Quality Management Systems',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileCheck,
      name: 'ISO 14001:2015',
      issuer: 'International Organization for Standardization',
      year: '2023',
      description: 'Environmental Management',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Building2,
      name: 'OHSAS 18001',
      issuer: 'Occupational Health and Safety',
      year: '2022',
      description: 'Workplace Safety Standards',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: CheckCircle2,
      name: 'GMP+',
      issuer: 'European Union Standards',
      year: '2023',
      description: 'Enhanced Manufacturing Practices',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Globe,
      name: 'FDA Registration',
      issuer: 'US Food and Drug Administration',
      year: '2022',
      description: 'US Market Compliance',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Quality & Compliance</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              Certified for Excellence
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Our commitment to quality is validated by international certifications 
              and rigorous compliance with global pharmaceutical standards.
            </p>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon Badge */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg text-[var(--text-900)]">{cert.name}</h3>
                    <span className="text-xs text-[var(--brand-blue)] bg-[var(--brand-blue)]/10 px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-900)] opacity-60">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-[var(--text-900)] opacity-50 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)]">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="text-xs text-[var(--text-900)] opacity-60">
                    Verified & Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Metrics */}
        <motion.div
          className="bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[var(--brand-blue)] mb-2">100%</div>
              <div className="text-sm text-[var(--text-900)] opacity-60">Batch Testing</div>
            </div>
            <div>
              <div className="text-4xl text-[var(--brand-blue)] mb-2">99.8%</div>
              <div className="text-sm text-[var(--text-900)] opacity-60">Quality Score</div>
            </div>
            <div>
              <div className="text-4xl text-[var(--brand-blue)] mb-2">24/7</div>
              <div className="text-sm text-[var(--text-900)] opacity-60">QC Monitoring</div>
            </div>
            <div>
              <div className="text-4xl text-[var(--brand-blue)] mb-2">Zero</div>
              <div className="text-sm text-[var(--text-900)] opacity-60">Recalls (2023)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

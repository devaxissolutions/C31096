import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, FileCheck, AlertTriangle, Download } from 'lucide-react';

export function QualityCompliancePage() {
  const certifications = [
    {
      title: 'WHO-GMP Certified',
      authority: 'World Health Organization',
      description: 'Full compliance with WHO Good Manufacturing Practices for pharmaceutical products',
      validUntil: '2026'
    },
    {
      title: 'ISO 9001:2015',
      authority: 'International Organization for Standardization',
      description: 'Quality management systems certification',
      validUntil: '2026'
    },
    {
      title: 'ISO 13485:2016',
      authority: 'International Organization for Standardization',
      description: 'Medical devices quality management systems',
      validUntil: '2025'
    },
    {
      title: 'FDA Registration',
      authority: 'U.S. Food and Drug Administration',
      description: 'Registered manufacturing facilities with FDA',
      validUntil: 'Current'
    },
    {
      title: 'EMA GMP Compliance',
      authority: 'European Medicines Agency',
      description: 'EU Good Manufacturing Practice certification',
      validUntil: '2026'
    },
    {
      title: 'COPP Certificates',
      authority: 'Multiple Health Authorities',
      description: 'Certificates of Pharmaceutical Product for exports',
      validUntil: 'Ongoing'
    }
  ];

  const qualityPillars = [
    {
      icon: Shield,
      title: 'Patient Safety First',
      description: 'Every decision prioritizes patient safety and therapeutic efficacy. Rigorous quality controls at every stage.',
      metrics: ['Zero tolerance for quality deviations', '100% batch testing', 'Continuous monitoring']
    },
    {
      icon: Award,
      title: 'Regulatory Excellence',
      description: 'Proactive compliance with global regulatory standards. Regular audits and inspections passed with zero major findings.',
      metrics: ['50+ successful regulatory inspections', '30+ country registrations', 'Real-time regulatory tracking']
    },
    {
      icon: CheckCircle,
      title: 'Quality by Design',
      description: 'Built-in quality from product development through manufacturing. Science-based approach to process optimization.',
      metrics: ['Risk-based quality systems', 'Validated processes', 'Continuous improvement']
    },
    {
      icon: FileCheck,
      title: 'Documentation Integrity',
      description: 'Complete traceability and documentation for every batch. Electronic systems with audit trails and data integrity controls.',
      metrics: ['21 CFR Part 11 compliance', 'Electronic batch records', 'Complete chain of custody']
    }
  ];

  const documents = [
    { title: 'Quality Policy Statement', size: '245 KB', type: 'PDF' },
    { title: 'WHO-GMP Certificate', size: '1.2 MB', type: 'PDF' },
    { title: 'ISO 9001 Certificate', size: '890 KB', type: 'PDF' },
    { title: 'Environmental Health & Safety Policy', size: '567 KB', type: 'PDF' },
    { title: 'Pharmacovigilance System Master File', size: '3.4 MB', type: 'PDF' },
    { title: 'Quality Management Manual (Summary)', size: '2.1 MB', type: 'PDF' }
  ];

  const complianceAreas = [
    {
      area: 'Manufacturing',
      items: [
        'cGMP compliance for all production facilities',
        'Validated equipment and processes',
        'Environmental monitoring programs',
        'Personnel training and qualification',
        'Cleanroom classifications and monitoring'
      ]
    },
    {
      area: 'Quality Control',
      items: [
        'State-of-the-art analytical laboratories',
        'Method validation per ICH guidelines',
        'Stability testing programs',
        'Reference standards management',
        'Out-of-specification investigations'
      ]
    },
    {
      area: 'Supply Chain',
      items: [
        'Qualified supplier program',
        'Raw material testing and release',
        'Cold chain management',
        'Serialization and track-and-trace',
        'Counterfeit prevention measures'
      ]
    },
    {
      area: 'Pharmacovigilance',
      items: [
        '24/7 adverse event reporting',
        'Signal detection and risk management',
        'Periodic safety update reports',
        'Post-marketing surveillance',
        'Regulatory authority cooperation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">QUALITY ASSURANCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Quality & Compliance
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Uncompromising commitment to pharmaceutical quality, regulatory compliance, and patient safety. 
              Our quality systems meet and exceed international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Pillars of Quality Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[var(--border-color)] bg-[var(--surface)] p-8"
              >
                <div className="w-14 h-14 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                  <pillar.icon className="text-[var(--brand-blue)]" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl text-[var(--text-900)] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <CheckCircle size={16} strokeWidth={2} className="text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Global Regulatory Approvals
            </h2>
            <p className="text-lg text-[var(--text-900)]/60">
              Certified and approved by leading health authorities worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-700 border border-green-200">
                    Valid {cert.validUntil}
                  </span>
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{cert.title}</h3>
                <p className="text-sm text-[var(--brand-blue)] mb-3">{cert.authority}</p>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">COMPLIANCE FRAMEWORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[var(--border-color)] bg-[var(--surface)] p-8"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-6">{area.area}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-900)]/70">
                      <CheckCircle size={16} strokeWidth={2} className="text-[var(--brand-blue)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">DOWNLOADS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Quality Documentation
            </h2>
            <p className="text-lg text-[var(--text-900)]/60">
              Access our quality policies, certificates, and compliance documents
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6 flex items-center justify-between hover:border-[var(--brand-blue)] transition-colors duration-150 group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center">
                    <FileCheck className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--text-900)] mb-1 group-hover:text-[var(--brand-blue)] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-[var(--text-900)]/60">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[var(--border-color)] hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors duration-150 text-sm">
                  <Download size={14} strokeWidth={2} />
                  <span>DOWNLOAD</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="mx-auto mb-6 text-white/80" size={48} strokeWidth={2} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Quality & Safety Concerns
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Report product quality issues, adverse events, or compliance concerns 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>REPORT QUALITY ISSUE</span>
              </button>
              <button className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 active:bg-white/20 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT QA TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

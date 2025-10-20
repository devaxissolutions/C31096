import { motion } from 'framer-motion';
import { Shield, Database, Lock, FileCheck, AlertTriangle, BarChart3, Clock, CheckCircle, Users, Key } from 'lucide-react';

export function DataIntegrityPage() {
  const integrityPrinciples = [
    {
      icon: Database,
      title: 'Data Accuracy',
      description: 'Ensuring all data collected, processed, and reported is accurate and reliable',
      practices: ['Automated data validation', 'Cross-check mechanisms', 'Audit trails', 'Error detection algorithms']
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Protecting sensitive data through comprehensive security measures and access controls',
      practices: ['Encryption at rest and transit', 'Role-based access control', 'Multi-factor authentication', 'Regular security audits']
    },
    {
      icon: FileCheck,
      title: 'Data Completeness',
      description: 'Maintaining complete and comprehensive data records throughout the data lifecycle',
      practices: ['Mandatory field validation', 'Data completeness checks', 'Gap analysis procedures', 'Documentation standards']
    },
    {
      icon: Clock,
      title: 'Data Timeliness',
      description: 'Ensuring data is collected, processed, and reported within appropriate timeframes',
      practices: ['Automated timestamping', 'Real-time data monitoring', 'Deadline tracking', 'Process optimization']
    },
    {
      icon: CheckCircle,
      title: 'Data Consistency',
      description: 'Maintaining consistency across all data sources and systems',
      practices: ['Data standardization', 'Cross-system validation', 'Master data management', 'Version control']
    },
    {
      icon: BarChart3,
      title: 'Data Traceability',
      description: 'Ability to trace data from origin through all processing and reporting stages',
      practices: ['Complete audit trails', 'Data lineage tracking', 'Change history', 'Source documentation']
    }
  ];

  const complianceStandards = [
    {
      standard: '21 CFR Part 11',
      title: 'Electronic Records & Signatures',
      description: 'FDA regulation for electronic data integrity in pharmaceutical industry',
      status: 'Fully Compliant'
    },
    {
      standard: 'ALCOA+',
      title: 'Data Integrity Principles',
      description: 'Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, Available',
      status: 'Implemented'
    },
    {
      standard: 'GAMP 5',
      title: 'Good Automated Manufacturing Practice',
      description: 'Guidelines for validation of automated systems in pharmaceutical manufacturing',
      status: 'Certified'
    },
    {
      standard: 'ISO 27001',
      title: 'Information Security Management',
      description: 'International standard for information security management systems',
      status: 'Certified'
    }
  ];

  const dataSystems = [
    {
      name: 'Laboratory Information Management System (LIMS)',
      purpose: 'Analytical data management and quality control',
      features: ['Automated data capture', 'Instrument integration', 'Quality control workflows', 'Regulatory reporting']
    },
    {
      name: 'Electronic Data Capture (EDC) System',
      purpose: 'Clinical trial data collection and management',
      features: ['Real-time data validation', 'Electronic signatures', 'Audit trails', 'Regulatory compliance']
    },
    {
      name: 'Manufacturing Execution System (MES)',
      purpose: 'Production data tracking and process control',
      features: ['Batch record management', 'Process monitoring', 'Quality integration', 'Performance analytics']
    },
    {
      name: 'Enterprise Resource Planning (ERP)',
      purpose: 'Integrated business data management',
      features: ['Financial data integrity', 'Supply chain tracking', 'Regulatory compliance', 'Business intelligence']
    }
  ];

  const riskMitigation = [
    {
      risk: 'Data Manipulation',
      mitigation: 'Automated data validation, audit trails, and access controls',
      monitoring: 'Continuous system monitoring and periodic audits'
    },
    {
      risk: 'System Failures',
      mitigation: 'Redundant systems, backup procedures, and disaster recovery',
      monitoring: 'System health monitoring and regular testing'
    },
    {
      risk: 'Unauthorized Access',
      mitigation: 'Multi-factor authentication, role-based permissions, encryption',
      monitoring: 'Access logging and security incident response'
    },
    {
      risk: 'Data Loss',
      mitigation: 'Automated backups, data replication, and retention policies',
      monitoring: 'Backup verification and data recovery testing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">DATA INTEGRITY & QUALITY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Data Integrity
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Data integrity is fundamental to our commitment to quality and regulatory compliance.
              We implement comprehensive systems and processes to ensure the accuracy, completeness,
              and reliability of all data throughout the pharmaceutical lifecycle, from research
              to patient care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-white/80">Audit Trail Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-xs text-white/80">Data Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-white/80">System Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-xs text-white/80">Data Integrity Issues</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrity Principles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">ALCOA+ PRINCIPLES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Data Integrity Principles
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our data integrity framework is built on the ALCOA+ principles, ensuring
              that all data is Attributable, Legible, Contemporaneous, Original, Accurate,
              Complete, Consistent, Enduring, and Available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrityPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="text-indigo-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{principle.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <CheckCircle size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">REGULATORY COMPLIANCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Regulatory Standards & Compliance
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              We maintain full compliance with international regulatory requirements
              for data integrity and electronic systems validation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-[var(--text-900)] mb-1">{standard.standard}</h3>
                    <p className="text-indigo-600 font-medium">{standard.title}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    standard.status === 'Fully Compliant' ? 'bg-green-50 text-green-700' :
                    standard.status === 'Implemented' ? 'bg-blue-50 text-blue-700' :
                    'bg-purple-50 text-purple-700'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                <p className="text-[var(--text-900)]/70">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Systems */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">TECHNOLOGY INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Integrated Data Systems
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our comprehensive data management ecosystem ensures integrity across
              all pharmaceutical operations and processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataSystems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-2">{system.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{system.purpose}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/70">
                      <CheckCircle size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 md:py-32 bg-indigo-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">RISK MANAGEMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Data Integrity Risk Mitigation
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Proactive identification and mitigation of potential data integrity risks
              through comprehensive controls and monitoring systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskMitigation.map((risk, index) => (
              <motion.div
                key={risk.risk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-indigo-200 p-8 rounded-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="text-lg text-[var(--text-900)] mb-2">{risk.risk}</h3>
                    <p className="text-[var(--text-900)]/70 mb-3">{risk.mitigation}</p>
                    <div className="text-sm">
                      <span className="text-indigo-600 font-medium">Monitoring: </span>
                      <span className="text-[var(--text-900)]/70">{risk.monitoring}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Culture */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Data Integrity Culture & Training
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Building a culture of data integrity through comprehensive training,
              awareness programs, and continuous education for all personnel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Personnel Training',
                description: 'Mandatory data integrity training for all employees with role-specific modules'
              },
              {
                icon: Key,
                title: 'Quality Culture',
                description: 'Fostering a speak-up culture where data integrity concerns can be raised freely'
              },
              {
                icon: BarChart3,
                title: 'Continuous Monitoring',
                description: 'Regular assessment and improvement of data integrity practices and systems'
              }
            ].map((aspect, index) => (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <aspect.icon className="text-white mb-4" size={32} />
                <h3 className="text-xl mb-3">{aspect.title}</h3>
                <p className="text-white/80 leading-relaxed">{aspect.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="mx-auto mb-6 text-indigo-600" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Data Integrity Assurance
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Our commitment to data integrity ensures the reliability and trustworthiness
              of all information supporting our pharmaceutical products and patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>VIEW DATA POLICIES</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT QUALITY TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
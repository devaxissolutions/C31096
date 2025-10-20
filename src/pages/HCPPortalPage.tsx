import { motion } from 'framer-motion';
import { User, Shield, FileText, Download, Search, Filter, Calendar, ExternalLink, BookOpen, Stethoscope, Activity, Heart, Pill, AlertTriangle, CheckCircle, Clock, Users, Package } from 'lucide-react';

export function HCPPortalPage() {
  const portalSections = [
    {
      title: 'Clinical Resources',
      description: 'Evidence-based clinical information and treatment guidelines',
      icon: Stethoscope,
      items: [
        { name: 'Treatment Protocols', count: '12 protocols', updated: 'Oct 2025' },
        { name: 'Clinical Guidelines', count: '8 guidelines', updated: 'Sep 2025' },
        { name: 'Case Studies', count: '25 studies', updated: 'Aug 2025' }
      ]
    },
    {
      title: 'Product Information',
      description: 'Detailed prescribing information and product monographs',
      icon: Pill,
      items: [
        { name: 'Prescribing Information', count: '15 products', updated: 'Oct 2025' },
        { name: 'Drug Interactions', count: 'Database', updated: 'Sep 2025' },
        { name: 'Dosage Calculators', count: 'Interactive tools', updated: 'Aug 2025' }
      ]
    },
    {
      title: 'Educational Materials',
      description: 'Continuing medical education and training resources',
      icon: BookOpen,
      items: [
        { name: 'CME Courses', count: '6 courses', updated: 'Oct 2025' },
        { name: 'Webinars', count: '12 recordings', updated: 'Sep 2025' },
        { name: 'Training Modules', count: '8 modules', updated: 'Aug 2025' }
      ]
    },
    {
      title: 'Research & Publications',
      description: 'Latest research findings and scientific publications',
      icon: Activity,
      items: [
        { name: 'Clinical Trials', count: '18 studies', updated: 'Oct 2025' },
        { name: 'Research Papers', count: '45 publications', updated: 'Sep 2025' },
        { name: 'Abstracts', count: '32 abstracts', updated: 'Aug 2025' }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Sample Request',
      description: 'Request product samples for your practice',
      icon: Package,
      action: 'Request Samples'
    },
    {
      title: 'Adverse Event Reporting',
      description: 'Report adverse events or product issues',
      icon: AlertTriangle,
      action: 'Report AE'
    },
    {
      title: 'Medical Information',
      description: 'Get answers to medical inquiries',
      icon: Users,
      action: 'Contact MI'
    }
  ];

  const recentUpdates = [
    {
      title: 'Updated Cardiovascular Guidelines',
      date: 'October 15, 2025',
      type: 'Clinical Update'
    },
    {
      title: 'New Antibiotic Stewardship Program',
      date: 'October 10, 2025',
      type: 'Educational Resource'
    },
    {
      title: 'Expanded Drug Interaction Database',
      date: 'October 5, 2025',
      type: 'Product Information'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">HCP PORTAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Healthcare Professional Portal
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive clinical resources, prescribing information, educational materials,
              and research publications designed exclusively for healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Access Notice */}
      <section className="py-12 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 p-6">
            <div className="flex items-start gap-3">
              <Shield className="text-amber-600 mt-0.5" size={20} strokeWidth={2} />
              <div>
                <h3 className="text-sm font-medium text-amber-800 mb-1">Professional Access Required</h3>
                <p className="text-sm text-amber-700">
                  This portal contains information intended for licensed healthcare professionals only.
                  Please verify your credentials to access full content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CLINICAL RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Medical Resources
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Access evidence-based clinical information, prescribing guidelines, and educational materials
              to support your medical practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{section.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-[var(--border-color)] last:border-0">
                      <div>
                        <span className="text-sm text-[var(--text-900)] font-medium">{item.name}</span>
                        <span className="text-xs text-[var(--text-900)]/60 ml-2">({item.count})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[var(--text-900)]/60">Updated {item.updated}</span>
                        <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                          <Download size={14} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                  Access {section.title}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">QUICK ACTIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Essential Tools & Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <action.icon className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{action.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 mb-4">{action.description}</p>
                <button className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-2 text-sm tracking-wide transition-colors duration-150">
                  {action.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">RECENT UPDATES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Latest Medical Updates
            </h2>
          </motion.div>

          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[var(--text-900)]">{update.title}</h3>
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {update.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{update.date}</span>
                    </div>
                  </div>
                  <button className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                    View Update
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Medical Information Support
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Need assistance with medical inquiries, product information, or clinical support?
              Our medical affairs team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>Contact Medical Affairs</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>Emergency Support</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
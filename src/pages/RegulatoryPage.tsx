import { motion } from 'framer-motion';
import { FileText, Download, Search, Award, Shield, CheckCircle, ExternalLink, Calendar, Building, Globe, Users, BookOpen } from 'lucide-react';

export function RegulatoryPage() {
  const regulatoryDocuments = [
    {
      title: 'WHO-GMP Certificate',
      description: 'World Health Organization Good Manufacturing Practices certification',
      type: 'Certification',
      issuedBy: 'WHO',
      validUntil: 'December 2027',
      facility: 'All Manufacturing Sites',
      featured: true
    },
    {
      title: 'ISO 9001:2015 Certificate',
      description: 'Quality Management Systems certification',
      type: 'Certification',
      issuedBy: 'ISO',
      validUntil: 'March 2028',
      facility: 'Corporate & Manufacturing',
      featured: true
    },
    {
      title: 'ISO 14001:2015 Certificate',
      description: 'Environmental Management Systems certification',
      type: 'Certification',
      issuedBy: 'ISO',
      validUntil: 'June 2028',
      facility: 'All Facilities',
      featured: true
    },
    {
      title: 'Drug Manufacturing License',
      description: 'Regulatory approval for pharmaceutical manufacturing',
      type: 'License',
      issuedBy: 'CDSCO',
      validUntil: 'Ongoing',
      facility: 'Ahmedabad Facility',
      featured: false
    },
    {
      title: 'Export License',
      description: 'Authorization for international pharmaceutical exports',
      type: 'License',
      issuedBy: 'DGFT',
      validUntil: 'December 2026',
      facility: 'All Export Facilities',
      featured: false
    },
    {
      title: 'Clinical Trial Authorization',
      description: 'Regulatory approval for conducting clinical trials',
      type: 'Authorization',
      issuedBy: 'CDSCO',
      validUntil: 'Case-by-case',
      facility: 'Research Facilities',
      featured: false
    }
  ];

  const regulatoryBodies = [
    {
      name: 'Central Drugs Standard Control Organization (CDSCO)',
      country: 'India',
      role: 'Drug regulatory authority for India',
      website: 'cdsco.gov.in',
      icon: Building
    },
    {
      name: 'World Health Organization (WHO)',
      country: 'International',
      role: 'Global health standards and certifications',
      website: 'who.int',
      icon: Globe
    },
    {
      name: 'U.S. Food and Drug Administration (FDA)',
      country: 'United States',
      role: 'Drug approval and safety regulation',
      website: 'fda.gov',
      icon: Shield
    },
    {
      name: 'European Medicines Agency (EMA)',
      country: 'European Union',
      role: 'Medicines regulation in Europe',
      website: 'ema.europa.eu',
      icon: Users
    },
    {
      name: 'Therapeutic Goods Administration (TGA)',
      country: 'Australia',
      role: 'Therapeutic goods regulation',
      website: 'tga.gov.au',
      icon: Award
    },
    {
      name: 'Health Canada',
      country: 'Canada',
      role: 'Drug and health product regulation',
      website: 'canada.ca/health-canada',
      icon: CheckCircle
    }
  ];

  const complianceReports = [
    {
      title: 'Annual Product Quality Review 2025',
      description: 'Comprehensive quality assessment of all manufactured products',
      type: 'Quality Report',
      date: 'September 2025',
      period: 'FY 2024-25'
    },
    {
      title: 'Environmental Compliance Report',
      description: 'Environmental impact assessment and compliance status',
      type: 'Environmental Report',
      date: 'August 2025',
      period: 'Q2 2025'
    },
    {
      title: 'Regulatory Inspection Summary',
      description: 'Summary of recent regulatory inspections and findings',
      type: 'Inspection Report',
      date: 'July 2025',
      period: 'H1 2025'
    },
    {
      title: 'Data Integrity Assessment',
      description: 'Assessment of data integrity practices across all systems',
      type: 'Compliance Report',
      date: 'June 2025',
      period: 'Annual'
    }
  ];

  const regulatoryUpdates = [
    {
      title: 'New CDSCO Guidelines for Bioequivalence Studies',
      description: 'Updated requirements for bioequivalence study protocols',
      date: 'October 15, 2025',
      impact: 'High',
      category: 'Clinical Trials'
    },
    {
      title: 'Revised WHO GMP Guidelines Implementation',
      description: 'Implementation timeline for updated manufacturing standards',
      date: 'October 10, 2025',
      impact: 'Medium',
      category: 'Manufacturing'
    },
    {
      title: 'EU Clinical Trials Regulation Updates',
      description: 'Changes to clinical trial authorization processes',
      date: 'October 5, 2025',
      impact: 'High',
      category: 'Regulatory'
    }
  ];

  const getImpactColor = (impact: string) => {
    const colors: Record<string, string> = {
      'High': 'bg-red-50 text-red-700',
      'Medium': 'bg-yellow-50 text-yellow-700',
      'Low': 'bg-green-50 text-green-700'
    };
    return colors[impact] || 'bg-gray-50 text-gray-700';
  };

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
              <span className="text-sm tracking-wide">REGULATORY INFORMATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Regulatory Compliance & Certifications
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive regulatory information, certifications, licenses,
              and compliance documentation demonstrating our commitment to quality and safety standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-900)]/40" size={20} strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search regulatory documents..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Types</option>
                <option>Certification</option>
                <option>License</option>
                <option>Authorization</option>
                <option>Report</option>
              </select>
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Authorities</option>
                <option>WHO</option>
                <option>ISO</option>
                <option>CDSCO</option>
                <option>DGFT</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Certifications */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CERTIFICATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Regulatory Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {regulatoryDocuments.filter(doc => doc.featured).map((document, index) => (
              <motion.div
                key={document.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Award size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs font-medium">
                        {document.type}
                      </span>
                      <span className="text-xs text-white/80">{document.issuedBy}</span>
                    </div>
                    <h3 className="text-lg mb-2">{document.title}</h3>
                    <p className="text-sm text-white/90 mb-3">{document.description}</p>
                    <div className="space-y-1 text-xs text-white/70">
                      <p>Valid until: {document.validUntil}</p>
                      <p>Facility: {document.facility}</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/95 px-4 py-3 text-sm tracking-wide transition-colors duration-150">
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Regulatory Documents */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">ALL DOCUMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Complete Regulatory Documentation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {regulatoryDocuments.map((document, index) => (
              <motion.div
                key={document.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {document.type}
                      </span>
                      <span className="text-xs text-[var(--text-900)]/60">{document.issuedBy}</span>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{document.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{document.description}</p>
                    <div className="space-y-1 text-xs text-[var(--text-900)]/60">
                      <p>Valid until: {document.validUntil}</p>
                      <p>Facility: {document.facility}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                    View Document
                  </button>
                  <button className="bg-[var(--brand-blue)]/10 hover:bg-[var(--brand-blue)]/20 px-4 py-2 text-sm text-[var(--brand-blue)] transition-colors duration-150">
                    <Download size={16} strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">REGULATORY BODIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Global Regulatory Authorities
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              EDIF Pharma complies with regulatory standards from leading global health authorities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryBodies.map((body, index) => (
              <motion.div
                key={body.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <body.icon className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{body.name}</h3>
                    <p className="text-sm text-[var(--brand-blue)] mb-2">{body.country}</p>
                    <p className="text-sm text-[var(--text-900)]/70 mb-3">{body.role}</p>
                    <a
                      href={`https://${body.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm"
                    >
                      <span>{body.website}</span>
                      <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Reports */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">COMPLIANCE REPORTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Regulatory Compliance Reports
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {complianceReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {report.type}
                      </span>
                      <span className="text-xs text-[var(--text-900)]/60">{report.period}</span>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{report.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{report.description}</p>
                    <div className="flex items-center gap-1 text-xs text-[var(--text-900)]/60">
                      <Calendar size={12} strokeWidth={2} />
                      <span>{report.date}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                  <Download size={16} strokeWidth={2} className="inline mr-2" />
                  Download Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Updates */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">REGULATORY UPDATES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Latest Regulatory Developments
            </h2>
          </motion.div>

          <div className="space-y-4">
            {regulatoryUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[var(--text-900)]">{update.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium ${getImpactColor(update.impact)}`}>
                        {update.impact} Impact
                      </span>
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {update.category}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{update.description}</p>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{update.date}</span>
                    </div>
                  </div>
                  <button className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Regulatory Affairs Contact
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              For questions about regulatory compliance, certifications, or documentation requirements.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Regulatory Affairs</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
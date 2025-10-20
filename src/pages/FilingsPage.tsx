import { motion } from 'framer-motion';
import { FileText, Download, Calendar, ExternalLink, Search, Filter, AlertTriangle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function FilingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filingTypes = [
    { value: 'all', label: 'All Filings' },
    { value: 'annual', label: 'Annual Reports' },
    { value: 'quarterly', label: 'Quarterly Reports' },
    { value: 'current', label: 'Current Reports' },
    { value: 'proxy', label: 'Proxy Statements' },
    { value: 'registration', label: 'Registration Statements' }
  ];

  const filings = [
    {
      type: '20-F',
      title: 'Annual Report on Form 20-F for Fiscal Year 2024',
      date: 'March 31, 2025',
      size: '4.2 MB',
      accession: '000-12345-25-000001',
      description: 'Complete annual report including audited financial statements, management discussion, and corporate governance information.',
      category: 'annual'
    },
    {
      type: '6-K',
      title: 'Report of Foreign Private Issuer on Form 6-K',
      date: 'October 25, 2025',
      size: '1.8 MB',
      accession: '000-12345-25-000089',
      description: 'Quarterly financial results and business update for Q3 2025.',
      category: 'quarterly'
    },
    {
      type: '6-K',
      title: 'Report of Foreign Private Issuer on Form 6-K',
      date: 'July 28, 2025',
      size: '1.7 MB',
      accession: '000-12345-25-000067',
      description: 'Quarterly financial results and business update for Q2 2025.',
      category: 'quarterly'
    },
    {
      type: '6-K',
      title: 'Report of Foreign Private Issuer on Form 6-K',
      date: 'April 30, 2025',
      size: '1.6 MB',
      accession: '000-12345-25-000045',
      description: 'Quarterly financial results and business update for Q1 2025.',
      category: 'quarterly'
    },
    {
      type: 'DEF 14A',
      title: 'Definitive Proxy Statement',
      date: 'March 15, 2025',
      size: '2.9 MB',
      accession: '000-12345-25-000023',
      description: 'Notice of Annual General Meeting and proxy solicitation materials.',
      category: 'proxy'
    },
    {
      type: '6-K',
      title: 'Report of Foreign Private Issuer on Form 6-K',
      date: 'February 14, 2025',
      size: '0.8 MB',
      accession: '000-12345-25-000012',
      description: 'Material agreement announcement - Strategic partnership with global pharmaceutical distributor.',
      category: 'current'
    },
    {
      type: 'F-1',
      title: 'Registration Statement on Form F-1',
      date: 'January 10, 2025',
      size: '5.1 MB',
      accession: '333-123456-25-000001',
      description: 'Registration of American Depositary Shares (ADS) offering.',
      category: 'registration'
    }
  ];

  const filteredFilings = filings.filter(filing => {
    const matchesSearch = filing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         filing.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         filing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || filing.category === selectedType;
    return matchesSearch && matchesType;
  });

  const regulatoryInfo = [
    {
      title: 'SEC Filing Requirements',
      description: 'EDIF Pharma is subject to SEC reporting requirements as a foreign private issuer. We file annual reports on Form 20-F and current reports on Form 6-K.',
      icon: FileText
    },
    {
      title: 'Access to EDGAR',
      description: 'All our SEC filings are available through the SEC\'s EDGAR database. You can also access them directly from this page.',
      icon: ExternalLink
    },
    {
      title: 'Foreign Private Issuer Status',
      description: 'As a foreign private issuer, we are exempt from certain SEC reporting requirements but maintain transparency through regular disclosures.',
      icon: CheckCircle
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
              <span className="text-sm tracking-wide">SEC FILINGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Regulatory Filings & Documents
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access all our SEC filings, regulatory documents, and corporate disclosures.
              Stay informed about EDIF Pharma's regulatory compliance and corporate governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Information */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">REGULATORY COMPLIANCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              SEC Filing Information
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {regulatoryInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="w-14 h-14 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                  <info.icon className="text-[var(--brand-blue)]" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-3">{info.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-900)]/40" size={20} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search filings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter size={16} strokeWidth={2} className="text-[var(--text-900)]/60" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
              >
                {filingTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filings List */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">RECENT FILINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              SEC Filings & Regulatory Documents
            </h2>
            <p className="text-lg text-[var(--text-900)]/60">
              Showing {filteredFilings.length} of {filings.length} filings
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFilings.map((filing, index) => (
              <motion.div
                key={filing.accession}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-[var(--brand-blue)] text-white text-sm font-medium">
                        {filing.type}
                      </span>
                      <span className="text-sm text-[var(--text-900)]/60">Accession: {filing.accession}</span>
                    </div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{filing.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-900)]/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} strokeWidth={2} />
                        <span>{filing.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={14} strokeWidth={2} />
                        <span>{filing.size}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-900)]/70 leading-relaxed mb-4">
                      {filing.description}
                    </p>
                    <div className="text-xs text-[var(--text-900)]/50">
                      Filed with the U.S. Securities and Exchange Commission
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <Download size={16} strokeWidth={2} />
                      <span>Download</span>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <ExternalLink size={16} strokeWidth={2} />
                      <span>View on EDGAR</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFilings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <AlertTriangle className="mx-auto mb-4 text-[var(--text-900)]/40" size={48} strokeWidth={2} />
              <h3 className="text-lg text-[var(--text-900)] mb-2">No filings found</h3>
              <p className="text-[var(--text-900)]/60">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Filing Calendar */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">UPCOMING FILINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Filing Schedule
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[var(--border-color)] p-8"
            >
              <div className="w-14 h-14 bg-green-50 flex items-center justify-center mb-4">
                <CheckCircle className="text-green-600" size={28} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Q4 2025 Results</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-3">Form 6-K filing expected</p>
              <div className="text-sm text-green-600 font-medium">Filed October 25, 2025</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[var(--border-color)] p-8"
            >
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={28} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Annual Report 2025</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-3">Form 20-F filing due</p>
              <div className="text-sm text-blue-600 font-medium">Due March 31, 2026</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[var(--border-color)] p-8"
            >
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={28} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Q1 2026 Results</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-3">Form 6-K filing expected</p>
              <div className="text-sm text-blue-600 font-medium">Due April 30, 2026</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Questions About Our Filings?
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Contact our Investor Relations team for assistance with SEC filings or regulatory disclosures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>Contact IR Team</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <ExternalLink size={16} strokeWidth={2} />
                <span>SEC EDGAR Database</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
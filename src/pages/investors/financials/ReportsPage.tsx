import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart, DollarSign, Eye } from 'lucide-react';

export function ReportsPage() {
  const quarterlyReports = [
    {
      period: 'Q3 2025',
      title: 'Third Quarter 2025 Financial Results',
      date: 'October 25, 2025',
      size: '2.4 MB',
      type: 'Quarterly Report',
      highlights: ['Revenue: ₹645 Cr (+15%)', 'EBITDA: ₹158 Cr (+12%)', 'Net Profit: ₹89 Cr (+18%)']
    },
    {
      period: 'Q2 2025',
      title: 'Second Quarter 2025 Financial Results',
      date: 'July 28, 2025',
      size: '2.2 MB',
      type: 'Quarterly Report',
      highlights: ['Revenue: ₹612 Cr (+14%)', 'EBITDA: ₹145 Cr (+11%)', 'Net Profit: ₹82 Cr (+16%)']
    },
    {
      period: 'Q1 2025',
      title: 'First Quarter 2025 Financial Results',
      date: 'April 30, 2025',
      size: '2.1 MB',
      type: 'Quarterly Report',
      highlights: ['Revenue: ₹589 Cr (+13%)', 'EBITDA: ₹138 Cr (+10%)', 'Net Profit: ₹78 Cr (+15%)']
    },
    {
      period: 'Q4 2024',
      title: 'Fourth Quarter 2024 Financial Results',
      date: 'January 28, 2025',
      size: '2.3 MB',
      type: 'Quarterly Report',
      highlights: ['Revenue: ₹604 Cr (+12%)', 'EBITDA: ₹142 Cr (+9%)', 'Net Profit: ₹81 Cr (+14%)']
    }
  ];

  const annualReports = [
    {
      year: 'FY 2024-25',
      title: 'Annual Report 2024-25',
      date: 'March 31, 2025',
      size: '8.7 MB',
      type: 'Annual Report',
      description: 'Complete financial year overview with detailed financial statements, management discussion, and corporate governance report.'
    },
    {
      year: 'FY 2023-24',
      title: 'Annual Report 2023-24',
      date: 'March 31, 2024',
      size: '7.9 MB',
      type: 'Annual Report',
      description: 'Comprehensive annual report including financial performance, strategic initiatives, and sustainability reporting.'
    },
    {
      year: 'FY 2022-23',
      title: 'Annual Report 2022-23',
      date: 'March 31, 2023',
      size: '6.8 MB',
      type: 'Annual Report',
      description: 'Annual report covering business performance, expansion plans, and regulatory achievements.'
    }
  ];

  const financialHighlights = [
    {
      metric: 'Total Revenue',
      value: '₹2,450 Cr',
      change: '+18%',
      icon: DollarSign
    },
    {
      metric: 'EBITDA Margin',
      value: '24.5%',
      change: '+2.3%',
      icon: PieChart
    },
    {
      metric: 'Net Profit',
      value: '₹330 Cr',
      change: '+16%',
      icon: TrendingUp
    },
    {
      metric: 'Market Capitalization',
      value: '₹8,750 Cr',
      change: '+12%',
      icon: BarChart3
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
              <span className="text-sm tracking-wide">FINANCIAL REPORTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Financial Performance & Reports
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access our comprehensive financial reports, quarterly results, and annual statements.
              Stay informed about EDIF Pharma's financial performance and strategic direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">FY 2024-25 HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Financial Metrics
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <div className="text-2xl font-bold text-[var(--text-900)] mb-2">{highlight.value}</div>
                <div className="text-sm text-[var(--text-900)]/70 mb-2">{highlight.metric}</div>
                <div className="text-sm text-green-600 font-medium">{highlight.change} YoY</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Reports */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">QUARTERLY RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Quarterly Financial Reports
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Detailed financial performance reports for each quarter
            </p>
          </motion.div>

          <div className="space-y-6">
            {quarterlyReports.map((report, index) => (
              <motion.div
                key={report.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm font-medium">
                        {report.period}
                      </span>
                      <span className="text-sm text-[var(--text-900)]/60">{report.type}</span>
                    </div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-900)]/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} strokeWidth={2} />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={14} strokeWidth={2} />
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {report.highlights.map((highlight, idx) => (
                        <span key={idx} className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <Eye size={16} strokeWidth={2} />
                      <span>View Online</span>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <Download size={16} strokeWidth={2} />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">ANNUAL REPORTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Annual Reports & Statements
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Comprehensive annual financial reports and corporate governance statements
            </p>
          </motion.div>

          <div className="space-y-6">
            {annualReports.map((report, index) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm font-medium">
                        {report.year}
                      </span>
                      <span className="text-sm text-[var(--text-900)]/60">{report.type}</span>
                    </div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-900)]/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} strokeWidth={2} />
                        <span>{report.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={14} strokeWidth={2} />
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <Eye size={16} strokeWidth={2} />
                      <span>View Online</span>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                      <Download size={16} strokeWidth={2} />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">ADDITIONAL RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Supporting Documents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[var(--border-color)] p-6"
            >
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                <FileText className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Management Discussion & Analysis</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Detailed analysis of financial performance and future outlook</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                Download →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[var(--border-color)] p-6"
            >
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                <BarChart3 className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Financial Presentations</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Quarterly earnings presentations and investor decks</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                View Presentations →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[var(--border-color)] p-6"
            >
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Historical Financial Data</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Five-year financial summary and key metrics</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                Download Data →
              </button>
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
              Questions About Our Financial Reports?
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Our Investor Relations team is available to help you understand our financial performance and answer your questions.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Investor Relations</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
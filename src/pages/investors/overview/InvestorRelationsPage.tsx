import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, BarChart3, Calendar, Download, Mail, Phone, Users, Target, Award, Globe } from 'lucide-react';

export function InvestorRelationsPage() {
  const investorStats = [
    {
      icon: DollarSign,
      value: '₹2,450 Cr',
      label: 'Annual Revenue',
      change: '+18%'
    },
    {
      icon: PieChart,
      value: '24.5%',
      label: 'EBITDA Margin',
      change: '+2.3%'
    },
    {
      icon: TrendingUp,
      value: '+18%',
      label: 'YoY Growth',
      change: 'Strong'
    },
    {
      icon: BarChart3,
      value: '₹8,750 Cr',
      label: 'Market Cap',
      change: '+12%'
    },
  ];

  const keyHighlights = [
    {
      title: 'Strong Financial Performance',
      description: 'Consistent revenue growth and profitability across all business segments',
      icon: TrendingUp
    },
    {
      title: 'Global Expansion',
      description: 'Strategic partnerships and market penetration in 45+ countries',
      icon: Globe
    },
    {
      title: 'Innovation Leadership',
      description: 'Industry-leading R&D investments and patent portfolio growth',
      icon: Target
    },
    {
      title: 'Regulatory Excellence',
      description: 'WHO-GMP certifications and compliance across all manufacturing facilities',
      icon: Award
    }
  ];

  const upcomingEvents = [
    {
      title: 'Q4 2025 Earnings Call',
      date: 'January 25, 2026',
      time: '10:00 AM EST',
      type: 'Earnings'
    },
    {
      title: 'Annual Investor Conference',
      date: 'March 15, 2026',
      time: '9:00 AM EST',
      type: 'Conference'
    },
    {
      title: 'Annual General Meeting',
      date: 'April 10, 2026',
      time: '11:00 AM IST',
      type: 'AGM'
    }
  ];

  const contactInfo = [
    {
      title: 'Investor Relations',
      name: 'Rajesh Kumar',
      position: 'Head of Investor Relations',
      email: 'investors@edifpharma.com',
      phone: '+91 22 5555 0123'
    },
    {
      title: 'Financial Communications',
      name: 'Priya Sharma',
      position: 'Director, Corporate Communications',
      email: 'communications@edifpharma.com',
      phone: '+91 22 5555 0124'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-32 relative overflow-hidden">
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

        <div className="relative max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">INVESTOR RELATIONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Building Value Together
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Discover EDIF Pharma's commitment to transparency, growth, and shareholder value.
              Access financial reports, corporate governance information, and the latest company news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">FINANCIAL HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Performance Indicators
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Strong financial fundamentals driving sustainable growth and shareholder returns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <div className="text-3xl font-bold text-[var(--text-900)] mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--text-900)]/70 mb-2">{stat.label}</div>
                <div className="text-xs text-green-600 font-medium">{stat.change}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">COMPANY STRENGTHS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Why Invest in EDIF Pharma
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="w-14 h-14 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                  <highlight.icon className="text-[var(--brand-blue)]" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-3">{highlight.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">EVENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Upcoming Investor Events
            </h2>
          </motion.div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-900)]/70">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs tracking-wide">
                    {event.type}
                  </span>
                  <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                    Add to Calendar →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Investor Resources
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[var(--border-color)] p-8 text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                <Download className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Financial Reports</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Quarterly and annual financial statements</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                View Reports →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[var(--border-color)] p-8 text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Corporate Governance</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Board policies and governance documents</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                View Governance →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[var(--border-color)] p-8 text-center"
            >
              <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Email Alerts</h3>
              <p className="text-sm text-[var(--text-900)]/70 mb-4">Stay updated with company news and filings</p>
              <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                Subscribe →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CONTACT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Investor Relations Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-4">{contact.title}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[var(--text-900)] font-medium">{contact.name}</div>
                    <div className="text-sm text-[var(--text-900)]/70">{contact.position}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} strokeWidth={2} className="text-[var(--brand-blue)]" />
                    <a href={`mailto:${contact.email}`} className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} strokeWidth={2} className="text-[var(--brand-blue)]" />
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[var(--text-900)]/70 hover:text-[var(--brand-blue)] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
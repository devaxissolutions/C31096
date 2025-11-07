import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Download, 
  FileText, 
  Calendar,
  BarChart3,
  Users,
  Globe,
  Award,
  ArrowUpRight,
  DollarSign,
  PieChart,
  Building
} from 'lucide-react';
import { Button } from '../ui/button';

export function InvestorsSection() {
  const financialHighlights = [
    {
      metric: 'Revenue (FY 2024)',
      value: '₹2,450 Cr',
      growth: '+18% YoY',
      icon: DollarSign,
      positive: true,
    },
    {
      metric: 'EBITDA Margin',
      value: '24.5%',
      growth: '+2.3pp',
      icon: PieChart,
      positive: true,
    },
    {
      metric: 'Market Cap',
      value: '₹8,750 Cr',
      growth: '+12% YTD',
      icon: TrendingUp,
      positive: true,
    },
    {
      metric: 'Global Presence',
      value: '45+ Countries',
      growth: 'Expanded 8 new',
      icon: Globe,
      positive: true,
    },
  ];

  const reports = [
    {
      title: 'Annual Report 2024',
      type: 'Annual Report',
      date: 'March 2025',
      size: '8.2 MB',
      icon: FileText,
    },
    {
      title: 'Q3 FY2024-25 Results',
      type: 'Quarterly Report',
      date: 'December 2024',
      size: '2.4 MB',
      icon: BarChart3,
    },
    {
      title: 'Investor Presentation Q3',
      type: 'Presentation',
      date: 'December 2024',
      size: '5.1 MB',
      icon: FileText,
    },
    {
      title: 'ESG Report 2024',
      type: 'Sustainability Report',
      date: 'October 2024',
      size: '4.8 MB',
      icon: FileText,
    },
  ];

  const upcomingEvents = [
    {
      title: 'Q4 FY2024-25 Earnings Call',
      date: 'April 15, 2025',
      time: '4:00 PM IST',
      type: 'Earnings Call',
    },
    {
      title: 'Annual General Meeting',
      date: 'June 20, 2025',
      time: '10:00 AM IST',
      type: 'AGM',
    },
    {
      title: 'Investor Day 2025',
      date: 'August 5, 2025',
      time: 'Full Day Event',
      type: 'Conference',
    },
  ];

  const growthDrivers = [
    {
      icon: Building,
      title: 'Manufacturing Excellence',
      description: 'WHO-GMP certified facilities with capacity expansion of 30% planned',
    },
    {
      icon: Globe,
      title: 'Geographic Expansion',
      description: 'Strategic entry into 8 new markets across Africa and Latin America',
    },
    {
      icon: Award,
      title: 'Product Portfolio',
      description: '150+ products with 25 new launches planned for FY2025',
    },
    {
      icon: Users,
      title: 'Strategic Partnerships',
      description: 'Collaborations with global pharma majors for co-development',
    },
  ];

  return (
    <section id="investors" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="investor-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#investor-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-[var(--radius-button)] mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Investor Relations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-6">
            For Investors
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
            Delivering sustainable growth through pharmaceutical excellence, operational efficiency, 
            and strategic market expansion.
          </p>
        </motion.div>

        {/* Financial Highlights */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {financialHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.metric}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--brand-blue)] transition-colors">
                    <Icon size={20} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.positive 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {item.growth}
                  </span>
                </div>
                <div className="text-3xl text-[var(--brand-blue)] mb-1">{item.value}</div>
                <div className="text-sm text-[var(--text-900)] opacity-60">{item.metric}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Growth Drivers */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Growth Drivers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthDrivers.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <motion.div
                  key={driver.title}
                  className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Icon size={24} className="text-[var(--brand-blue)] mb-3" />
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{driver.title}</h4>
                  <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                    {driver.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Reports & Documents */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Financial Reports */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText size={28} className="text-[var(--brand-blue)]" />
              <h3 className="text-2xl text-[var(--brand-blue)]">
                Reports & Filings
              </h3>
            </div>
            <div className="space-y-3">
              {reports.map((report, index) => {
                const Icon = report.icon;
                return (
                  <motion.div
                    key={report.title}
                    className="bg-white border border-[var(--border-color)] p-5 rounded-xl hover:border-[var(--brand-blue)] transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-blue)] transition-colors">
                        <Icon size={20} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[var(--text-900)] mb-1">{report.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-900)] opacity-50 mb-3">
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10 h-auto py-1.5 px-3 -ml-3 group/btn"
                        >
                          <Download size={16} className="mr-1.5 group-hover/btn:translate-y-0.5 transition-transform" />
                          <span className="text-sm">Download PDF</span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={28} className="text-[var(--brand-blue)]" />
              <h3 className="text-2xl text-[var(--brand-blue)]">
                Upcoming Events
              </h3>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="bg-white border border-[var(--border-color)] p-5 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-[var(--text-900)]">{event.title}</h4>
                    <span className="px-2 py-0.5 bg-[var(--brand-blue)]/10 rounded-full text-xs text-[var(--brand-blue)] whitespace-nowrap">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-900)] opacity-60 mb-3">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10 h-auto py-1.5 px-3 -ml-3"
                  >
                    <span className="text-sm">Add to Calendar</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stock Information */}
        <motion.div
          className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] p-8 md:p-10 rounded-xl text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl mb-3">Stock Information</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                PharmaCorp is listed on BSE and NSE. Get real-time stock quotes, 
                historical data, and analyst coverage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-white/60 mb-1">BSE Code</div>
                  <div className="text-lg">543210</div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">NSE Symbol</div>
                  <div className="text-lg">PHARMACORP</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                className="bg-white text-[var(--brand-blue)] hover:bg-white/90 justify-between group"
              >
                <span>View Live Stock Price</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 justify-between group"
              >
                <span>Historical Data</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Contact IR */}
        <motion.div
          className="bg-[var(--surface)] border border-[var(--border-color)] p-8 md:p-10 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl text-[var(--brand-blue)] mb-2">Investor Relations Contact</h3>
              <p className="text-[var(--text-900)] opacity-70 leading-relaxed mb-4">
                For investor inquiries, financial information, or to schedule a management meeting, 
                please contact our Investor Relations team.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[var(--text-900)] opacity-60">
                  <span>Email:</span>
                  <span className="text-[var(--brand-blue)]">investors@pharmacorp.com</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-900)] opacity-60">
                  <span>Phone:</span>
                  <span className="text-[var(--brand-blue)]">+91-1234-567-800</span>
                </div>
              </div>
            </div>
            <Button
              className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/90 px-8 h-auto py-3 whitespace-nowrap"
            >
              Contact IR Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

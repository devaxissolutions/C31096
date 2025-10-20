import { motion } from 'framer-motion';
import { Newspaper, Calendar, ExternalLink, TrendingUp, Users, Award, Target, Download } from 'lucide-react';

export function InvestorNewsPage() {
  const newsArticles = [
    {
      title: 'EDIF Pharma Announces Record Q3 2025 Financial Results',
      date: 'October 25, 2025',
      category: 'Financial Results',
      excerpt: 'Company reports 18% YoY revenue growth and expanded EBITDA margins, driven by strong performance across all business segments.',
      type: 'press-release',
      featured: true
    },
    {
      title: 'Strategic Partnership with Global Pharmaceutical Distributor',
      date: 'October 15, 2025',
      category: 'Business Development',
      excerpt: 'EDIF Pharma enters into exclusive distribution agreement to expand market presence in North American region.',
      type: 'press-release',
      featured: false
    },
    {
      title: 'FDA Approves New Cardiovascular Therapy IND Application',
      date: 'October 10, 2025',
      category: 'Regulatory',
      excerpt: 'Investigational New Drug application approved for novel cardiovascular treatment, advancing clinical development pipeline.',
      type: 'press-release',
      featured: false
    },
    {
      title: 'EDIF Pharma Named Among India\'s Best Workplaces 2025',
      date: 'September 28, 2025',
      category: 'Corporate',
      excerpt: 'Recognition for employee engagement, innovation culture, and commitment to professional development.',
      type: 'press-release',
      featured: false
    },
    {
      title: 'Expansion of WHO-GMP Manufacturing Facility Completed',
      date: 'September 20, 2025',
      category: 'Operations',
      excerpt: 'New state-of-the-art facility increases production capacity by 40% and enhances quality control capabilities.',
      type: 'press-release',
      featured: false
    },
    {
      title: 'R&D Investment Reaches ₹450 Cr Milestone',
      date: 'September 12, 2025',
      category: 'Innovation',
      excerpt: 'Annual R&D expenditure surpasses previous records, supporting 12 active development programs.',
      type: 'press-release',
      featured: false
    }
  ];

  const marketUpdates = [
    {
      title: 'Indian Pharmaceutical Market Outlook 2026',
      date: 'October 20, 2025',
      source: 'Industry Report',
      excerpt: 'Analysis of market trends, regulatory changes, and growth opportunities in the Indian pharmaceutical sector.',
      type: 'market-insight'
    },
    {
      title: 'Global Generic Drug Market Trends',
      date: 'October 15, 2025',
      source: 'Market Analysis',
      excerpt: 'Key trends shaping the global generic pharmaceuticals market and implications for industry players.',
      type: 'market-insight'
    },
    {
      title: 'Healthcare Policy Updates',
      date: 'October 5, 2025',
      source: 'Regulatory Update',
      excerpt: 'Summary of recent healthcare policy changes and their impact on pharmaceutical companies.',
      type: 'market-insight'
    }
  ];

  const presentations = [
    {
      title: 'Q3 2025 Earnings Presentation',
      date: 'October 25, 2025',
      type: 'Earnings',
      description: 'Financial results presentation with detailed analysis and strategic outlook.'
    },
    {
      title: 'Annual Investor Conference 2025',
      date: 'September 15, 2025',
      type: 'Conference',
      description: 'Comprehensive company overview and strategic direction presentation.'
    },
    {
      title: 'R&D Day Presentation',
      date: 'August 30, 2025',
      type: 'R&D',
      description: 'Detailed review of research pipeline and innovation initiatives.'
    }
  ];

  const rssFeeds = [
    {
      title: 'Press Releases',
      description: 'Official company announcements and news',
      url: '/investors/news/rss/press-releases.xml'
    },
    {
      title: 'Financial News',
      description: 'Financial results and market updates',
      url: '/investors/news/rss/financial-news.xml'
    },
    {
      title: 'Corporate Updates',
      description: 'Corporate governance and operational news',
      url: '/investors/news/rss/corporate-updates.xml'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Financial Results': 'bg-green-50 text-green-700',
      'Business Development': 'bg-blue-50 text-blue-700',
      'Regulatory': 'bg-purple-50 text-purple-700',
      'Corporate': 'bg-orange-50 text-orange-700',
      'Operations': 'bg-teal-50 text-teal-700',
      'Innovation': 'bg-pink-50 text-pink-700'
    };
    return colors[category] || 'bg-gray-50 text-gray-700';
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
              <span className="text-sm tracking-wide">INVESTOR NEWS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Latest Updates & Announcements
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Stay informed with EDIF Pharma's latest news, financial results, and corporate developments.
              Access press releases, market insights, and investor presentations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">FEATURED</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Latest News
            </h2>
          </motion.div>

          {newsArticles.filter(article => article.featured).map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-[var(--brand-blue)] to-[#0a3a72] text-white p-8 md:p-12 mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 ${getCategoryColor(article.category)} text-xs font-medium`}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-4">{article.title}</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                    <span>Read Full Release</span>
                    <ExternalLink size={16} strokeWidth={2} />
                  </button>
                </div>
                <div className="w-24 h-24 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Newspaper className="text-white" size={32} strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Articles */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">PRESS RELEASES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              All Press Releases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Newspaper className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-block px-2 py-1 ${getCategoryColor(article.category)} text-xs font-medium`}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--text-900)]/60 text-sm">
                        <Calendar size={12} strokeWidth={2} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-3">{article.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-1 text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                      <span>Read More</span>
                      <ExternalLink size={14} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>View All Press Releases</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">MARKET INSIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Industry & Market Updates
            </h2>
          </motion.div>

          <div className="space-y-6">
            {marketUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium">
                        {update.source}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--text-900)]/60 text-sm">
                        <Calendar size={14} strokeWidth={2} />
                        <span>{update.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{update.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                      {update.excerpt}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150">
                    <span>Read Analysis</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">PRESENTATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Investor Presentations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {presentations.map((presentation, index) => (
              <motion.div
                key={presentation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="w-14 h-14 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                  <TrendingUp className="text-[var(--brand-blue)]" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{presentation.title}</h3>
                <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60 mb-3">
                  <Calendar size={14} strokeWidth={2} />
                  <span>{presentation.date}</span>
                </div>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed mb-4">
                  {presentation.description}
                </p>
                <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150 w-full">
                  <Download size={16} strokeWidth={2} />
                  <span>Download PDF</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSS Feeds */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">RSS FEEDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Subscribe to our RSS feeds to receive automatic updates on company news and financial information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {rssFeeds.map((feed, index) => (
              <motion.div
                key={feed.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{feed.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 mb-4">{feed.description}</p>
                <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                  Subscribe to Feed →
                </button>
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
              Media & Press Inquiries
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              For press releases, media interviews, or additional information about EDIF Pharma.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Media Relations</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
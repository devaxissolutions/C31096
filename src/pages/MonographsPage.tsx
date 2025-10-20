import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, Download, FileText, Pill, Activity, Heart, Shield, AlertTriangle, Clock, CheckCircle, Eye, Star } from 'lucide-react';

export function MonographsPage() {
  const monographs = [
    {
      id: 'cardio-001',
      title: 'CardioVita™ (Amlodipine Besylate)',
      category: 'Cardiovascular',
      type: 'Prescribing Information',
      lastUpdated: 'October 2025',
      status: 'Current',
      pages: 24,
      featured: true
    },
    {
      id: 'diabetes-001',
      title: 'GlucoNorm™ (Metformin HCl)',
      category: 'Anti-Diabetic',
      type: 'Prescribing Information',
      lastUpdated: 'September 2025',
      status: 'Current',
      pages: 28,
      featured: true
    },
    {
      id: 'antibiotic-001',
      title: 'BactroShield™ (Amoxicillin)',
      category: 'Antibiotics',
      type: 'Prescribing Information',
      lastUpdated: 'October 2025',
      status: 'Current',
      pages: 22,
      featured: true
    },
    {
      id: 'pain-001',
      title: 'PainRelief™ (Ibuprofen)',
      category: 'Pain Management',
      type: 'Prescribing Information',
      lastUpdated: 'August 2025',
      status: 'Current',
      pages: 20,
      featured: false
    },
    {
      id: 'cardio-002',
      title: 'HeartGuard™ (Lisinopril)',
      category: 'Cardiovascular',
      type: 'Prescribing Information',
      lastUpdated: 'September 2025',
      status: 'Current',
      pages: 26,
      featured: false
    },
    {
      id: 'diabetes-002',
      title: 'InsuBoost™ (Glimepiride)',
      category: 'Anti-Diabetic',
      type: 'Prescribing Information',
      lastUpdated: 'July 2025',
      status: 'Current',
      pages: 18,
      featured: false
    }
  ];

  const categories = [
    { name: 'All Categories', count: 15, icon: FileText },
    { name: 'Cardiovascular', count: 5, icon: Heart },
    { name: 'Anti-Diabetic', count: 3, icon: Activity },
    { name: 'Antibiotics', count: 4, icon: Shield },
    { name: 'Pain Management', count: 3, icon: Pill }
  ];

  const recentUpdates = [
    {
      title: 'Updated CardioVita™ Monograph',
      description: 'Revised dosing guidelines and contraindications',
      date: 'October 15, 2025',
      type: 'Safety Update'
    },
    {
      title: 'New BactroShield™ Formulation',
      description: 'Extended-release formulation now available',
      date: 'October 10, 2025',
      type: 'Product Update'
    },
    {
      title: 'GlucoNorm™ Pediatric Dosing',
      description: 'New pediatric dosing information added',
      date: 'September 28, 2025',
      type: 'Label Update'
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      'Cardiovascular': Heart,
      'Anti-Diabetic': Activity,
      'Antibiotics': Shield,
      'Pain Management': Pill
    };
    return icons[category] || FileText;
  };

  const getStatusColor = (status: string) => {
    return status === 'Current' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700';
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
              <span className="text-sm tracking-wide">PRESCRIBING INFORMATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Product Monographs
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive prescribing information, including indications, dosage,
              contraindications, warnings, and full product labeling for all EDIF Pharma medications.
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
                  placeholder="Search monographs by product name, active ingredient, or indication..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Categories</option>
                <option>Cardiovascular</option>
                <option>Anti-Diabetic</option>
                <option>Antibiotics</option>
                <option>Pain Management</option>
              </select>
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent">
                <option>All Types</option>
                <option>Prescribing Information</option>
                <option>Patient Information</option>
                <option>Medication Guide</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-3 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 transition-colors duration-150">
                <Filter size={16} strokeWidth={2} />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-4 py-3 bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5 transition-colors duration-150"
              >
                <category.icon className="text-[var(--brand-blue)]" size={18} strokeWidth={2} />
                <span className="text-sm text-[var(--text-900)] font-medium">{category.name}</span>
                <span className="text-xs text-[var(--text-900)]/60 bg-[var(--brand-blue)]/10 px-2 py-1">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Monographs */}
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
              Most Accessed Monographs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monographs.filter(m => m.featured).map((monograph, index) => {
              const CategoryIcon = getCategoryIcon(monograph.category);
              return (
                <motion.div
                  key={monograph.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon size={24} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-2 py-1 ${getStatusColor(monograph.status)} text-xs font-medium`}>
                          {monograph.status}
                        </span>
                        <span className="text-xs text-white/80">{monograph.type}</span>
                      </div>
                      <h3 className="text-lg mb-2">{monograph.title}</h3>
                      <p className="text-sm text-white/80 mb-3">{monograph.category}</p>
                      <div className="flex items-center gap-4 text-xs text-white/70">
                        <span>Updated {monograph.lastUpdated}</span>
                        <span>{monograph.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                      View Online
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 text-sm transition-colors duration-150">
                      <Download size={16} strokeWidth={2} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Monographs */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">ALL MONOGRAPHS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Complete Product Library
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {monographs.map((monograph, index) => {
              const CategoryIcon = getCategoryIcon(monograph.category);
              return (
                <motion.div
                  key={monograph.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-[var(--border-color)] p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-2 py-1 ${getStatusColor(monograph.status)} text-xs font-medium`}>
                          {monograph.status}
                        </span>
                        <span className="text-xs text-[var(--text-900)]/60">{monograph.type}</span>
                      </div>
                      <h3 className="text-lg text-[var(--text-900)] mb-1">{monograph.title}</h3>
                      <p className="text-sm text-[var(--text-900)]/70 mb-2">{monograph.category}</p>
                      <div className="flex items-center gap-4 text-xs text-[var(--text-900)]/60">
                        <span>Updated {monograph.lastUpdated}</span>
                        <span>{monograph.pages} pages</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                      View Online
                    </button>
                    <button className="bg-[var(--brand-blue)]/10 hover:bg-[var(--brand-blue)]/20 px-4 py-2 text-sm text-[var(--brand-blue)] transition-colors duration-150">
                      <Download size={16} strokeWidth={2} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Load More Monographs</span>
            </button>
          </motion.div>
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
              Latest Monograph Updates
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
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{update.description}</p>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60">
                      <Clock size={14} strokeWidth={2} />
                      <span>{update.date}</span>
                    </div>
                  </div>
                  <button className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                    View Changes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Need Help Finding Information?
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Can't find the prescribing information you need? Contact our medical information team
              for assistance with product monographs and prescribing guidelines.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Medical Information</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
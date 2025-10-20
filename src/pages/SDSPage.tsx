import { motion } from 'framer-motion';
import { FileText, Download, Search, AlertTriangle, Shield, Eye, Package, Beaker, Activity, Pill, Heart, Stethoscope, Filter, Calendar } from 'lucide-react';

export function SDSPage() {
  const sdsDocuments = [
    {
      id: 'sds-001',
      productName: 'CardioVita™ (Amlodipine Besylate)',
      casNumber: '88150-42-9',
      category: 'Cardiovascular',
      revisionDate: 'October 2025',
      format: 'PDF',
      language: 'English',
      featured: true
    },
    {
      id: 'sds-002',
      productName: 'GlucoNorm™ (Metformin HCl)',
      casNumber: '1115-70-4',
      category: 'Anti-Diabetic',
      revisionDate: 'September 2025',
      format: 'PDF',
      language: 'English',
      featured: true
    },
    {
      id: 'sds-003',
      productName: 'BactroShield™ (Amoxicillin)',
      casNumber: '26787-78-0',
      category: 'Antibiotics',
      revisionDate: 'October 2025',
      format: 'PDF',
      language: 'English',
      featured: true
    },
    {
      id: 'sds-004',
      productName: 'PainRelief™ (Ibuprofen)',
      casNumber: '15687-27-1',
      category: 'Pain Management',
      revisionDate: 'August 2025',
      format: 'PDF',
      language: 'English',
      featured: false
    },
    {
      id: 'sds-005',
      productName: 'HeartGuard™ (Lisinopril)',
      casNumber: '83915-83-7',
      category: 'Cardiovascular',
      revisionDate: 'September 2025',
      format: 'PDF',
      language: 'English',
      featured: false
    },
    {
      id: 'sds-006',
      productName: 'InsuBoost™ (Glimepiride)',
      casNumber: '93479-97-1',
      category: 'Anti-Diabetic',
      revisionDate: 'July 2025',
      format: 'PDF',
      language: 'English',
      featured: false
    }
  ];

  const sdsSections = [
    {
      number: '1',
      title: 'Identification',
      description: 'Product identifier, manufacturer details, and recommended use',
      icon: FileText
    },
    {
      number: '2',
      title: 'Hazard Identification',
      description: 'Hazard classification, label elements, and precautionary statements',
      icon: AlertTriangle
    },
    {
      number: '3',
      title: 'Composition/Information on Ingredients',
      description: 'Chemical name, synonyms, and CAS numbers',
      icon: Beaker
    },
    {
      number: '4',
      title: 'First-Aid Measures',
      description: 'Emergency treatment and medical attention procedures',
      icon: Heart
    },
    {
      number: '5',
      title: 'Fire-Fighting Measures',
      description: 'Suitable extinguishing media and protective equipment',
      icon: Shield
    },
    {
      number: '6',
      title: 'Accidental Release Measures',
      description: 'Containment, cleanup, and disposal procedures',
      icon: Package
    },
    {
      number: '7',
      title: 'Handling and Storage',
      description: 'Safe handling practices and storage conditions',
      icon: Activity
    },
    {
      number: '8',
      title: 'Exposure Controls/Personal Protection',
      description: 'Occupational exposure limits and PPE requirements',
      icon: Shield
    },
    {
      number: '9',
      title: 'Physical and Chemical Properties',
      description: 'Appearance, odor, and other physical characteristics',
      icon: Eye
    },
    {
      number: '10',
      title: 'Stability and Reactivity',
      description: 'Chemical stability and possible hazardous reactions',
      icon: Beaker
    },
    {
      number: '11',
      title: 'Toxicological Information',
      description: 'Routes of exposure and toxicological data',
      icon: AlertTriangle
    },
    {
      number: '12',
      title: 'Ecological Information',
      description: 'Environmental impact and disposal considerations',
      icon: Shield
    },
    {
      number: '13',
      title: 'Disposal Considerations',
      description: 'Waste treatment and disposal methods',
      icon: Package
    },
    {
      number: '14',
      title: 'Transport Information',
      description: 'Shipping regulations and transport classifications',
      icon: Package
    },
    {
      number: '15',
      title: 'Regulatory Information',
      description: 'Safety, health, and environmental regulations',
      icon: FileText
    },
    {
      number: '16',
      title: 'Other Information',
      description: 'Additional important information and references',
      icon: FileText
    }
  ];

  const categories = [
    { name: 'All Products', count: 15, icon: FileText },
    { name: 'Cardiovascular', count: 5, icon: Heart },
    { name: 'Anti-Diabetic', count: 3, icon: Activity },
    { name: 'Antibiotics', count: 4, icon: Shield },
    { name: 'Pain Management', count: 3, icon: Pill }
  ];

  const recentUpdates = [
    {
      product: 'CardioVita™ (Amlodipine Besylate)',
      change: 'Updated storage conditions and stability information',
      date: 'October 15, 2025',
      type: 'Revision'
    },
    {
      product: 'BactroShield™ (Amoxicillin)',
      change: 'New handling precautions added for powder form',
      date: 'October 10, 2025',
      type: 'Update'
    },
    {
      product: 'GlucoNorm™ (Metformin HCl)',
      change: 'Revised first-aid measures section',
      date: 'September 28, 2025',
      type: 'Revision'
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">SAFETY DATA SHEETS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Safety Data Sheets (SDS)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access comprehensive Safety Data Sheets for all EDIF Pharma products,
              containing essential safety and handling information in accordance with
              global regulatory standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-orange-50 border-b border-orange-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-orange-50 border border-orange-200 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-orange-600 mt-0.5" size={20} strokeWidth={2} />
              <div>
                <h3 className="text-sm font-medium text-orange-800 mb-1">Professional Use Only</h3>
                <p className="text-sm text-orange-700">
                  Safety Data Sheets contain technical information intended for use by trained professionals.
                  For patient medication information, please visit our Patient Resources section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-900)]/40" size={20} strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search by product name, CAS number, or active ingredient..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Cardiovascular</option>
                <option>Anti-Diabetic</option>
                <option>Antibiotics</option>
                <option>Pain Management</option>
              </select>
              <select className="px-4 py-3 border border-[var(--border-color)] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Languages</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-3 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 transition-colors duration-150">
                <Filter size={16} strokeWidth={2} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-4 py-3 bg-white border border-[var(--border-color)] hover:border-orange-600 hover:bg-orange-50 transition-colors duration-150"
              >
                <category.icon className="text-orange-600" size={18} strokeWidth={2} />
                <span className="text-sm text-[var(--text-900)] font-medium">{category.name}</span>
                <span className="text-xs text-[var(--text-900)]/60 bg-orange-100 px-2 py-1">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured SDS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-orange-100 mb-4">
              <span className="text-sm text-orange-700 tracking-wide">FEATURED</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Most Accessed Safety Data Sheets
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sdsDocuments.filter(doc => doc.featured).map((document, index) => {
              const CategoryIcon = getCategoryIcon(document.category);
              return (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon size={24} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-white/20 text-white text-xs font-medium">
                          {document.category}
                        </span>
                        <span className="text-xs text-white/80">{document.format}</span>
                      </div>
                      <h3 className="text-lg mb-2">{document.productName}</h3>
                      <div className="space-y-1 text-xs text-white/70 mb-3">
                        <p>CAS: {document.casNumber}</p>
                        <p>Language: {document.language}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-white/70">
                        <Calendar size={12} strokeWidth={2} />
                        <span>Revised {document.revisionDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-white text-orange-600 hover:bg-white/90 active:bg-white/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
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

      {/* All SDS Documents */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-orange-100 mb-4">
              <span className="text-sm text-orange-700 tracking-wide">ALL SDS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Complete SDS Library
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {sdsDocuments.map((document, index) => {
              const CategoryIcon = getCategoryIcon(document.category);
              return (
                <motion.div
                  key={document.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-[var(--border-color)] p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="text-orange-600" size={20} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium">
                          {document.category}
                        </span>
                        <span className="text-xs text-[var(--text-900)]/60">{document.format}</span>
                      </div>
                      <h3 className="text-lg text-[var(--text-900)] mb-1">{document.productName}</h3>
                      <div className="space-y-1 text-xs text-[var(--text-900)]/60 mb-2">
                        <p>CAS: {document.casNumber}</p>
                        <p>Language: {document.language}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-900)]/60">
                        <Calendar size={12} strokeWidth={2} />
                        <span>Revised {document.revisionDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                      View Online
                    </button>
                    <button className="bg-orange-100 hover:bg-orange-200 px-4 py-2 text-sm text-orange-700 transition-colors duration-150">
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
            <button className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Load More SDS Documents</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SDS Structure */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-orange-100 mb-4">
              <span className="text-sm text-orange-700 tracking-wide">SDS STRUCTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Understanding SDS Sections
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Safety Data Sheets follow a standardized 16-section format according to
              global regulatory requirements (GHS/SDS standard).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdsSections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-700">{section.number}</span>
                  </div>
                  <div className="w-10 h-10 bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-orange-600" size={20} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{section.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-orange-100 mb-4">
              <span className="text-sm text-orange-700 tracking-wide">RECENT UPDATES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Latest SDS Revisions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={`${update.product}-${update.date}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[var(--text-900)]">{update.product}</h3>
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium">
                        {update.type}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-900)]/70 mb-2">{update.change}</p>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{update.date}</span>
                    </div>
                  </div>
                  <button className="bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                    View Changes
                  </button>
                </div>
              </motion.div>
            ))}
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
              Need Help with SDS?
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Can't find the Safety Data Sheet you need? Contact our safety team for assistance
              with SDS documents or safety-related inquiries.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Safety Team</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
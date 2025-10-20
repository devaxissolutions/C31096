import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, Printer, Share2, Eye, Package, Award, CheckCircle, Star } from 'lucide-react';

export function ProductCatalogPage() {
  const catalogSections = [
    {
      title: 'Complete Product Portfolio',
      description: 'Comprehensive catalog of all EDIF Pharma products with detailed specifications',
      pages: 120,
      size: '8.5 MB',
      format: 'PDF',
      lastUpdated: 'October 2025',
      downloads: '2,500+',
      features: ['Complete product list', 'Dosage information', 'Storage requirements', 'Regulatory status']
    },
    {
      title: 'Prescribing Information',
      description: 'Clinical prescribing guidelines and medication administration protocols',
      pages: 85,
      size: '6.2 MB',
      format: 'PDF',
      lastUpdated: 'October 2025',
      downloads: '1,800+',
      features: ['Indications & usage', 'Dosage & administration', 'Contraindications', 'Drug interactions']
    },
    {
      title: 'Clinical Data Compendium',
      description: 'Scientific and clinical evidence supporting our therapeutic products',
      pages: 200,
      size: '15.8 MB',
      format: 'PDF',
      lastUpdated: 'September 2025',
      downloads: '950+',
      features: ['Clinical trial results', 'Efficacy data', 'Safety profiles', 'Pharmacokinetics']
    },
    {
      title: 'Healthcare Professional Guide',
      description: 'Reference guide for healthcare professionals with product selection tools',
      pages: 65,
      size: '4.1 MB',
      format: 'PDF',
      lastUpdated: 'October 2025',
      downloads: '1,200+',
      features: ['Product selection guide', 'Patient counseling', 'Adverse event reporting', 'Contact information']
    }
  ];

  const therapeuticCatalogs = [
    {
      category: 'Cardiology',
      products: 12,
      description: 'Cardiovascular medications and heart health solutions',
      icon: '❤️',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      category: 'Anti-Diabetic',
      products: 8,
      description: 'Diabetes management and metabolic health products',
      icon: '🩸',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      category: 'Antibiotics',
      products: 15,
      description: 'Antimicrobial therapies and infection control',
      icon: '🛡️',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      category: 'Pain Management',
      products: 10,
      description: 'Analgesics and pain relief solutions',
      icon: '💊',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const catalogFeatures = [
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Access all catalogs instantly with secure download links'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share catalogs with colleagues and healthcare professionals'
    },
    {
      icon: Printer,
      title: 'Print Ready',
      description: 'High-quality PDFs optimized for professional printing'
    },
    {
      icon: Eye,
      title: 'Preview Available',
      description: 'Browse catalog contents before downloading'
    }
  ];

  const recentUpdates = [
    {
      date: 'October 15, 2025',
      update: 'Added 3 new antibiotic formulations with updated prescribing information'
    },
    {
      date: 'October 10, 2025',
      update: 'Updated clinical data for CardioGuard Plus with new Phase III trial results'
    },
    {
      date: 'October 5, 2025',
      update: 'Expanded pain management section with new analgesic combinations'
    },
    {
      date: 'September 28, 2025',
      update: 'Added regulatory updates for EU market approvals'
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
              <span className="text-sm tracking-wide">PROFESSIONAL RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Product Catalog
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Access comprehensive product documentation, clinical data, and prescribing information
              designed specifically for healthcare professionals. Our catalogs provide detailed
              specifications, usage guidelines, and scientific evidence to support informed
              clinical decision-making.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">45+</div>
                <div className="text-xs text-white/80">Products Listed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">470</div>
                <div className="text-xs text-white/80">Total Pages</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">6K+</div>
                <div className="text-xs text-white/80">Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-xs text-white/80">Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Catalogs */}
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
              <span className="text-sm tracking-wide">CATALOG DOWNLOADS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Professional Catalogs
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Download comprehensive catalogs containing detailed product information,
              clinical data, and prescribing guidelines for healthcare professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {catalogSections.map((catalog, index) => (
              <motion.div
                key={catalog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{catalog.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{catalog.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">
                      <FileText size={12} />
                      {catalog.format}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[var(--text-900)]">{catalog.pages}</div>
                    <div className="text-xs text-[var(--text-900)]/60">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[var(--text-900)]">{catalog.size}</div>
                    <div className="text-xs text-[var(--text-900)]/60">Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[var(--text-900)]">{catalog.downloads}</div>
                    <div className="text-xs text-[var(--text-900)]/60">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[var(--text-900)]">{catalog.lastUpdated.split(' ')[1]}</div>
                    <div className="text-xs text-[var(--text-900)]/60">Updated</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {catalog.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 text-sm transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button className="px-4 py-3 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] text-sm transition-colors flex items-center gap-2">
                    <Eye size={16} />
                    Preview
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Catalogs */}
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
              <span className="text-sm tracking-wide">SPECIALIZED CATALOGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Therapeutic Area Catalogs
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Specialized catalogs focused on specific therapeutic areas with detailed
              product information and clinical applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapeuticCatalogs.map((catalog, index) => (
              <motion.div
                key={catalog.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:shadow-lg transition-shadow text-center"
              >
                <div className={`w-16 h-16 ${catalog.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {catalog.icon}
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{catalog.category}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{catalog.products} Products</div>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{catalog.description}</p>
                <button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 text-sm transition-colors">
                  Download Catalog
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              <span className="text-sm tracking-wide">CATALOG FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Why Choose Our Catalogs
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our professional catalogs are designed with healthcare providers in mind,
              offering comprehensive information and user-friendly features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {catalogFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{feature.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
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
              <span className="text-sm tracking-wide">LATEST UPDATES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Recent Catalog Updates
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Stay current with the latest product information, clinical data,
              and regulatory updates in our catalogs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-indigo-200 p-6 rounded-lg flex items-start gap-4"
                >
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-sm text-indigo-600 font-medium mb-1">{update.date}</div>
                    <p className="text-[var(--text-900)]/70">{update.update}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Professional Resources at Your Fingertips
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access the most comprehensive and up-to-date product information
              to support your clinical practice and patient care decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Download size={16} />
                <span>DOWNLOAD ALL CATALOGS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Share2 size={16} />
                <span>SHARE WITH COLLEAGUES</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
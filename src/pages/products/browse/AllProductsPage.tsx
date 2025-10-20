import { motion } from 'framer-motion';
import { Package, Pill, Heart, Activity, Shield, Zap, Download, FileText, Award, TrendingUp, Users, Star } from 'lucide-react';

export function AllProductsPage() {
  const therapeuticAreas = [
    {
      name: 'Cardiology',
      count: 12,
      description: 'Comprehensive cardiovascular solutions for heart health',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Anti-Diabetic',
      count: 8,
      description: 'Advanced diabetes management and metabolic health products',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Antibiotics',
      count: 15,
      description: 'Broad-spectrum antimicrobial therapies and infection control',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Pain Management',
      count: 10,
      description: 'Effective analgesics and pain relief solutions',
      icon: Pill,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const featuredProducts = [
    {
      name: 'CardioGuard Plus',
      category: 'Cardiology',
      description: 'Advanced cardiovascular protection with novel therapeutic compounds',
      status: 'Market Leader',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'DiabeCare Pro',
      category: 'Anti-Diabetic',
      description: 'Next-generation diabetes management with improved glycemic control',
      status: 'Innovative',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'AntiBact Forte',
      category: 'Antibiotics',
      description: 'Broad-spectrum antibiotic with enhanced efficacy against resistant strains',
      status: 'Essential',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      name: 'PainRelief Max',
      category: 'Pain Management',
      description: 'Advanced analgesic formulation for comprehensive pain management',
      status: 'Trusted',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const productStats = [
    { metric: '45+', label: 'Active Products' },
    { metric: '12', label: 'Therapeutic Areas' },
    { metric: '50+', label: 'Countries' },
    { metric: '10M+', label: 'Patients Served' },
    { metric: '98%', label: 'Quality Compliance' },
    { metric: '24/7', label: 'Medical Support' }
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
              <span className="text-sm tracking-wide">COMPLETE PRODUCT PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              All Products
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Discover our comprehensive pharmaceutical portfolio spanning multiple therapeutic areas.
              Each product is developed with rigorous scientific standards, ensuring safety,
              efficacy, and therapeutic innovation for healthcare professionals and patients worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {productStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{stat.metric}</div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Areas */}
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
              <span className="text-sm tracking-wide">THERAPEUTIC EXCELLENCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Therapeutic Areas
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our products address critical healthcare needs across major therapeutic categories,
              backed by extensive clinical research and regulatory approval.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors text-center"
              >
                <div className={`w-16 h-16 ${area.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className={`text-2xl ${area.color}`} />
                </div>
                <h3 className="text-xl text-[var(--text-900)] mb-2">{area.name}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{area.count} Products</div>
                <p className="text-[var(--text-900)]/70 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
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
              <span className="text-sm tracking-wide">FEATURED PRODUCTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Market Leaders & Innovations
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Explore our flagship products that set industry standards for quality,
              efficacy, and therapeutic innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      product.status === 'Market Leader' ? 'bg-green-50 text-green-700' :
                      product.status === 'Innovative' ? 'bg-blue-50 text-blue-700' :
                      product.status === 'Essential' ? 'bg-purple-50 text-purple-700' :
                      'bg-orange-50 text-orange-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-indigo-600 font-medium mb-2">{product.category}</div>
                  <h3 className="text-lg text-[var(--text-900)] mb-3">{product.name}</h3>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{product.description}</p>
                  <button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
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
              <span className="text-sm tracking-wide">PRODUCT CATEGORIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Navigate our extensive product portfolio organized by therapeutic focus
              and clinical application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prescription Medications',
                description: 'High-quality pharmaceuticals requiring medical prescription',
                count: '35+ Products',
                features: ['Clinical efficacy', 'Safety profiles', 'Regulatory compliance']
              },
              {
                title: 'Over-the-Counter Solutions',
                description: 'Accessible healthcare products for self-care and wellness',
                count: '10+ Products',
                features: ['Easy access', 'Proven safety', 'Consumer education']
              },
              {
                title: 'Specialty Pharmaceuticals',
                description: 'Advanced therapies for complex medical conditions',
                count: '8+ Products',
                features: ['Targeted treatments', 'Personalized medicine', 'Clinical monitoring']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-2">{category.title}</h3>
                <div className="text-indigo-600 font-semibold mb-3">{category.count}</div>
                <p className="text-[var(--text-900)]/70 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <Star size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            <Package className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Explore Our Complete Portfolio
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Access detailed product information, prescribing guidelines, and clinical data
              to support your healthcare practice and patient care decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Download size={16} />
                <span>DOWNLOAD CATALOG</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>CONTACT MEDICAL AFFAIRS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
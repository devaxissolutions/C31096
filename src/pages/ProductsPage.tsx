import { motion } from 'framer-motion';
import { TherapeuticAreas } from '../components/common/TherapeuticAreas';
import { ProductSearch } from '../components/common/ProductSearch';
import { Package, Pill, ShieldCheck, Globe } from 'lucide-react';

interface ProductsPageProps {
  onProductClick: (productId: string) => void;
  onViewAllProducts: () => void;
}

export function ProductsPage({ onProductClick, onViewAllProducts }: ProductsPageProps) {
  const productStats = [
    {
      icon: Package,
      value: '150+',
      label: 'Product Portfolio',
    },
    {
      icon: Pill,
      value: '8',
      label: 'Therapeutic Areas',
    },
    {
      icon: ShieldCheck,
      value: 'WHO-GMP',
      label: 'Certified Quality',
    },
    {
      icon: Globe,
      value: '45+',
      label: 'Countries Served',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="products-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Pharmaceutical Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive pharmaceutical portfolio covering multiple therapeutic areas with 
              WHO-GMP certified quality standards for global markets.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {productStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <Icon size={28} className="text-white mx-auto mb-3" />
                  <div className="text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <TherapeuticAreas />

      {/* Product Catalog Section */}
      <ProductSearch
        onProductClick={onProductClick}
        onViewAll={onViewAllProducts}
      />

      {/* Product Quality Section */}
      <section className="bg-[var(--surface)] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-6">
              Quality Assurance
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
              Every product undergoes rigorous quality control to ensure safety, efficacy, 
              and compliance with international pharmaceutical standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'WHO-GMP Certified',
                description: 'All manufacturing facilities certified to WHO Good Manufacturing Practice standards',
              },
              {
                title: 'Regulatory Compliance',
                description: 'Products approved by major regulatory authorities including US FDA, EMA, and MHRA',
              },
              {
                title: 'Quality Testing',
                description: 'Comprehensive testing protocols ensuring product quality, stability, and safety',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-xl border border-[var(--border-color)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <ShieldCheck size={40} className="text-[var(--brand-blue)] mb-4" />
                <h3 className="text-xl text-[var(--text-900)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-900)] opacity-70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

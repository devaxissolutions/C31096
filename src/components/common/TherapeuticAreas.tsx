import { Heart, Brain, Activity, Droplets, Shield, Pill } from 'lucide-react';
import { motion } from 'framer-motion';

export function TherapeuticAreas() {
  const areas = [
    {
      icon: Heart,
      name: 'Cardiovascular',
      description: 'Comprehensive solutions for heart health',
      products: 24,
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Advanced neurological treatments',
      products: 18,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
    },
    {
      icon: Activity,
      name: 'Metabolic',
      description: 'Diabetes and metabolic disorders',
      products: 21,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Droplets,
      name: 'Infectious Disease',
      description: 'Antibiotics and antiviral therapies',
      products: 32,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: Shield,
      name: 'Immunology',
      description: 'Immune system support',
      products: 15,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      icon: Pill,
      name: 'Pain Management',
      description: 'Analgesics and anti-inflammatory',
      products: 19,
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Therapeutic Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              Comprehensive Treatment Solutions
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Specialized pharmaceutical solutions across major therapeutic areas, 
              backed by rigorous research and clinical validation.
            </p>
          </motion.div>
        </div>

        {/* Therapeutic Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-[var(--border-color)] rounded-2xl p-8 hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl text-[var(--text-900)]">{area.name}</h3>
                  <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Products Count */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex-1 h-1 bg-gradient-to-r from-[var(--border-color)] to-transparent rounded-full" />
                    <span className="text-sm text-[var(--brand-blue)]">
                      {area.products} products
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="#products"
            className="inline-flex items-center gap-2 text-[var(--brand-blue)] hover:gap-3 transition-all duration-200"
          >
            <span>View all therapeutic areas</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { Microscope, Factory, Shield, FlaskConical, Package, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ManufacturingSnapshot() {
  const steps = [
    {
      icon: FlaskConical,
      label: 'R&D',
      description: 'Research & formulation development with cutting-edge technology',
      number: '01',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Factory,
      label: 'GMP Manufacturing',
      description: 'WHO-GMP certified production facilities with automated systems',
      number: '02',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Shield,
      label: 'Quality Control',
      description: 'Rigorous testing and validation at every stage',
      number: '03',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Package,
      label: 'Packaging',
      description: 'Advanced packaging with tamper-proof seals',
      number: '04',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Truck,
      label: 'Distribution',
      description: 'Cold-chain logistics and global delivery network',
      number: '05',
      gradient: 'from-red-500 to-red-600',
    },
  ];

  const facilities = [
    { name: 'Solid Dosage', capacity: '500M units/year' },
    { name: 'Liquid Formulations', capacity: '50M bottles/year' },
    { name: 'Injectable', capacity: '25M vials/year' },
  ];

  return (
    <section className="bg-gradient-to-br from-[var(--surface)] via-white to-[var(--surface)] py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mfg-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="var(--brand-blue)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mfg-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Manufacturing Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              From Lab to Patient
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Our end-to-end pharmaceutical process ensures quality, safety, 
              and efficacy at every step.
            </p>
          </motion.div>
        </div>

        {/* Process Flow */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-[var(--brand-blue)] rounded-full flex items-center justify-center z-10">
                  <span className="text-xs text-[var(--brand-blue)]">{step.number}</span>
                </div>

                {/* Icon Circle */}
                <div className="relative inline-flex flex-col items-center">
                  <motion.div 
                    className={`w-32 h-32 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon size={40} className="text-white" aria-hidden="true" />
                  </motion.div>
                  
                  <h3 className="text-lg text-[var(--text-900)] mb-2">
                    {step.label}
                  </h3>
                  <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-0">
                    <ArrowRight className="text-[var(--border-color)]" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Manufacturing Facilities */}
        <motion.div
          className="bg-white border border-[var(--border-color)] rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl text-[var(--brand-blue)] mb-2">Production Capacity</h3>
            <p className="text-[var(--text-900)] opacity-60">State-of-the-art facilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl text-center hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl text-[var(--brand-blue)] mb-2">{facility.capacity}</div>
                <div className="text-sm text-[var(--text-900)] opacity-60">{facility.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#manufacturing"
            className="inline-flex items-center gap-2 text-[var(--brand-blue)] hover:gap-3 transition-all duration-200 group"
          >
            <span>Explore Our Facilities</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { Button } from '../ui/button';
import { Shield, Award, Globe, ArrowRight, CheckCircle2, Factory, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroRedesignProps {
  onExploreProducts: () => void;
  onRequestSample: () => void;
}

export function HeroRedesign({ onExploreProducts, onRequestSample }: HeroRedesignProps) {
  const stats = [
    { value: '150+', label: 'Products', icon: Sparkles },
    { value: '45+', label: 'Countries', icon: Globe },
    { value: '25+', label: 'Years', icon: Award },
    { value: '3', label: 'WHO-GMP Facilities', icon: Factory },
  ];

  const certifications = [
    { name: 'WHO-GMP', verified: true },
    { name: 'ISO 9001:2015', verified: true },
    { name: 'ISO 14001:2015', verified: true },
    { name: 'OHSAS 18001', verified: true },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[var(--surface)] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--brand-blue)]/20 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[var(--brand-blue)]">Trusted by healthcare professionals worldwide</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--brand-blue)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Trusted Medicines,
                <span className="block mt-2 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--accent-red)] bg-clip-text text-transparent">
                  Engineered to Heal
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg text-[var(--text-900)] opacity-70 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                WHO-GMP certified pharmaceutical excellence. From research to delivery, 
                we ensure every product meets the highest global standards.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 text-white px-8 py-4 text-sm tracking-wide transition-colors duration-150 group"
                aria-label="Explore products"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={16} strokeWidth={2} />
              </button>
              <button
                onClick={onRequestSample}
                className="inline-flex items-center justify-center border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5 active:bg-[var(--brand-blue)]/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150"
                aria-label="Request a sample"
              >
                REQUEST SAMPLE
              </button>
            </motion.div>

            {/* Quick Certifications */}
            <motion.div 
              className="flex flex-wrap items-center gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--border-color)] rounded-full text-sm"
                >
                  <CheckCircle2 size={14} className="text-green-600" />
                  <span className="text-[var(--text-900)]">{cert.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000"
                alt="Modern pharmaceutical manufacturing facility"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[var(--border-color)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl text-[var(--brand-blue)]">99.8%</div>
                  <div className="text-sm text-[var(--text-900)] opacity-60">Quality Score</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-[var(--border-color)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-[var(--brand-blue)]" size={24} />
                </div>
                <div>
                  <div className="text-2xl text-[var(--brand-blue)]">2M+</div>
                  <div className="text-sm text-[var(--text-900)] opacity-60">Patients Served</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-16 pt-12 border-t border-[var(--border-color)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--accent-red)]/10 rounded-xl group-hover:from-[var(--brand-blue)]/20 group-hover:to-[var(--accent-red)]/20 transition-all">
                  <stat.icon className="text-[var(--brand-blue)]" size={24} />
                </div>
                <div className="text-3xl text-[var(--brand-blue)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--text-900)] opacity-60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

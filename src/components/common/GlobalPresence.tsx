import { Globe, MapPin, TrendingUp, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export function GlobalPresence() {
  const regions = [
    { name: 'Asia Pacific', countries: 18, growth: '+24%' },
    { name: 'Middle East & Africa', countries: 15, growth: '+18%' },
    { name: 'Europe', countries: 8, growth: '+12%' },
    { name: 'Latin America', countries: 4, growth: '+32%' },
  ];

  const highlights = [
    { value: '45+', label: 'Countries Served', icon: Globe },
    { value: '12', label: 'Distribution Centers', icon: MapPin },
    { value: '98%', label: 'On-Time Delivery', icon: Package },
    { value: '22%', label: 'YoY Growth', icon: TrendingUp },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--surface)] via-white to-[var(--surface)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-6">
              <span className="text-sm text-[var(--brand-blue)]">Global Reach</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-6">
              Delivering Healthcare Excellence Worldwide
            </h2>
            
            <p className="text-lg text-[var(--text-900)] opacity-70 mb-8 leading-relaxed">
              Our pharmaceutical products reach patients across continents, supported by 
              a robust distribution network and strategic partnerships with leading 
              healthcare institutions.
            </p>

            {/* Regional Breakdown */}
            <div className="space-y-4 mb-10">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white border border-[var(--border-color)] rounded-xl hover:border-[var(--brand-blue)]/30 hover:shadow-md transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full" />
                    <span className="text-[var(--text-900)]">{region.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[var(--text-900)] opacity-60">
                      {region.countries} countries
                    </span>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {region.growth}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white border border-[var(--border-color)] rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="text-[var(--brand-blue)] mb-2" size={20} />
                  <div className="text-2xl text-[var(--brand-blue)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--text-900)] opacity-60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--accent-red)]/5 rounded-3xl p-8 overflow-hidden">
              {/* Simplified World Map Illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                <circle cx="200" cy="200" r="180" stroke="var(--brand-blue)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <circle cx="200" cy="200" r="140" stroke="var(--brand-blue)" strokeWidth="1" fill="none" strokeDasharray="3,3" />
                <circle cx="200" cy="200" r="100" stroke="var(--brand-blue)" strokeWidth="1" fill="none" strokeDasharray="3,3" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="var(--brand-blue)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="200" y1="20" x2="200" y2="380" stroke="var(--brand-blue)" strokeWidth="1" strokeDasharray="3,3" />
              </svg>

              {/* Animated Points */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-[var(--accent-red)] rounded-full shadow-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0 }}
              />
              <motion.div
                className="absolute top-1/3 right-1/4 w-4 h-4 bg-[var(--accent-red)] rounded-full shadow-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[var(--accent-red)] rounded-full shadow-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-[var(--accent-red)] rounded-full shadow-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
              />

              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--accent-red)] rounded-full flex items-center justify-center shadow-2xl">
                  <Globe className="text-white" size={32} />
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                <line x1="75%" y1="33%" x2="50%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
                <line x1="66%" y1="75%" x2="50%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
              </svg>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white border border-[var(--border-color)] rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl text-[var(--brand-blue)] mb-1">2M+</div>
                <div className="text-sm text-[var(--text-900)] opacity-60">Patients Served</div>
                <div className="text-xs text-green-600 mt-1">Annually</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

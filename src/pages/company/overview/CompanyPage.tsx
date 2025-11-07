import { motion } from 'framer-motion';
import { AboutUs } from '../../../components/common/AboutUs';
import { Gallery } from '../../../components/common/Gallery';
import { GlobalPresence } from '../../../components/common/GlobalPresence';
import { Building2, Users, Globe, Award } from 'lucide-react';

export function CompanyPage() {
  const companyStats = [
    {
      icon: Building2,
      value: '3',
      label: 'WHO-GMP Facilities',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Employees',
    },
    {
      icon: Globe,
      value: '45+',
      label: 'Countries',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Years of Excellence',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="company-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#company-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Company Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              About PharmaCorp
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A trusted pharmaceutical leader committed to improving global healthcare through 
              quality medicines, innovative solutions, and sustainable practices.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {companyStats.map((stat, index) => {
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

      {/* About Us Section */}
      <AboutUs />

      {/* Global Presence Section */}
      <GlobalPresence />

      {/* Gallery Section */}
      <Gallery />

      {/* Company Values Highlight */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to delivering high-quality pharmaceutical products that make a 
              meaningful difference in patients' lives around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'Unwavering commitment to WHO-GMP standards and pharmaceutical excellence',
              },
              {
                title: 'Patient-Centric',
                description: 'Every decision guided by improving patient outcomes and healthcare access',
              },
              {
                title: 'Sustainable Growth',
                description: 'Building a sustainable future through responsible manufacturing and innovation',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

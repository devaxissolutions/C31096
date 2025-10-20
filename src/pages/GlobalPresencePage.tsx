import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users, Factory, Award, Truck, Phone, Mail } from 'lucide-react';

export function GlobalPresencePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const regions = [
    {
      name: 'North America',
      countries: ['United States', 'Canada', 'Mexico'],
      facilities: ['R&D Center (Boston, MA)', 'Manufacturing (Chicago, IL)', 'Distribution Hub (Dallas, TX)'],
      employees: '2,500+',
      keyFacts: ['FDA-approved facilities', 'Leading biotech cluster', 'Strategic partnerships']
    },
    {
      name: 'Europe',
      countries: ['Germany', 'United Kingdom', 'Switzerland', 'France', 'Italy'],
      facilities: ['European HQ (Frankfurt)', 'Manufacturing (Milan)', 'Clinical Research Center (London)'],
      employees: '1,800+',
      keyFacts: ['EMA certified', 'EU GMP compliant', 'Research collaborations']
    },
    {
      name: 'Asia Pacific',
      countries: ['Japan', 'China', 'India', 'South Korea', 'Australia'],
      facilities: ['Asia Pacific HQ (Singapore)', 'Manufacturing (Hyderabad)', 'R&D Center (Tokyo)'],
      employees: '3,200+',
      keyFacts: ['PMDA approved', 'NMPA certified', 'Growing markets']
    },
    {
      name: 'Latin America',
      countries: ['Brazil', 'Argentina', 'Colombia', 'Chile'],
      facilities: ['Regional Office (São Paulo)', 'Manufacturing (Buenos Aires)', 'Distribution Center (Bogotá)'],
      employees: '950+',
      keyFacts: ['ANVISA certified', 'Regional partnerships', 'Market expansion']
    },
    {
      name: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Egypt'],
      facilities: ['Middle East HQ (Dubai)', 'Manufacturing (Johannesburg)', 'Distribution Hub (Cairo)'],
      employees: '750+',
      keyFacts: ['GCC approvals', 'Regional expertise', 'Healthcare partnerships']
    }
  ];

  const globalStats = [
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '8,200+', label: 'Employees Worldwide', icon: Users },
    { number: '15', label: 'Manufacturing Sites', icon: Factory },
    { number: '150+', label: 'Distribution Partners', icon: Truck }
  ];

  const partnerships = [
    {
      type: 'Academic',
      description: 'Collaborations with leading universities and research institutions worldwide',
      partners: ['Harvard Medical School', 'University of Cambridge', 'National University of Singapore']
    },
    {
      type: 'Industry',
      description: 'Strategic alliances with biotech companies and pharmaceutical manufacturers',
      partners: ['BioTech Solutions', 'PharmaCorp International', 'Global Health Systems']
    },
    {
      type: 'Healthcare',
      description: 'Partnerships with hospitals, clinics, and healthcare providers globally',
      partners: ['Mayo Clinic Network', 'Cleveland Clinic', 'Singapore General Hospital']
    }
  ];

  const contactOffices = [
    {
      region: 'Americas',
      city: 'Boston, MA',
      address: '123 Innovation Drive, Cambridge, MA 02139',
      phone: '+1 (617) 555-0123',
      email: 'americas@edifpharma.com'
    },
    {
      region: 'Europe',
      city: 'Frankfurt, Germany',
      address: 'Musterstraße 45, 60313 Frankfurt am Main',
      phone: '+49 69 555 0123',
      email: 'europe@edifpharma.com'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '1 Marina Boulevard, #28-00, Singapore 018989',
      phone: '+65 6555 0123',
      email: 'asiapacific@edifpharma.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              Global Presence
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Connecting healthcare communities worldwide through innovation, collaboration,
              and a commitment to improving patient outcomes globally.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Global Stats */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[var(--brand-blue)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--text-600)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Our Global Footprint
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Strategic locations across continents enabling us to serve healthcare needs worldwide
              with localized expertise and global capabilities.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="text-2xl font-bold text-[var(--text-900)] mb-3">
                      {region.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[var(--brand-blue)] font-medium mb-3">
                      <Users className="w-4 h-4" />
                      <span>{region.employees} employees</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, countryIndex) => (
                        <span
                          key={countryIndex}
                          className="px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-sm rounded-full"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[var(--text-900)] mb-3">Key Facilities</h4>
                      <ul className="space-y-2">
                        {region.facilities.map((facility, facilityIndex) => (
                          <li key={facilityIndex} className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                            <MapPin className="w-3 h-3 text-[var(--brand-blue)] flex-shrink-0" />
                            <span>{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--text-900)] mb-3">Regional Strengths</h4>
                      <ul className="space-y-2">
                        {region.keyFacts.map((fact, factIndex) => (
                          <li key={factIndex} className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                            <Award className="w-3 h-3 text-[var(--accent-green)] flex-shrink-0" />
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Global Partnerships
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Building collaborative networks to advance healthcare innovation and improve patient outcomes worldwide.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">
                  {partnership.type} Partnerships
                </h3>
                <p className="text-[var(--text-600)] text-sm mb-4">
                  {partnership.description}
                </p>
                <div className="space-y-2">
                  {partnership.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full" />
                      <span className="text-sm text-[var(--text-600)]">{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Offices */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Regional Contact Offices
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Connect with our regional teams for localized support and partnership opportunities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactOffices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">
                  {office.region}
                </h3>
                <p className="text-[var(--brand-blue)] font-medium mb-3">
                  {office.city}
                </p>
                <p className="text-[var(--text-600)] text-sm mb-4 leading-relaxed">
                  {office.address}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Partner with Us Globally
            </h2>
            <p className="text-lg text-[var(--text-600)] mb-8">
              Join our worldwide network of healthcare partners working together to advance medical innovation
              and improve patient care across the globe.
            </p>
            <button className="px-8 py-4 bg-[var(--brand-blue)] text-white font-semibold rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
              Explore Partnership Opportunities
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
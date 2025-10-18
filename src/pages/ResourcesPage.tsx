import { motion } from 'framer-motion';
import { HCPResources } from '../components/common/HCPResources';
import { PatientResources } from '../components/common/PatientResources';
import { ResourcesSection } from '../components/common/ResourcesSection';
import { Stethoscope, HeartPulse, BookOpen, FileText } from 'lucide-react';

export function ResourcesPage() {
  const resourceStats = [
    {
      icon: Stethoscope,
      value: '100+',
      label: 'HCP Resources',
    },
    {
      icon: HeartPulse,
      value: '50+',
      label: 'Patient Guides',
    },
    {
      icon: BookOpen,
      value: '25+',
      label: 'CME Programs',
    },
    {
      icon: FileText,
      value: '200+',
      label: 'Documents',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="resources-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#resources-hero-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-[var(--radius-button)] mb-4">
              <span className="text-sm text-white">Education & Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Resources & Support
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive resources for healthcare professionals, patients, and caregivers 
              including clinical data, educational materials, and support services.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {resourceStats.map((stat, index) => {
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

      {/* Quick Navigation */}
      <section className="bg-white py-12 border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'For Healthcare Professionals', href: '#hcp' },
              { label: 'For Patients', href: '#patients' },
              { label: 'General Resources', href: '#general' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-6 py-3 bg-[var(--surface)] hover:bg-[var(--brand-blue)] hover:text-white text-[var(--brand-blue)] rounded-[var(--radius-button)] border border-[var(--border-color)] hover:border-[var(--brand-blue)] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HCP Resources Section */}
      <HCPResources />

      {/* Patient Resources Section */}
      <PatientResources />

      {/* General Resources Section */}
      <div id="general">
        <ResourcesSection />
      </div>

      {/* Support Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Need Additional Support?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Our dedicated support teams are available to assist healthcare professionals, 
              patients, and caregivers with any questions or resource needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Medical Information',
                  contact: 'medinfo@edifpharma.com',
                  hours: 'Mon-Fri, 9 AM - 6 PM',
                },
                {
                  title: 'Patient Support',
                  contact: '+91-1234-567890',
                  hours: 'Mon-Sat, 9 AM - 6 PM',
                },
                {
                  title: 'Adverse Events',
                  contact: '+91-1234-567899',
                  hours: '24/7 Emergency Hotline',
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-xl mb-3">{contact.title}</h3>
                  <div className="text-white/90 mb-2">{contact.contact}</div>
                  <div className="text-sm text-white/70">{contact.hours}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

export function CareersPage() {
  const openPositions = [
    {
      title: 'Senior Quality Assurance Manager',
      department: 'Quality & Compliance',
      location: 'Global HQ',
      type: 'Full-time',
      description: 'Lead QA operations ensuring WHO-GMP compliance across manufacturing sites.'
    },
    {
      title: 'Clinical Research Associate',
      department: 'R&D',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Support clinical trials and regulatory submissions for new pharmaceutical products.'
    },
    {
      title: 'Regulatory Affairs Specialist',
      department: 'Regulatory',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage regulatory submissions and maintain compliance with international standards.'
    },
    {
      title: 'Pharmaceutical Sales Representative',
      department: 'Commercial',
      location: 'Regional',
      type: 'Full-time',
      description: 'Build relationships with healthcare professionals and drive product awareness.'
    },
    {
      title: 'Manufacturing Technician',
      department: 'Production',
      location: 'Manufacturing Site',
      type: 'Full-time',
      description: 'Operate production equipment and maintain quality standards in pharmaceutical manufacturing.'
    },
    {
      title: 'Pharmacovigilance Officer',
      department: 'Medical Affairs',
      location: 'Global HQ',
      type: 'Full-time',
      description: 'Monitor and report adverse events ensuring patient safety and regulatory compliance.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.'
    },
    {
      icon: TrendingUp,
      title: 'Career Development',
      description: 'Continuous learning opportunities, certifications, and clear advancement paths.'
    },
    {
      icon: Award,
      title: 'Performance Rewards',
      description: 'Competitive compensation with performance bonuses and equity options.'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and generous paid time off.'
    }
  ];

  const values = [
    { title: 'Innovation Culture', description: 'Encouraging creative solutions and scientific excellence' },
    { title: 'Global Impact', description: 'Contributing to healthcare advancement worldwide' },
    { title: 'Diverse & Inclusive', description: 'Fostering belonging across all backgrounds and perspectives' },
    { title: 'Ethical Leadership', description: 'Upholding highest standards of integrity and transparency' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">CAREERS AT EDIF PHARMA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Join Our Mission to Heal
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Build your career with a global pharmaceutical leader committed to innovation, quality, and patient care. 
              Explore opportunities to make a meaningful impact on global health.
            </p>
            <button
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-8 py-4 text-sm tracking-wide transition-colors duration-150 group"
            >
              <span>VIEW OPEN POSITIONS</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={16} strokeWidth={2} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join EDIF */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">WHY EDIF PHARMA</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              A workplace where scientific excellence meets personal growth and global impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-[var(--border-color)] bg-[var(--surface)]"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">BENEFITS & PERKS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Investing in Our People
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-3">{benefit.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CURRENT OPENINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[var(--text-900)]/60">
              {openPositions.length} positions available across multiple departments
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-[var(--border-color)] bg-[var(--surface)] p-6 hover:border-[var(--brand-blue)] transition-colors duration-150 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2 group-hover:text-[var(--brand-blue)] transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-4">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-900)]/60">
                      <div className="flex items-center gap-2">
                        <Briefcase size={14} strokeWidth={2} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} strokeWidth={2} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} strokeWidth={2} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-6 py-3 text-sm tracking-wide transition-colors duration-150 whitespace-nowrap">
                    <span>APPLY NOW</span>
                    <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Submit your resume for future opportunities.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>SUBMIT GENERAL APPLICATION</span>
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, GraduationCap, Briefcase, Mail, Phone } from 'lucide-react';

export function ExecutiveTeamPage() {
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

  const executives = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      image: '/api/placeholder/300/300',
      bio: 'Dr. Chen brings over 20 years of experience in pharmaceutical leadership, having previously served as COO at leading biotech companies.',
      education: 'PhD in Pharmaceutical Sciences, MBA',
      experience: '25+ years in pharma industry',
      expertise: ['Strategic Leadership', 'Drug Development', 'Regulatory Affairs']
    },
    {
      name: 'Dr. Michael Rodriguez',
      title: 'Chief Scientific Officer',
      image: '/api/placeholder/300/300',
      bio: 'Leading our R&D initiatives with expertise in molecular biology and drug discovery. Published over 150 peer-reviewed papers.',
      education: 'PhD in Molecular Biology, Postdoc at NIH',
      experience: '18+ years in drug discovery',
      expertise: ['Drug Discovery', 'Molecular Biology', 'Clinical Development']
    },
    {
      name: 'Jennifer Park',
      title: 'Chief Operating Officer',
      image: '/api/placeholder/300/300',
      bio: 'Oversees global operations and manufacturing excellence. Expert in GMP compliance and operational efficiency.',
      education: 'MS in Chemical Engineering, MBA',
      experience: '22+ years in pharma operations',
      expertise: ['Manufacturing', 'Quality Systems', 'Supply Chain']
    },
    {
      name: 'Dr. Robert Thompson',
      title: 'Chief Medical Officer',
      image: '/api/placeholder/300/300',
      bio: 'Board-certified physician with extensive experience in clinical development and regulatory affairs.',
      education: 'MD, MPH, Board Certified in Internal Medicine',
      experience: '20+ years in clinical medicine',
      expertise: ['Clinical Trials', 'Regulatory Strategy', 'Medical Affairs']
    },
    {
      name: 'Lisa Wong',
      title: 'Chief Financial Officer',
      image: '/api/placeholder/300/300',
      bio: 'Financial strategist with deep expertise in healthcare finance and capital markets.',
      education: 'MBA, CPA, CFA',
      experience: '15+ years in healthcare finance',
      expertise: ['Financial Planning', 'Capital Markets', 'Risk Management']
    },
    {
      name: 'Dr. Ahmed Hassan',
      title: 'Chief Technology Officer',
      image: '/api/placeholder/300/300',
      bio: 'Leading digital transformation and innovation in pharmaceutical technology and data analytics.',
      education: 'PhD in Computer Science, MS in Bioinformatics',
      experience: '16+ years in pharma tech',
      expertise: ['Digital Health', 'Data Analytics', 'AI/ML Applications']
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
              Executive Team
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Meet the visionary leaders driving EDIF Pharma's mission to advance global healthcare through innovation and excellence.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Leadership Overview */}
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
              Our Leadership
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              A diverse team of experienced professionals united by a shared commitment to scientific excellence,
              patient care, and pharmaceutical innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-[var(--border-color)] overflow-hidden hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="aspect-square bg-[var(--surface)] flex items-center justify-center">
                  <Users className="w-24 h-24 text-[var(--brand-blue)] opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-900)] mb-1">
                    {executive.name}
                  </h3>
                  <p className="text-[var(--brand-blue)] font-medium mb-4">
                    {executive.title}
                  </p>
                  <p className="text-[var(--text-600)] text-sm leading-relaxed mb-4">
                    {executive.bio}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                      <span>{executive.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-600)]">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span>{executive.experience}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-[var(--text-900)] mb-2">Key Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {executive.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-[var(--surface)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-900)] mb-6">
              Connect with Leadership
            </h2>
            <p className="text-lg text-[var(--text-600)] mb-8">
              Interested in learning more about our leadership team or exploring partnership opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] text-white font-medium rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
                <Mail className="w-4 h-4" />
                Contact Leadership
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-blue)] text-[var(--brand-blue)] font-medium rounded-lg hover:bg-[var(--brand-blue)] hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                Schedule Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
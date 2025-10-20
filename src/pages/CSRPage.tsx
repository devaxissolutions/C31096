import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award, Target, TrendingUp, HandHeart, Leaf, GraduationCap } from 'lucide-react';

export function CSRPage() {
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

  const csrPillars = [
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Expanding access to essential medicines and healthcare services in underserved communities worldwide.',
      initiatives: [
        'Medicine donation programs in developing countries',
        'Mobile health clinics in rural areas',
        'Partnerships with local healthcare providers'
      ]
    },
    {
      icon: Users,
      title: 'Community Health',
      description: 'Supporting community health programs and preventive care initiatives.',
      initiatives: [
        'Health education and awareness campaigns',
        'Disease prevention programs',
        'Mental health support initiatives'
      ]
    },
    {
      icon: Globe,
      title: 'Global Health Equity',
      description: 'Working towards equitable healthcare access and addressing global health disparities.',
      initiatives: [
        'International health partnerships',
        'Capacity building in developing nations',
        'Research collaborations for global health'
      ]
    },
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description: 'Minimizing our environmental impact and promoting sustainable healthcare practices.',
      initiatives: [
        'Green manufacturing processes',
        'Waste reduction and recycling programs',
        'Sustainable supply chain initiatives'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Investing in healthcare education and professional development worldwide.',
      initiatives: [
        'Medical training programs',
        'STEM education in underserved communities',
        'Healthcare workforce development'
      ]
    },
    {
      icon: HandHeart,
      title: 'Employee Volunteerism',
      description: 'Encouraging and supporting employee participation in community service.',
      initiatives: [
        'Paid volunteer time off',
        'Employee matching gift programs',
        'Team volunteer activities'
      ]
    }
  ];

  const impactStats = [
    { number: '2.5M+', label: 'Patients Served', icon: Heart },
    { number: '50+', label: 'Countries Reached', icon: Globe },
    { number: '15K+', label: 'Volunteer Hours', icon: Users },
    { number: '$25M+', label: 'CSR Investment', icon: TrendingUp }
  ];

  const featuredPrograms = [
    {
      title: 'Access to Care Initiative',
      description: 'Providing essential medicines to underserved communities in partnership with local healthcare organizations.',
      impact: 'Distributed 500,000+ treatment courses in 2024',
      region: 'Sub-Saharan Africa & Southeast Asia'
    },
    {
      title: 'Health Education Program',
      description: 'Comprehensive health education and disease prevention programs in schools and communities.',
      impact: 'Reached 100,000+ students and community members',
      region: 'Latin America & Middle East'
    },
    {
      title: 'Green Healthcare Partnership',
      description: 'Collaborating with healthcare facilities to implement sustainable practices and reduce environmental impact.',
      impact: 'Reduced carbon footprint by 30% across partner facilities',
      region: 'Global Network'
    },
    {
      title: 'Medical Training Fellowship',
      description: 'Advanced training programs for healthcare professionals in developing countries.',
      impact: 'Trained 2,500+ healthcare workers since 2020',
      region: 'Asia Pacific & Africa'
    }
  ];

  const partnerships = [
    {
      organization: 'World Health Organization (WHO)',
      focus: 'Global health initiatives and pandemic preparedness',
      collaboration: 'Joint research and capacity building programs'
    },
    {
      organization: 'Doctors Without Borders',
      focus: 'Emergency medical response and healthcare access',
      collaboration: 'Medicine donations and medical expertise'
    },
    {
      organization: 'Local Health Ministries',
      focus: 'Community health programs and disease prevention',
      collaboration: 'Healthcare infrastructure and training support'
    },
    {
      organization: 'Environmental NGOs',
      focus: 'Sustainable healthcare practices',
      collaboration: 'Green initiatives and environmental impact reduction'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-green-dark)] text-white overflow-hidden"
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
              Corporate Social Responsibility
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Committed to making a positive impact on global health, communities, and the environment
              through sustainable and responsible business practices.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--accent-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[var(--accent-green-dark)] mb-2">
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

      {/* CSR Pillars */}
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
              Our CSR Pillars
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Structured initiatives that guide our commitment to social responsibility
              and sustainable development across all our operations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {csrPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[var(--accent-green)] rounded-lg flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[var(--text-600)] text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.initiatives.map((initiative, initIndex) => (
                    <li key={initIndex} className="flex items-start gap-2 text-sm text-[var(--text-600)]">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-green)] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
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
              Featured Programs
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Highlighting our most impactful initiatives that are creating lasting change
              in communities around the world.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-3">
                  {program.title}
                </h3>
                <p className="text-[var(--text-600)] mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-[var(--accent-green)]" />
                    <span className="text-[var(--text-900)] font-medium">Impact:</span>
                    <span className="text-[var(--text-600)]">{program.impact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-[var(--accent-green)]" />
                    <span className="text-[var(--text-900)] font-medium">Region:</span>
                    <span className="text-[var(--text-600)]">{program.region}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnerships */}
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
              Strategic Partnerships
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Collaborating with global organizations to amplify our impact and drive meaningful change.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-2">
                  {partner.organization}
                </h3>
                <p className="text-[var(--accent-green)] font-medium text-sm mb-3">
                  {partner.focus}
                </p>
                <p className="text-[var(--text-600)] text-sm">
                  {partner.collaboration}
                </p>
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
              Join Our Mission
            </h2>
            <p className="text-lg text-[var(--text-600)] mb-8">
              Partner with us in creating a healthier, more sustainable world.
              Together, we can make a meaningful difference in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[var(--accent-green)] text-white font-semibold rounded-lg hover:bg-[var(--accent-green-dark)] transition-colors duration-200">
                Partner With Us
              </button>
              <button className="px-8 py-4 border-2 border-[var(--accent-green)] text-[var(--accent-green)] font-semibold rounded-lg hover:bg-[var(--accent-green)] hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
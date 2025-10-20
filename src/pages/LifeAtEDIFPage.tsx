import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Coffee, Award, Zap, Globe, Smile, Target, Lightbulb } from 'lucide-react';

export function LifeAtEDIFPage() {
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

  const cultureValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We approach our work with empathy and dedication to improving patient lives.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Encouraging creative thinking and breakthrough solutions in everything we do.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Building stronger solutions through teamwork and diverse perspectives.'
    },
    {
      icon: Target,
      title: 'Purpose Driven',
      description: 'Every role contributes to our mission of advancing global healthcare.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in science, ethics, and professional conduct.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Working together to address healthcare challenges worldwide.'
    }
  ];

  const employeeStories = [
    {
      name: 'Dr. Sarah Martinez',
      role: 'Research Scientist',
      image: '/api/placeholder/150/150',
      quote: 'At EDIF, I have the freedom to pursue groundbreaking research while being supported by an incredible team. The collaborative environment here is truly special.',
      highlight: 'Led breakthrough research on novel drug delivery systems'
    },
    {
      name: 'James Chen',
      role: 'Clinical Operations Manager',
      image: '/api/placeholder/150/150',
      quote: 'The work-life balance and professional development opportunities here are outstanding. I\'ve grown tremendously both personally and professionally.',
      highlight: 'Successfully managed 15+ international clinical trials'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Regulatory Affairs Director',
      image: '/api/placeholder/150/150',
      quote: 'EDIF values expertise and empowers its employees to make meaningful contributions. It\'s inspiring to work on projects that directly impact patient care.',
      highlight: 'Achieved 5 FDA approvals in 3 years'
    }
  ];

  const perks = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive medical, dental, and vision coverage',
        'Mental health support and counseling services',
        'Fitness center partnerships and wellness programs',
        'Paid parental leave and family support'
      ]
    },
    {
      category: 'Professional Growth',
      items: [
        'Annual learning and development budget',
        'Conference attendance and certification support',
        'Mentorship programs and career coaching',
        'Cross-functional project opportunities'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible work arrangements and remote options',
        'Generous PTO policy (25+ days annually)',
        'Summer hours and compressed workweeks',
        'Emergency backup childcare services'
      ]
    },
    {
      category: 'Community & Culture',
      items: [
        'Team building events and social activities',
        'Volunteer days and community service',
        'Employee resource groups and diversity initiatives',
        'Recognition programs and company celebrations'
      ]
    }
  ];

  const stats = [
    { number: '95%', label: 'Employee Satisfaction' },
    { number: '4.8/5', label: 'Culture Rating' },
    { number: '87%', label: 'Retention Rate' },
    { number: '50+', label: 'Countries Represented' }
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
              Life at EDIF
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl opacity-90 leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Discover a workplace where innovation meets compassion, and every team member
              contributes to advancing global healthcare.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Culture Stats */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[var(--brand-blue)] mb-2">
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

      {/* Our Culture */}
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
              Our Culture
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              A collaborative environment where scientific excellence meets compassionate care,
              fostering innovation and professional growth.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-900)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--text-600)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Employee Stories */}
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
              Voices from Our Team
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              Hear from the people who make EDIF Pharma a special place to work.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {employeeStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)] text-center"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-[var(--surface)] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Smile className="w-10 h-10 text-[var(--brand-blue)]" />
                </div>
                <blockquote className="text-[var(--text-600)] italic mb-6 leading-relaxed">
                  "{story.quote}"
                </blockquote>
                <div className="border-t border-[var(--border-color)] pt-4">
                  <h4 className="font-semibold text-[var(--text-900)]">{story.name}</h4>
                  <p className="text-[var(--brand-blue)] text-sm mb-2">{story.role}</p>
                  <p className="text-[var(--text-600)] text-xs">{story.highlight}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits */}
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
              Perks & Benefits
            </h2>
            <p className="text-lg text-[var(--text-600)] max-w-3xl mx-auto">
              We invest in our people because we know that happy, healthy employees
              deliver better results for patients and communities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {perks.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-[var(--border-color)]"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-[var(--text-900)] mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[var(--text-600)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-[var(--text-600)] mb-8">
              Experience a workplace where your contributions matter, your growth is supported,
              and your work makes a real difference in people's lives.
            </p>
            <button className="px-8 py-4 bg-[var(--brand-blue)] text-white font-semibold rounded-lg hover:bg-[var(--brand-blue-dark)] transition-colors duration-200">
              Explore Career Opportunities
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
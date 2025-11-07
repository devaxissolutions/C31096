import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Target, Heart, Shield, Lightbulb } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to WHO-GMP standards and pharmaceutical quality',
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every decision guided by improving patient outcomes and healthcare access',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuous research and development to advance pharmaceutical science',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving healthcare needs across 45+ countries with reliable medicines',
    },
  ];

  const milestones = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'PharmaCorp established with vision to improve global healthcare access',
    },
    {
      year: '2005',
      title: 'WHO-GMP Certification',
      description: 'First facility receives WHO-GMP certification for international standards',
    },
    {
      year: '2012',
      title: 'Global Expansion',
      description: 'Products launched in 25+ countries across Asia, Africa, and Middle East',
    },
    {
      year: '2018',
      title: 'R&D Center',
      description: 'State-of-the-art research and development center inaugurated',
    },
    {
      year: '2023',
      title: 'Sustainable Manufacturing',
      description: 'Achieved carbon-neutral operations across all production facilities',
    },
    {
      year: '2025',
      title: 'Digital Innovation',
      description: 'AI-powered quality control and digital supply chain transformation',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1642406415849-a410b5d01a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjB0ZWFtfGVufDF8fHx8MTc2MDcyODIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief Scientific Officer',
      image: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYwNzI4MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Mr. James Chen',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYwNzI4MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-[var(--radius-button)] mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Company Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-6">
            About PharmaCorp
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
            A global pharmaceutical leader committed to improving healthcare access through 
            innovative medicines, world-class manufacturing, and unwavering quality standards.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] p-8 rounded-xl text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Target size={40} className="mb-4 opacity-80" />
            <h3 className="text-2xl mb-3">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To deliver high-quality, affordable pharmaceutical products that improve patient 
              outcomes and enhance global healthcare accessibility through innovation, excellence, 
              and sustainable practices.
            </p>
          </motion.div>

          <motion.div
            className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <TrendingUp size={40} className="mb-4 text-[var(--brand-blue)]" />
            <h3 className="text-2xl mb-3 text-[var(--text-900)]">Our Vision</h3>
            <p className="text-[var(--text-900)] opacity-70 leading-relaxed">
              To be the most trusted pharmaceutical partner globally, recognized for innovation, 
              quality excellence, and positive impact on healthcare systems and patient lives 
              across all markets we serve.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)] transition-colors">
                    <Icon size={24} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{value.title}</h4>
                  <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 bg-[var(--surface)] rounded-xl border border-[var(--border-color)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="text-[var(--brand-blue)]" size={24} />
              <div className="text-4xl text-[var(--brand-blue)]">25+</div>
            </div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="text-[var(--brand-blue)]" size={24} />
              <div className="text-4xl text-[var(--brand-blue)]">500+</div>
            </div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Employees Worldwide</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="text-[var(--brand-blue)]" size={24} />
              <div className="text-4xl text-[var(--brand-blue)]">45+</div>
            </div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="text-[var(--brand-blue)]" size={24} />
              <div className="text-4xl text-[var(--brand-blue)]">150+</div>
            </div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Products Portfolio</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-12 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--border-color)] hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-6 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors">
                      <div className="text-sm text-[var(--brand-blue)] mb-2">{milestone.year}</div>
                      <h4 className="text-lg text-[var(--text-900)] mb-2">{milestone.title}</h4>
                      <p className="text-sm text-[var(--text-900)] opacity-60">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-[var(--brand-blue)] rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="aspect-[3/4] bg-[var(--surface)] rounded-xl overflow-hidden mb-4 border border-[var(--border-color)] group-hover:border-[var(--brand-blue)] transition-colors">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg text-[var(--text-900)] mb-1">{leader.name}</h4>
                <p className="text-sm text-[var(--brand-blue)]">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

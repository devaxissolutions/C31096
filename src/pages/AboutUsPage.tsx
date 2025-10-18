import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, Heart, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every decision we make prioritizes patient safety and wellbeing above all else.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Unwavering commitment to the highest pharmaceutical manufacturing standards.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously advancing pharmaceutical science to address unmet medical needs.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making quality medicines accessible to patients in 45+ countries worldwide.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering partnerships with healthcare professionals and global institutions.',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Maintaining transparency and ethical practices in all our operations.',
    },
  ];

  const milestones = [
    { year: '1998', title: 'Foundation', description: 'EDIF Pharma established with a vision to improve global healthcare' },
    { year: '2005', title: 'WHO-GMP Certified', description: 'First facility receives WHO-GMP certification' },
    { year: '2012', title: 'Global Expansion', description: 'Extended reach to 25+ countries across continents' },
    { year: '2018', title: 'R&D Center', description: 'Opened state-of-the-art research and development facility' },
    { year: '2023', title: 'ISO Certified', description: 'All facilities achieve ISO 9001:2015 certification' },
    { year: '2025', title: 'Today', description: 'Serving 45+ countries with 150+ pharmaceutical products' },
  ];

  const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '150+', label: 'Products Portfolio' },
    { value: '45+', label: 'Countries Served' },
    { value: '500+', label: 'Team Members' },
    { value: '3', label: 'WHO-GMP Facilities' },
    { value: '2M+', label: 'Patients Annually' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-white via-[var(--surface)] to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--brand-blue)] mb-6">
              About EDIF Pharma
            </h1>
            <p className="text-xl text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we've been dedicated to improving lives through quality pharmaceutical
              manufacturing and innovative healthcare solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl text-[var(--brand-blue)]">Our Mission</h2>
              <p className="text-lg text-[var(--text-900)] opacity-70 leading-relaxed">
                To manufacture and deliver high-quality pharmaceutical products that meet the highest
                international standards, making healthcare accessible and affordable to patients worldwide.
              </p>
              <p className="text-lg text-[var(--text-900)] opacity-70 leading-relaxed">
                We strive to be a trusted partner in global healthcare by combining cutting-edge research,
                world-class manufacturing, and unwavering commitment to quality and patient safety.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="text-[var(--brand-blue)]" size={20} />
                  <span className="text-sm font-medium">WHO-GMP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-[var(--brand-blue)]" size={20} />
                  <span className="text-sm font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-[var(--brand-blue)]" size={20} />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000"
                alt="EDIF Pharma facility"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">Our Core Values</h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-[var(--border-color)] hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--accent-red)]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-[var(--brand-blue)]" size={24} />
                </div>
                <h3 className="text-xl text-[var(--brand-blue)] mb-3">{value.title}</h3>
                <p className="text-[var(--text-900)] opacity-70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">Our Journey</h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-2xl mx-auto">
              Key milestones in our commitment to pharmaceutical excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="bg-white p-6 rounded-xl border border-[var(--border-color)] hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--accent-red)] text-white rounded-xl text-lg font-bold">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl text-[var(--brand-blue)] font-medium">{milestone.title}</h3>
                        </div>
                        <p className="text-[var(--text-900)] opacity-70 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue)]/90 py-16 md:py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">EDIF Pharma by the Numbers</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our impact in global healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            className="bg-gradient-to-br from-[var(--surface)] to-white p-12 rounded-2xl border border-[var(--border-color)] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="mx-auto mb-6 text-[var(--brand-blue)]" size={48} />
            <h2 className="text-3xl text-[var(--brand-blue)] mb-4">Looking Forward</h2>
            <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed mb-8">
              As we continue to grow, our commitment remains unchanged: to provide quality pharmaceutical
              products that improve lives. We're investing in research, expanding our capabilities, and
              building partnerships to serve more patients around the world.
            </p>
            <p className="text-lg text-[var(--brand-blue)] font-medium">
              Together, we're building a healthier future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

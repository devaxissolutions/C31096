import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Zap, Cpu, FlaskConical, Target, TrendingUp, Award, Clock } from 'lucide-react';

export function InnovationPage() {
  const innovationPillars = [
    {
      icon: Lightbulb,
      title: 'Drug Discovery Innovation',
      description: 'Revolutionary approaches to drug discovery using AI-driven molecular design and high-throughput screening technologies.',
      technologies: ['AI molecular design', 'Virtual screening', 'Structure-based design', 'Fragment-based discovery']
    },
    {
      icon: Sparkles,
      title: 'Advanced Formulations',
      description: 'Novel drug delivery systems and formulations for improved bioavailability, patient compliance, and therapeutic outcomes.',
      technologies: ['Nanotechnology', 'Controlled release', 'Bioadhesive systems', 'Targeted delivery']
    },
    {
      icon: Cpu,
      title: 'Digital Innovation',
      description: 'Integration of digital technologies, IoT, and data analytics to optimize drug development and manufacturing processes.',
      technologies: ['Process analytics', 'Digital twins', 'IoT sensors', 'Machine learning']
    },
    {
      icon: Zap,
      title: 'Process Innovation',
      description: 'Continuous flow chemistry and automated synthesis platforms for efficient and sustainable drug manufacturing.',
      technologies: ['Flow chemistry', 'Automated synthesis', 'Green chemistry', 'Process intensification']
    },
    {
      icon: FlaskConical,
      title: 'Biotechnology Innovation',
      description: 'Advanced bioprocessing and cell culture technologies for biologics and biosimilar development.',
      technologies: ['Cell line development', 'Bioprocess optimization', 'Single-use systems', 'Continuous manufacturing']
    },
    {
      icon: Target,
      title: 'Personalized Medicine',
      description: 'Companion diagnostics and biomarker-driven approaches for precision medicine and targeted therapies.',
      technologies: ['Biomarker discovery', 'Companion diagnostics', 'Pharmacogenomics', 'Patient stratification']
    }
  ];

  const innovationProjects = [
    {
      title: 'AI-Driven Drug Discovery Platform',
      description: 'Machine learning algorithms predict molecular properties and optimize drug candidates with 90% accuracy',
      status: 'Active',
      impact: 'Reduced discovery time by 60%',
      timeline: '2023-2025'
    },
    {
      title: 'Nanoparticle Drug Delivery System',
      description: 'Targeted delivery technology for oncology drugs with improved tumor penetration and reduced side effects',
      status: 'Phase II Clinical',
      impact: 'Enhanced drug bioavailability by 300%',
      timeline: '2022-2026'
    },
    {
      title: 'Continuous Manufacturing Platform',
      description: 'End-to-end continuous flow manufacturing system for oral solid dosage forms',
      status: 'Pilot Implementation',
      impact: '50% reduction in production costs',
      timeline: '2024-2027'
    },
    {
      title: 'Digital Quality Management System',
      description: 'AI-powered quality control system with real-time monitoring and predictive analytics',
      status: 'Implementation',
      impact: '99.9% defect detection rate',
      timeline: '2023-2025'
    },
    {
      title: 'Personalized Therapy Platform',
      description: 'Integrated diagnostics and therapeutics platform for precision oncology',
      status: 'Research Phase',
      impact: 'Improved patient outcomes by 40%',
      timeline: '2024-2028'
    },
    {
      title: 'Green Chemistry Initiative',
      description: 'Sustainable synthesis methods reducing environmental impact by 70%',
      status: 'Active',
      impact: 'Carbon footprint reduced by 50 tons/year',
      timeline: '2023-2026'
    }
  ];

  const innovationMetrics = [
    {
      metric: '25+',
      label: 'Innovation Projects',
      description: 'Active R&D initiatives'
    },
    {
      metric: '15+',
      label: 'Patents Filed',
      description: 'Intellectual property protection'
    },
    {
      metric: '40%',
      label: 'Time to Market Reduction',
      description: 'Accelerated development cycles'
    },
    {
      metric: '$50M',
      label: 'Innovation Investment',
      description: 'Annual R&D budget allocation'
    }
  ];

  const technologyPartners = [
    'MIT Innovation Lab',
    'Stanford BioDesign',
    'Harvard Medical School',
    'Johns Hopkins Engineering',
    'Imperial College London'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">BREAKTHROUGH INNOVATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Innovation & Technology
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              At EDIF Pharma, innovation is at the heart of everything we do. We leverage cutting-edge
              technologies, breakthrough methodologies, and forward-thinking approaches to transform
              pharmaceutical development and deliver next-generation therapies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-xs text-white/80">Innovation Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-white/80">Patents Filed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-xs text-white/80">Faster Development</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">$50M</div>
                <div className="text-xs text-white/80">Annual Investment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">INNOVATION FRAMEWORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Pillars of Innovation
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our innovation strategy is built on six interconnected pillars that drive
              breakthrough discoveries and transformative technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-purple-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{pillar.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{pillar.description}</p>
                    <div className="space-y-2">
                      {pillar.technologies.map((tech, idx) => (
                        <span key={idx} className="inline-block px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded mr-2 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">BREAKTHROUGH PROJECTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Innovation Pipeline
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our portfolio of innovative projects represents the future of pharmaceutical
              development and manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl text-[var(--text-900)]">{project.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Active' ? 'bg-green-50 text-green-700' :
                    project.status === 'Phase II Clinical' ? 'bg-blue-50 text-blue-700' :
                    project.status === 'Implementation' ? 'bg-purple-50 text-purple-700' :
                    'bg-yellow-50 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-[var(--text-900)]/70 mb-4">{project.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-600 font-medium">{project.impact}</span>
                  <span className="text-[var(--text-900)]/60 flex items-center gap-1">
                    <Clock size={14} />
                    {project.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Metrics */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Innovation Impact Metrics
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Quantifiable results demonstrating how our innovation initiatives are transforming
              pharmaceutical development and delivering value to patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border-color)] text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-purple-600 mb-2 font-bold">{metric.metric}</div>
                <div className="text-lg text-[var(--text-900)] mb-2">{metric.label}</div>
                <div className="text-sm text-[var(--text-900)]/60">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 md:py-32 bg-purple-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Academic & Technology Partnerships
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              We collaborate with world-leading institutions to access cutting-edge research,
              technologies, and expertise that accelerate our innovation agenda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-purple-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-sm text-[var(--text-900)] font-medium">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Roadmap */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Innovation Roadmap 2025-2030
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our strategic vision for the next decade focuses on transformative technologies
              and breakthrough therapies that will redefine pharmaceutical innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2025',
                goal: 'AI-First Drug Discovery',
                description: 'Fully integrated AI platform for molecular design and optimization'
              },
              {
                year: '2027',
                goal: 'Continuous Manufacturing',
                description: 'End-to-end continuous production systems for all dosage forms'
              },
              {
                year: '2030',
                goal: 'Personalized Medicine Platform',
                description: 'Complete ecosystem for precision medicine and companion diagnostics'
              }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="text-2xl font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl mb-3">{milestone.goal}</h3>
                <p className="text-white/80 leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="mx-auto mb-6 text-purple-600" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Partner in Innovation
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of pharmaceutical innovation. Explore collaboration
              opportunities and discover how we can work together to advance healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>START COLLABORATION</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>VIEW INNOVATION PORTFOLIO</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Zap, Shield, BarChart3, Microscope, Globe, Smartphone, Brain, ArrowRight, CheckCircle } from 'lucide-react';

export function TechnologyPage() {
  const technologyPlatforms = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI algorithms for drug discovery, clinical trial optimization, and personalized medicine',
      applications: ['Molecular design', 'Patient stratification', 'Adverse event prediction', 'Drug repurposing'],
      capabilities: ['Deep learning models', 'Natural language processing', 'Computer vision', 'Predictive analytics']
    },
    {
      icon: Microscope,
      title: 'High-Performance Computing',
      description: 'Supercomputing infrastructure for complex molecular simulations and data analysis',
      applications: ['Molecular dynamics', 'Quantum chemistry', 'Genomic analysis', 'Clinical data processing'],
      capabilities: ['GPU clusters', 'Parallel processing', 'Cloud bursting', 'Real-time analytics']
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Advanced analytics platform for integrating and analyzing diverse healthcare datasets',
      applications: ['Real-world evidence', 'Biomarker discovery', 'Population health', 'Regulatory intelligence'],
      capabilities: ['Data lakes', 'Graph databases', 'Streaming analytics', 'Machine learning pipelines']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud platforms enabling global collaboration and secure data management',
      applications: ['Collaborative research', 'Global clinical trials', 'Remote monitoring', 'Supply chain optimization'],
      capabilities: ['Multi-cloud architecture', 'Auto-scaling', 'Disaster recovery', 'Edge computing']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Data Protection',
      description: 'Enterprise-grade security systems protecting sensitive healthcare data and intellectual property',
      applications: ['Data encryption', 'Access control', 'Compliance monitoring', 'Threat detection'],
      capabilities: ['Zero-trust architecture', 'Blockchain verification', 'AI-powered security', 'Regulatory compliance']
    },
    {
      icon: Smartphone,
      title: 'Digital Health Solutions',
      description: 'Connected platforms for patient engagement, remote monitoring, and decentralized clinical trials',
      applications: ['Patient apps', 'Wearable integration', 'Telemedicine', 'Direct-to-patient trials'],
      capabilities: ['Mobile platforms', 'IoT integration', 'Real-time monitoring', 'Patient data collection']
    }
  ];

  const innovationShowcase = [
    {
      title: 'AI-Driven Drug Discovery Platform',
      description: 'Proprietary AI system that has accelerated drug discovery by 60% and reduced costs by 40%',
      features: ['Molecular generation', 'Target prediction', 'ADMET profiling', 'Synthetic route optimization'],
      impact: '15 novel compounds in development, 3 patents filed',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Integrated Clinical Trial Platform',
      description: 'End-to-end digital platform for managing global clinical trials with real-time insights',
      features: ['Patient recruitment', 'Remote monitoring', 'Data integration', 'Regulatory compliance'],
      impact: '50% faster trial completion, 30% cost reduction',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    },
    {
      title: 'Personalized Medicine Engine',
      description: 'AI-powered platform for identifying optimal treatments based on patient genetics and biomarkers',
      features: ['Genomic analysis', 'Biomarker identification', 'Treatment optimization', 'Outcome prediction'],
      impact: 'Improved response rates by 35%, reduced adverse events by 25%',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    }
  ];

  const technologyMetrics = [
    { metric: '60%', label: 'Faster Drug Discovery' },
    { metric: '$2.5B', label: 'R&D Investment in Tech' },
    { metric: '500+', label: 'AI Models Deployed' },
    { metric: '99.9%', label: 'Data Processing Uptime' },
    { metric: '40+', label: 'Technology Patents' },
    { metric: '1PB+', label: 'Data Processed Annually' }
  ];

  const digitalTransformation = [
    {
      phase: 'Research & Discovery',
      technologies: ['AI/ML for drug design', 'High-throughput screening', 'Molecular modeling', 'Genomic analysis'],
      benefits: 'Accelerated discovery, reduced costs, improved success rates'
    },
    {
      phase: 'Clinical Development',
      technologies: ['Digital trial platforms', 'Remote monitoring', 'Real-world evidence', 'Patient engagement'],
      benefits: 'Faster recruitment, better retention, comprehensive data collection'
    },
    {
      phase: 'Manufacturing & Quality',
      technologies: ['Process automation', 'Quality analytics', 'Supply chain digital twin', 'Predictive maintenance'],
      benefits: 'Improved efficiency, quality assurance, cost optimization'
    },
    {
      phase: 'Commercial & Access',
      technologies: ['Patient support platforms', 'Market access analytics', 'Supply chain visibility', 'Regulatory intelligence'],
      benefits: 'Enhanced patient experience, optimized distribution, compliance monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">INNOVATION & DIGITAL TRANSFORMATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Technology Platform
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              At EDIF Pharma, technology is the foundation of our innovation. Our advanced
              digital platforms leverage AI, cloud computing, and data analytics to accelerate
              drug discovery, optimize clinical trials, and deliver personalized medicine solutions
              that transform patient care worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologyMetrics.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{item.metric}</div>
                  <div className="text-xs text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">CORE TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Technology Platforms
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our integrated technology ecosystem spans the entire pharmaceutical value chain,
              from molecular discovery to patient delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologyPlatforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <platform.icon className="text-indigo-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{platform.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{platform.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {platform.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <ArrowRight size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Technical Capabilities:</h4>
                    <ul className="space-y-2">
                      {platform.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                          <CheckCircle size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">BREAKTHROUGH INNOVATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Innovation Showcase
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Real-world examples of how our technology platforms are transforming
              pharmaceutical research and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {innovationShowcase.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-3">{innovation.title}</h3>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{innovation.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {innovation.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <p className="text-sm text-indigo-600 font-medium">{innovation.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">DIGITAL TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Technology Across the Value Chain
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our digital transformation spans every phase of pharmaceutical development,
              creating an integrated ecosystem of innovation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {digitalTransformation.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-1/4">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{phase.phase}</h3>
                    <p className="text-indigo-600 font-medium text-sm">{phase.benefits}</p>
                  </div>

                  <div className="lg:w-3/4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Technologies:</h4>
                        <ul className="space-y-2">
                          {phase.technologies.map((tech, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                              <Zap size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Impact:</h4>
                        <p className="text-sm text-[var(--text-900)]/70">{phase.benefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Infrastructure */}
      <section className="py-20 md:py-32 bg-indigo-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Technology Infrastructure
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              World-class infrastructure supporting our digital transformation initiatives
              and ensuring scalability, security, and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'High-Performance Computing',
                description: 'Supercomputing clusters with 100,000+ CPU cores and advanced GPU acceleration',
                specs: ['500 TFLOPS computing power', '10PB storage capacity', 'Global data centers', '24/7 availability']
              },
              {
                icon: Globe,
                title: 'Global Data Network',
                description: 'Secure, high-speed network connecting research sites, manufacturing facilities, and partners',
                specs: ['100Gbps connectivity', 'Zero-trust security', 'Real-time collaboration', 'Regulatory compliance']
              },
              {
                icon: BarChart3,
                title: 'Analytics & AI Platform',
                description: 'Integrated platform for advanced analytics, machine learning, and AI-driven insights',
                specs: ['500+ AI models', 'Real-time processing', 'Automated reporting', 'Predictive capabilities']
              }
            ].map((infra, index) => (
              <motion.div
                key={infra.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-indigo-200 p-8 rounded-xl"
              >
                <infra.icon className="text-indigo-600 mb-4" size={32} />
                <h3 className="text-xl text-[var(--text-900)] mb-3">{infra.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{infra.description}</p>

                <ul className="space-y-2">
                  {infra.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <CheckCircle size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Technology Innovation
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our technology platforms are designed to accelerate innovation,
              improve efficiency, and deliver better outcomes for patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>EXPLORE TECHNOLOGIES</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT TECH TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
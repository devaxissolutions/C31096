import { motion } from 'framer-motion';
import { Beaker, Microscope, Target, Clock, CheckCircle, AlertTriangle, TrendingUp, Users, Award, Zap, BarChart3, Calendar, Activity, Shield, Star } from 'lucide-react';

export function RDPPipelinePage() {
  const pipelineStages = [
    {
      stage: 'Discovery',
      phase: 'Pre-clinical',
      description: 'Molecular design, target identification, and initial screening',
      duration: '12-24 months',
      successRate: '5-10%',
      molecules: 45,
      status: 'active',
      color: 'blue'
    },
    {
      stage: 'Pre-clinical Development',
      phase: 'IND Enabling',
      description: 'Safety pharmacology, toxicology, and formulation development',
      duration: '18-36 months',
      successRate: '20-30%',
      molecules: 12,
      status: 'active',
      color: 'purple'
    },
    {
      stage: 'Phase 1',
      phase: 'First-in-Human',
      description: 'Safety, dosage, and pharmacokinetic studies in healthy volunteers',
      duration: '6-12 months',
      successRate: '60-70%',
      molecules: 4,
      status: 'active',
      color: 'green'
    },
    {
      stage: 'Phase 2',
      phase: 'Proof of Concept',
      description: 'Efficacy evaluation and dose optimization in patient populations',
      duration: '12-24 months',
      successRate: '30-40%',
      molecules: 2,
      status: 'active',
      color: 'orange'
    },
    {
      stage: 'Phase 3',
      phase: 'Registration',
      description: 'Large-scale clinical trials for regulatory approval',
      duration: '24-48 months',
      successRate: '60-70%',
      molecules: 1,
      status: 'planning',
      color: 'red'
    }
  ];

  const therapeuticPrograms = [
    {
      area: 'Cardiovascular',
      focus: 'Novel anti-hypertensives and heart failure therapies',
      molecules: ['EDIF-101', 'EDIF-102', 'EDIF-103'],
      stage: 'Phase 2',
      timeline: '2024-2026',
      investment: '$45M',
      partners: ['CardioTech Labs', 'Heart Research Institute'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      area: 'Metabolic Disorders',
      focus: 'Next-generation diabetes and obesity treatments',
      molecules: ['EDIF-201', 'EDIF-202'],
      stage: 'Phase 1',
      timeline: '2023-2025',
      investment: '$32M',
      partners: ['Metabolic Research Center', 'Diabetes Foundation'],
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    },
    {
      area: 'Infectious Diseases',
      focus: 'Antimicrobial resistance solutions and novel antibiotics',
      molecules: ['EDIF-301', 'EDIF-302', 'EDIF-303'],
      stage: 'Discovery',
      timeline: '2024-2028',
      investment: '$28M',
      partners: ['Global Health Alliance', 'Antibiotic Research Network'],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      area: 'Neurology',
      focus: 'Neurodegenerative disease modifiers and pain therapies',
      molecules: ['EDIF-401', 'EDIF-402'],
      stage: 'Pre-clinical',
      timeline: '2023-2027',
      investment: '$38M',
      partners: ['Brain Research Institute', 'Neurology Foundation'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    }
  ];

  const innovationPlatforms = [
    {
      name: 'AI-Driven Drug Design',
      description: 'Machine learning algorithms for molecular optimization and target prediction',
      applications: ['Virtual screening', 'Lead optimization', 'ADMET prediction'],
      impact: '3x faster hit identification',
      status: 'operational'
    },
    {
      name: 'High-Throughput Screening',
      description: 'Automated screening platforms for rapid compound evaluation',
      applications: ['Primary screening', 'SAR studies', 'Counter-screening'],
      impact: '10,000 compounds/day capacity',
      status: 'operational'
    },
    {
      name: 'CRISPR Gene Editing',
      description: 'Genome editing technology for disease modeling and target validation',
      applications: ['Disease models', 'Target validation', 'Functional genomics'],
      impact: 'Accelerated target discovery',
      status: 'pilot'
    },
    {
      name: 'Organ-on-Chip Technology',
      description: 'Microphysiological systems for human-relevant drug testing',
      applications: ['Toxicity testing', 'Efficacy screening', 'Disease modeling'],
      impact: 'Reduced animal testing by 70%',
      status: 'development'
    }
  ];

  const milestones = [
    {
      year: '2023',
      achievements: [
        'Launched AI drug design platform',
        'Completed 3 Phase 1 trials',
        'Filed 5 new patents',
        'Established 2 new partnerships'
      ]
    },
    {
      year: '2024',
      achievements: [
        'Advanced 2 molecules to Phase 2',
        'Expanded HTS capacity',
        'Published 12 research papers',
        'Raised $120M in funding'
      ]
    },
    {
      year: '2025',
      achievements: [
        'Expected IND filing for EDIF-101',
        'Launch organ-on-chip platform',
        'Complete Phase 2 for diabetes program',
        'Expand global clinical operations'
      ]
    }
  ];

  const fundingBreakdown = [
    { category: 'Discovery Research', amount: 35, color: 'bg-blue-500' },
    { category: 'Pre-clinical Development', amount: 28, color: 'bg-purple-500' },
    { category: 'Clinical Development', amount: 25, color: 'bg-green-500' },
    { category: 'Regulatory & CMC', amount: 8, color: 'bg-orange-500' },
    { category: 'Platform Technology', amount: 4, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">INNOVATION PIPELINE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              R&D Pipeline
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our comprehensive research and development pipeline spans from early discovery
              to late-stage clinical development. With cutting-edge technologies and strategic
              partnerships, we're advancing breakthrough therapies across multiple therapeutic areas
              to address unmet medical needs worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">45</div>
                <div className="text-xs text-white/80">Active Molecules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">$143M</div>
                <div className="text-xs text-white/80">Annual Investment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-white/80">Clinical Trials</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-xs text-white/80">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">DEVELOPMENT STAGES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Development Pipeline
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              From molecule discovery to market approval, our structured approach ensures
              scientific rigor, regulatory compliance, and therapeutic innovation at every stage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-8 ${
                  stage.status === 'active' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-gray-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      stage.status === 'active' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {stage.status === 'active' ? (
                        <Activity className="text-blue-600" size={24} />
                      ) : (
                        <Clock className="text-gray-400" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl text-[var(--text-900)] mb-1">{stage.stage}</h3>
                      <p className="text-blue-600 font-medium text-sm">{stage.phase}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-[var(--text-900)] font-semibold">{stage.duration}</div>
                      <div className="text-[var(--text-900)]/60">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[var(--text-900)] font-semibold">{stage.successRate}</div>
                      <div className="text-[var(--text-900)]/60">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[var(--text-900)] font-semibold">{stage.molecules}</div>
                      <div className="text-[var(--text-900)]/60">Molecules</div>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-900)]/70">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Programs */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">THERAPEUTIC FOCUS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Therapeutic Programs
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our pipeline addresses critical unmet needs across major therapeutic areas,
              with innovative approaches backed by strong scientific foundations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {therapeuticPrograms.map((program, index) => (
              <motion.div
                key={program.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.area}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      program.stage === 'Phase 2' ? 'bg-green-50 text-green-700' :
                      program.stage === 'Phase 1' ? 'bg-blue-50 text-blue-700' :
                      program.stage === 'Discovery' ? 'bg-purple-50 text-purple-700' :
                      'bg-orange-50 text-orange-700'
                    }`}>
                      {program.stage}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[var(--text-900)] mb-2">{program.area}</h3>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{program.focus}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">MOLECULES:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {program.molecules.map((molecule, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                            {molecule}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">TIMELINE:</span>
                      <span className="text-sm text-[var(--text-900)]/70 block mt-1">{program.timeline}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">INVESTMENT:</span>
                      <span className="text-sm text-[var(--text-900)]/70 block mt-1">{program.investment}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">PARTNERS:</span>
                      <div className="text-xs text-[var(--text-900)]/70 mt-1 space-y-0.5">
                        {program.partners.slice(0, 2).map((partner, idx) => (
                          <div key={idx}>{partner}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm transition-colors">
                    View Program Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Platforms */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">TECHNOLOGY PLATFORM</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Innovation Platforms
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Cutting-edge technologies that accelerate drug discovery and development,
              enabling us to bring innovative therapies to patients faster and more efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg text-[var(--text-900)] mb-2">{platform.name}</h3>
                    <p className="text-[var(--text-900)]/70 text-sm mb-3">{platform.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ml-4 flex-shrink-0 ${
                    platform.status === 'operational' ? 'bg-green-50 text-green-700' :
                    platform.status === 'pilot' ? 'bg-blue-50 text-blue-700' :
                    'bg-orange-50 text-orange-700'
                  }`}>
                    {platform.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-900)]">APPLICATIONS:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {platform.applications.map((app, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-900)]">IMPACT:</span>
                    <span className="text-sm text-[var(--text-900)]/70 ml-2">{platform.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding & Milestones */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Funding Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
                <span className="text-sm tracking-wide">INVESTMENT ALLOCATION</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-8">
                R&D Investment Strategy
              </h2>

              <div className="space-y-4 mb-8">
                {fundingBreakdown.map((item, index) => (
                  <div key={item.category} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-[var(--text-900)]">{item.category}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${item.amount}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-[var(--text-900)] text-right">{item.amount}%</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[var(--border-color)] p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-blue-600" size={24} />
                  <h3 className="text-lg text-[var(--text-900)]">Investment Growth</h3>
                </div>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">
                  Annual R&D investment has grown 25% year-over-year, with strategic allocation
                  across discovery, development, and technology platforms.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$143M</div>
                    <div className="text-xs text-[var(--text-900)]/60">2024 Budget</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$114M</div>
                    <div className="text-xs text-[var(--text-900)]/60">2023 Actual</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">+25%</div>
                    <div className="text-xs text-[var(--text-900)]/60">Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
                <span className="text-sm tracking-wide">ACHIEVEMENTS</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-8">
                Key Milestones
              </h2>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="bg-white border border-[var(--border-color)] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-blue-600" size={20} />
                      <h3 className="text-lg text-[var(--text-900)]">{milestone.year}</h3>
                    </div>
                    <ul className="space-y-2">
                      {milestone.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/70">
                          <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Beaker className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Partner with Our Innovation Pipeline
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in advancing breakthrough therapies through strategic partnerships,
              collaborative research, and shared expertise in drug discovery and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>EXPLORE PARTNERSHIPS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Microscope size={16} />
                <span>VIEW PUBLICATIONS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}